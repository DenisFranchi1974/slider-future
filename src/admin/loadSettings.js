import apiFetch from '@wordpress/api-fetch';

export const loadSettings = async (setPrimaryColor, setBackgroundColor, setLabelColor, setWhiteColor, setBlackColor, setDarkColor, setDarkColorHover, setDarkButton, setLightColor, setLightColorHover ) => {
    const data = await apiFetch({ path: '/wp/v2/slider-settings' });
    const primaryColor = data.primaryColor || '#7A079A';
    const backgroundColor = data.backgroundColor || '#18191c';
    const labelColor = data.labelColor || '#535960';
    const whiteColor = data.whiteColor || '#ffffff';
    const blackColor = data.blackColor || '#000000';
    const darkColor = data.darkColor || '#21242b';
    const darkColorHover = data.darkColorHover || '#2e323c';
    const darkButton = data.darkButton || '#3c4556';
    const lightColor = data.lightColor || '#c5c6d0';
    const lightColorHover = data.lightColorHover || '#d9dae1';

    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    document.documentElement.style.setProperty('--label-color', labelColor);
    document.documentElement.style.setProperty('--white-color', whiteColor);
    document.documentElement.style.setProperty('--black-color', blackColor);
    document.documentElement.style.setProperty('--dark-color', darkColor);
    document.documentElement.style.setProperty('--dark-color-hover', darkColorHover);
    document.documentElement.style.setProperty('--dark-button', darkButton);
    document.documentElement.style.setProperty('--light-color', lightColor);
    document.documentElement.style.setProperty('--light-color-hover', lightColorHover);

    setPrimaryColor(primaryColor);
    setBackgroundColor(backgroundColor);
    setLabelColor(labelColor);
    setWhiteColor(whiteColor);
    setBlackColor(blackColor);
    setDarkColor(darkColor);
    setDarkColorHover(darkColorHover);
    setDarkButton(darkButton);
    setLightColor(lightColor);
    setLightColorHover(lightColorHover);
};