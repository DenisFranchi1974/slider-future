
import { registerStore, withSelect, withDispatch } from '@wordpress/data';
import { apiFetch } from '@wordpress/data-controls';
import {
    Button,
    PanelBody,
    ColorPicker,
} from '@wordpress/components';
import {
    render,
    Component
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';

registerStore('my-plugin/settings', {
    reducer(state = {}, action) {
        switch (action.type) {
            case 'SET_SETTINGS':
                return {
                    ...state,
                    ...action.settings,
                };
        }
        return state;
    },
    actions: {
        setSettings(settings) {
            return {
                type: 'SET_SETTINGS',
                settings,
            };
        },
        *fetchSettings() {
            const settings = yield apiFetch({ path: '/wp/v2/settings' });
            return {
                type: 'SET_SETTINGS',
                settings,
            };
        },
        *saveSettings(settings) {
            yield apiFetch({
                path: '/wp/v2/settings',
                method: 'POST',
                data: settings,
            });
            return {
                type: 'SET_SETTINGS',
                settings,
            };
        },
    },
    selectors: {
        getSettings(state) {
            return state;
        },
    },
    controls: {
        FETCH_FROM_API(action) {
            return apiFetch({ path: action.path });
        },
        SAVE_TO_API(action) {
            return apiFetch({
                path: action.path,
                method: 'POST',
                data: action.data,
            });
        },
    },
    resolvers: {
        *getSettings() {
            const settings = yield actions.fetchSettings();
            return actions.setSettings(settings);
        },
    },
});

class App extends Component {
    componentDidMount() {
        this.props.fetchSettings();
    }

    handleColorChange = (color) => {
        this.props.setSettings({ primary_color: color.hex });
    };

    saveSettings = () => {
        this.props.saveSettings(this.props.settings);
        alert(__('Settings saved!', 'my-plugin'));
    };

    render() {
        const { primary_color } = this.props.settings;

        if (!this.props.isAPILoaded) {
            return <p>{__('Loading...', 'my-plugin')}</p>;
        }

        return (
            <div className="App">
                <h1>{__('My Plugin Settings', 'my-plugin')}</h1>
                <p>{__('Here you can configure the settings for My Plugin.', 'my-plugin')}</p>
                <PanelBody title={__('Primary Color', 'my-plugin')}>
                    <ColorPicker
                        color={primary_color || '#ab0052'}
                        onChangeComplete={this.handleColorChange}
                        disableAlpha
                    />
                    <Button isPrimary onClick={this.saveSettings}>
                        {__('Save', 'my-plugin')}
                    </Button>
                </PanelBody>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        settings: state['my-plugin/settings'],
        isAPILoaded: Boolean(state['my-plugin/settings']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSettings: () => dispatch('my-plugin/settings').fetchSettings(),
        setSettings: (settings) => dispatch('my-plugin/settings').setSettings(settings),
        saveSettings: (settings) => dispatch('my-plugin/settings').saveSettings(settings),
    };
};

const ConnectedApp = withSelect(mapStateToProps)(
    withDispatch(mapDispatchToProps)(App)
);

export default ConnectedApp;

document.addEventListener('DOMContentLoaded', () => {
    render(<ConnectedApp />, document.getElementById('my-plugin-admin-page'));
});
