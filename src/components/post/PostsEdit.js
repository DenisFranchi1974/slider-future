import { __ } from "@wordpress/i18n";
import React, {  useState, useEffect  } from "react";
import SectionSlidePostSelector from "../multitab/sectionSlidePostSelector";
import {
  Tooltip,
  Button,
  CheckboxControl, __experimentalBoxControl as BoxControl
} from "@wordpress/components";
import AlignmentControl from "../align/aligncontrol";
import CustomSelectControl  from "../../controls/select/CustomSelectControl";
import CustomToggleControl  from "../../controls/toggle/CustomToggleControl";
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';
import WrapTextIcon from '@mui/icons-material/WrapText';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import FlipIcon from '@mui/icons-material/Flip';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextureIcon from '@mui/icons-material/Texture';
import {dividerBackgroundOptions} from '../../assets/options';
import {borderStyleOptions} from '../../assets/options';
import ColorOptionsPanel from "../colorPanel";
import ImageIcon from '@mui/icons-material/Image';
import RepeatIcon from '@mui/icons-material/Repeat';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import PostImageEdit from "./image/PostImageEdit";
import PostTitleEdit from "./title/PostTitleEdit";
import PostExcerptEdit from "./excerpt/PostExcerptEdit";
import PostLinkEdit from "./link/PostLinkEdit";
import PostAuthorEdit from "./author/PostAuthorEdit";
import PostDateEdit from "./date/PostDateEdit";
import PostCategoriesEdit from "./categories/PostCategoriesEdit";
import PostTagsEdit from "./tags/PostTagsEdit";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import ThirtyFpsSelectIcon from '@mui/icons-material/ThirtyFpsSelect';
import CategoryIcon from '@mui/icons-material/Category';
import FlagIcon from '@mui/icons-material/Flag';
import { Chip, TextField, MenuItem } from '@mui/material';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ProTooltip from '../ProTooltip';
import PaddingIcon from '@mui/icons-material/Padding';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderInnerIcon from '@mui/icons-material/BorderInner';


const PostsEdit = ({ 
  setAttributes, 
  attributes, 
  onPlayAnimation,
  onPlayAnimationPostTitle, 
  index, 
  element, 
  onPlayAnimationPostExcerpt, 
  onPlayAnimationPostLink, 
  onPlayAnimationPostAuthor,
  onPlayAnimationPostDate,
  onPlayAnimationPostCategories,
  onPlayAnimationPostTags
}) => {
  const { 
    postElementsOrder,
    layoutPost,
    gapItemsPost,
    positionPost,
    enableContentWidthPost,
    contentWidthPost,
    enableContentWidthSlidePost,
    contentWidthSlidePost,
    justifyContentSlidePost,
    layoutWrapPost,
    includeCategories = [],
    excludeCategories = [],
    order = "ASC",
    postsToShow,
    visibleElements = {},
    backgroundVerticalPaddingPost,
    backgroundHorizontalPaddingPost,
    divider,
    heightDivider,
    widthDivider,
    colorDivider,
    flipDivider,
    invertDivider,
    positionDivider,
    imageBgPost,
    imageBgPostSize,
    imageBgPostRepeat,
    imageBgPostPositionX,
    imageBgPostPositionY,
    specificPosts,
    latestPosts,
    backgroundColorContentPost,
    contentPostPadding,
    contentPostBorderStyle,
    contentPostBorderSize,
    contentPostBorderColor,
    contentPostBorderRadius,

} = attributes;

const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    // Fetch categories
    wp.apiFetch({ path: '/wp/v2/categories' }).then((categories) => {
      setCategories(categories);
    });

    // Fetch posts
    wp.apiFetch({ path: '/wp/v2/posts?per_page=100' }).then((posts) => {
      setPosts(posts);
    });
  }, []);

  const handleSpecificPostsChange = (event) => {
    const value = event.target.value;
    setAttributes({ specificPosts: typeof value === 'string' ? value.split(',') : value });
  };

  const handleIncludeCategoriesChange = (event) => {
    const value = event.target.value;
    setAttributes({ includeCategories: typeof value === 'string' ? value.split(',') : value });
  };

  const handleLatestPostsChange = (isChecked) => {
    setAttributes({ latestPosts: isChecked });
  };

  // Funzione per spostare gli elementi in custom content(posts)
  const moveElement = (fromIndex, toIndex) => {
    const updatedOrder = [...postElementsOrder];
    const [movedElement] = updatedOrder.splice(fromIndex, 1);
    updatedOrder.splice(toIndex, 0, movedElement);

    setAttributes({ postElementsOrder: updatedOrder });
  };

  const toggleVisibility = (element) => {
    const updatedVisibleElements = {
      ...visibleElements,
      [element]: !visibleElements[element],
    };
    setAttributes({ visibleElements: updatedVisibleElements });
  };

  // Section slider
  const [activeSectionSlidePost, setActiveSectionSlidePost] =
    useState("content");

     const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
      if (typeof window.isProFeature !== 'undefined') {
          setIsProFeature(window.isProFeature);
      }
  }, []);

  return (
    <>
    <div
          className="slider-future-panel panel-slide"
        >
      <div className="content-subdescription-section-slider">
        <h2>{__("Posts Content")}</h2>
      </div>
      <SectionSlidePostSelector onSectionChange={setActiveSectionSlidePost} />
      {activeSectionSlidePost === "content" && (
        <>
         <div
            className="content-title-custom-panel"
          >
            <h2 className="title-custom-panel">
              {__("Content", "slider-future")}
            </h2>
          </div>
          <div className="content-section-post">
          {postElementsOrder.map((element, index) => (
            <div key={index} className="content-element-post">
              <span style={{color:'var(--light-color)',textTransform:'capitalize'}}>{element}</span>

              <div className={"button-move-element-post"}>
              <Tooltip text={__("Move before", "slider-future")}>
                    <Button
                      onClick={() => moveElement(index, index - 1)}
                      size="small"
                      disabled={index === 0}
                      label={__("Move before", "slider-future")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "slider-future")}>
                    <Button
                       onClick={() => moveElement(index, index + 1)}
                      size="small"
                      disabled={index === postElementsOrder.length - 1}
                      label={__("Move after", "slider-future")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                  <Tooltip text={visibleElements[element] ? __("Hide", "slider-future") : __("Show", "slider-future")}>
              <Button
                onClick={() => toggleVisibility(element)}
                size="small"
                label={visibleElements[element] ? __("Hide", "slider-future") : __("Show", "slider-future")}
              >
                {visibleElements[element] ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Button>
            </Tooltip>
             </div>
            </div>
          ))}
          </div>
        </>
      )}

      {activeSectionSlidePost === "layout" && (
         <div className="custom-block-added">
         <div className="content-title-custom-panel">
                <h2 className="title-custom-panel">
                  {__("Layout", "slider-future")}
                </h2>
              </div>
              
          <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
            <CustomSelectControl
              label={
                <>
                  <ViewQuiltIcon />
                  {__("Content direction", "slider-future")}
                </>
              }
              value={layoutPost}
              options={[
                {
                  label: __("Column", "slider-future"),
                  value: "vertical-layout",
                },
                {
                  label: __("Row", "slider-future"),
                  value: "horizontal-layout",
                },
              ]}
              onChange={(val) => setAttributes({ layoutPost: val })}
            />
            <CustomRangeControl
              label={
                <>
                   <SettingsEthernetIcon/>
                  {__("Gap between items", "slider-future")}
                </>
              }
              value={gapItemsPost}
              onChange={(val) => setAttributes({ gapItemsPost: val })}
              min={0}
              max={256}
              step={1}
            />
          <div className="custom-select">
            <AlignmentControl
              value={positionPost}
              onChange={(val) => setAttributes({ positionPost: val })}
            />
          </div>
            <CustomToggleControl
              label={
                <>
                   <WidthNormalIcon />
                  {__("Use content width", "slider-future")}
                </>
              }
              checked={enableContentWidthPost}
              onChange={(val) => setAttributes({ enableContentWidthPost: val })}
              showTooltip={true}
              tooltipText={__("Nested blocks will fill the width of this container. Toggle to constrain.", "slider-future")}
              tooltipTop = {'11px'}
              tooltipLeft = {'60%'}
            />
          {enableContentWidthPost && (
            <>
                <CustomRangeControl
                  label={
                    <>
                      <SettingsEthernetIcon/>
                      {__("Content width", "slider-future")}
                    </>
                  }
                  value={contentWidthPost}
                  onChange={(val) => setAttributes({ contentWidthPost: val })}
                  min={100}
                  max={3200}
                  step={1}
                />
            </>
          )}
            <CustomSelectControl
              label={
                <>
                  <WrapTextIcon />
                  {__("Flex wrap", "slider-future")}
                </>
              }
              value={layoutWrapPost}
              options={[
                {
                  label: __("Wrap", "slider-future"),
                  value: "wrap",
                },
                {
                  label: __("No Wrap", "slider-future"),
                  value: "nowrap",
                },
              ]}
              onChange={(val) => setAttributes({ layoutWrapPost: val })}
            />
             <CustomToggleControl
              label={
                <>
                   <WidthNormalIcon />
                  {__("Use content Slide width", "slider-future")}
                </>
              }
              checked={enableContentWidthSlidePost}
              onChange={(val) => setAttributes({ enableContentWidthSlidePost: val })}
              showTooltip={true}
              tooltipText={__("Nested blocks will fill the width of this container. Toggle to constrain.", "slider-future")}
              tooltipTop = {'11px'}
              tooltipLeft = {'70%'}
            />
          {enableContentWidthSlidePost && (
            <>
                <CustomRangeControl
                  label={
                    <>
                      <SettingsEthernetIcon/>
                      {__("Content Slide width", "slider-future")}
                    </>
                  }
                  value={contentWidthSlidePost}
                  onChange={(val) => setAttributes({ contentWidthSlidePost: val })}
                  min={500}
                  max={3200}
                  step={1}
                />
            </>
          )}
           <CustomSelectControl
              label={
                <>
                  <WrapTextIcon />
                  {__("Justify Content Slide", "slider-future")}
                </>
              }
              value={justifyContentSlidePost}
              options={[
                {
                  label: __("Left", "slider-future"),
                  value: "left",
                },
                {
                  label: __("Center", "slider-future"),
                  value: "center",
                },
                {
                  label: __("Right", "slider-future"),
                  value: "flex-end",
                },
              ]}
              onChange={(val) => setAttributes({ justifyContentSlidePost: val })}
            />
            </div>
            </div>
            )}
              {activeSectionSlidePost === "style" && (
              
                  <div className="custom-block-added">

          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Background", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
          <CustomToggleControl
                      label={
                        <>
                        <ImageIcon />
                          {__("Featured Image", "slider-future")}
                        </>
                      }
                      checked={imageBgPost || false}
                      onChange={(val) => setAttributes({imageBgPost: val })}
                    />
                    {imageBgPost && (
                      <>
                <CustomSelectControl
                    label={
                      <>
                        <FitScreenIcon />
                        {__("Image fit", "slider-future")}
                      </>
                    }
                    value={imageBgPostSize || 'cover'}
                    onChange={(val) => setAttributes({imageBgPostSize: val })}
                    options={[  
                      {
                        label: __("Cover", "slider-future"),
                        value: "cover",
                      },
                      {
                        label: __("Contain", "slider-future"),
                        value: "contain",
                      },
                      {
                        label: __("Auto", "slider-future"),
                        value: "auto",
                      },
                    ]}
                  />
                  <CustomSelectControl
                    label={
                      <>
                        <RepeatIcon />
                        {__("Image repeat", "slider-future")}
                      </>
                    }
                    value={imageBgPostRepeat || 'no-repeat'}
                    onChange={(val) => setAttributes({imageBgPostRepeat: val })}
                    options={[  
                      {
                        label: __("Repeat", "slider-future"),
                        value: "repeat",
                      },
                      {
                        label: __("No Repeat", "slider-future"),
                        value: "no-repeat",
                      },
                    ]}
                  />
                   <CustomRangeControl
                    label={<> <SettingsOverscanIcon  />{__("Image position X", "slider-future")}</>}
                    value={imageBgPostPositionX || 0}
                    onChange={(val) => setAttributes({imageBgPostPositionX: val })}
                    min={-200}
                    max={200}
                    step={1}
                  />
                    <CustomRangeControl
                    label={<> <SettingsOverscanIcon  />{__("Image position Y", "slider-future")}</>}
                    value={imageBgPostPositionY || 0}
                    onChange={(val) => setAttributes({imageBgPostPositionY: val })}
                    min={-200}
                    max={200}
                    step={1}
                  />
                  </>
                    )}
</div>
<div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
<div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={backgroundColorContentPost}
            setColorNormal={(color) => setAttributes({ backgroundColorContentPost: color })}
            buttonTitle={__("Background Color", "slider-future")}
            buttonIcon={
                <ColorLensIcon />
            }
            />
            </div>
  </div>
         <div className="content-title-custom-panel">
                <h2 className="title-custom-panel">
                  {__("Spacing", "slider-future")}
                </h2>
              </div>
              
          <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
            <CustomRangeControl
                    label={<> <VerticalAlignTopIcon />{__("Content vertical", "slider-future")}</>}
                    value={backgroundVerticalPaddingPost}
                    onChange={(val) => setAttributes({backgroundVerticalPaddingPost: val })}
                    min={0}
                    max={256}
                    step={1}
                  />
           <CustomRangeControl
                    label={<> <VerticalAlignTopIcon  style={{
                      transform: "rotate(90deg)",
                    }} />{__("Content horizontal", "slider-future")}</>}
                    value={backgroundHorizontalPaddingPost}
                    onChange={(val) => setAttributes({backgroundHorizontalPaddingPost: val })}
                    min={0}
                    max={256}
                    step={1}
                  />
                    <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select box-control">
              <BoxControl
                label={
                  <>
                    <PaddingIcon/>
                    {__("Padding Content", "slider-future")}
                  </>
                }
                values={contentPostPadding }
                onChange={(val) => setAttributes({contentPostPadding: val })}
                units={{
                  px: true,
                  em: false,
                  rem: false,
                  '%': false,
                }}
              />
            </div>
            </div>
                  </div>

                  <div className="content-title-custom-panel">
                <h2 className="title-custom-panel">
                  {__("Border", "slider-future")}
                </h2>
              </div>
              
          <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
          <CustomSelectControl
            label={
                <>
                   <BorderStyleIcon />
                   {__("Border style", "slider-future")}
                </>
            }
            value={contentPostBorderStyle}
            onChange={(val) => setAttributes({contentPostBorderStyle: val })}
            options={borderStyleOptions}
            />
            {contentPostBorderStyle !== "none" && (
                <>
                <div className="custom-select color">
                <ColorOptionsPanel
            colorNormal={contentPostBorderColor}
            setColorNormal={(color) => setAttributes({ contentPostBorderColor: color })}
            buttonTitle={__("Border Color", "slider-future")}
            buttonIcon={
                <BorderColorIcon/>
            }
            />
            </div>
            <div className="custom-select box-control">
                 <BoxControl
                 id="custom-margin-control"
                 label={
                   <>
                    <BorderLeftIcon />
                    {__("Border width", "slider-future")}
                   </>
                 }
                 values={contentPostBorderSize}
                 onChange={(val) => setAttributes({contentPostBorderSize: val })}
                 units={{
                     px: true,
                     em: false,
                     rem: false,
                     '%': false,
                   }}
               />
               </div>
            </>
            )}
             <div className="custom-select box-control">
             <BoxControl
                 id="custom-margin-control"
                 label={
                   <>
                     <BorderInnerIcon />
                     {__("Border Radius", "slider-future")}
                   </>
                 }
                 values={contentPostBorderRadius}
                 onChange={(val) => setAttributes({contentPostBorderRadius: val })}
                 units={{
                     px: true,
                     em: false,
                     rem: false,
                     '%': false,
                   }}
               />
               </div>
            </div>

                  </div>
                
              )}
               {activeSectionSlidePost === "effect" && (
              <div className="custom-block-added">
     <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Effect", "slider-future")}
            </h2> 
          </div>
      <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
      <div className={` ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
      <CustomSelectControl
                    label={
                      <>
                      <TextureIcon />
                        {__("Divider", "slider-future")}
                      </>
                    }
                    value={divider || 'none'}
                    onChange={(val) => setAttributes({divider: val })}
                    options={dividerBackgroundOptions}
                    disabled= {isProFeature}
                    />
                     {isProFeature && (
                          <ProTooltip
                          tooltipProTop={'13px'}
                            tooltipProRight={'92px'}
                            />
                         )}
                         </div>
                    {divider !== "none" && (
                      <>
                   <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon style={{transform:'rotate(90deg'}} />
                        {__("Height", "slider-future")}
                      </>
                    }
                    value={heightDivider || 200}
                    onChange={(val) => setAttributes({heightDivider: val })}
                    min={0}
                    max={500}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon />
                        {__("Width", "slider-future")}
                      </>
                    }
                    value={widthDivider || 100}
                    onChange={(val) => setAttributes({widthDivider: val })}
                    min={100}
                    max={300}
                    step={1}
                  />
                  <div className="custom-select color">
                      <ColorOptionsPanel
                        colorNormal={colorDivider}
                        setColorNormal={(color) => setAttributes({ colorDivider: color })}
                        buttonTitle={__("Color", "slider-future")}
                        buttonIcon={
                          <ColorLensIcon />
                        }
                      />
                    </div>
                    {["divider-wawes", "divider-curve-asymmetrical", "divider-triangle-asymmetrical", "divider-tilt"].includes(divider) && (
                    <CustomToggleControl
                      label={
                        <>
                        <FlipIcon/>
                          {__("Flip", "slider-future")}
                        </>
                      }
                      checked={flipDivider || false}
                      onChange={(val) => setAttributes({flipDivider: val })}
                    />
                  )}
                  {divider !== 'divider-tilt' && (
                      <CustomToggleControl
                      label={
                        <>
                        <ScreenRotationAltIcon/>
                          {__("Invert", "slider-future")}
                        </>
                      }
                      checked={invertDivider || false}
                      onChange={(val) => setAttributes({invertDivider: val })}
                    />
                  )}
                     <CustomSelectControl
                    label={
                      <>
                      <MultipleStopIcon style={{transform:'rotate(90deg)'}} />
                        {__("Position", "slider-future")}
                      </>
                    }
                    value={positionDivider || 'divider-top'}
                    onChange={(val) => setAttributes({positionDivider: val })}
                    options={[
                      {
                        label: __("Top", "slider-future"),
                        value: "divider-top",
                      },
                      {
                        label: __("Bottom", "slider-future"),
                        value: "divider-bottom",
                      },
                    ]}
                  />
                  </>
                )}
        </div>
        </div>
               )}
                {activeSectionSlidePost === "query" && (
                  <>
                   <div className="custom-block-added">
     <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Query", "slider-future")}
            </h2>
          </div>
      <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
          <div className="custom-select checkbox" style={{paddingTop:'12px',paddingBottom:'10px'}}>
           <CheckboxControl
                    __nextHasNoMarginBottom
                    label={<><DynamicFeedIcon />{__('Show Latest Posts',"slider-future")}</>}
                    checked={latestPosts}
                    onChange={handleLatestPostsChange}
                />
                </div>
                {latestPosts === false && (
                  <>
           <div className="custom-select select-control-label-right select-material transform-none">
        <TextField
          label={<><CategoryIcon />{__("Include Categories", "slider-future")}</>}
          select
          value={includeCategories}
          onChange={handleIncludeCategoriesChange}
          slotProps={{
            select: {
              multiple: true,
              renderValue: (selected) => (
                <div className="chip-container">
                  {selected.map((value) => (
                    <Chip key={value} label={categories.find((category) => category.id === value)?.name} />
                  ))}
                </div>
              ),
            },
          }}
          variant="outlined"
          fullWidth
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div className="custom-select select-control-label-right select-material transform-none">
      <TextField
        label={<><FlagIcon />{__("Specific Posts", "slider-future")}</>}
        select
        value={specificPosts}
        onChange={handleSpecificPostsChange}
        slotProps={{
          select: {
            multiple: true,
            renderValue: (selected) => (
              <div className="chip-container">
                {selected.map((value) => (
                  <Chip key={value} label={posts.find((post) => post.id === value)?.title.rendered} />
                ))}
              </div>
            ),
          },
        }}
        variant="outlined"
        fullWidth
      >
        {posts.map((post) => (
          <MenuItem key={post.id} value={post.id}>
            {post.title.rendered}
          </MenuItem>
        ))}
      </TextField>
      </div>
      </>
                )}
      <CustomSelectControl
            label={<><SortByAlphaIcon />{__("Order", "slider-future")}</>}
            value={order}
            options={[
              { label: __("Ascending", "slider-future"), value: "ASC" },
              { label: __("Descending", "slider-future"), value: "DESC" },
            ]}
            onChange={(value) => setAttributes({ order: value })}
          />
           <CustomRangeControl
            label={<><ThirtyFpsSelectIcon />{__("Number of Posts", "slider-future")}</>}
            value={postsToShow}
            onChange={(value) => setAttributes({ postsToShow: value })}
            min={1}
            max={30}
          />
      </div>
      </div>

                  </>
                )}
   {activeSectionSlidePost === "element" && (
    <div className="custom-block-added" style={{marginBottom:'32px'}}>
       <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Element", "slider-future")}
            </h2>
          </div>
       {visibleElements['image'] && (
         <PostImageEdit
          setAttributes={setAttributes}
          attributes={attributes}
          onPlayAnimation={onPlayAnimation} 
         /> 
          )}
              {visibleElements['title'] && (
                    <PostTitleEdit
                     setAttributes={setAttributes}
                     attributes={attributes}
                     onPlayAnimationPostTitle={onPlayAnimationPostTitle} 
                    /> 
              )}
               {visibleElements['excerpt'] && (
                    <PostExcerptEdit
                     setAttributes={setAttributes}
                     attributes={attributes}
                     onPlayAnimationPostExcerpt={onPlayAnimationPostExcerpt} 
                    /> 
              )}
               {visibleElements['link'] && (
                    <PostLinkEdit
                     setAttributes={setAttributes}
                     attributes={attributes}
                     onPlayAnimationPostLink={onPlayAnimationPostLink} 
                    /> 
              )}
               {visibleElements['author'] && (
                    <PostAuthorEdit
                     setAttributes={setAttributes}
                     attributes={attributes}
                     onPlayAnimationPostAuthor={onPlayAnimationPostAuthor} 
                    /> 
              )}
               {visibleElements['date'] && (
                    <PostDateEdit
                     setAttributes={setAttributes}
                     attributes={attributes}
                     onPlayAnimationPostDate={onPlayAnimationPostDate} 
                    /> 
              )}
               {visibleElements['categories'] && (
                    <PostCategoriesEdit
                     setAttributes={setAttributes}
                     attributes={attributes}
                     onPlayAnimationPostCategories={onPlayAnimationPostCategories} 
                    /> 
              )}
               {visibleElements['tags'] && (
                    <PostTagsEdit
                     setAttributes={setAttributes}
                     attributes={attributes}
                     onPlayAnimationPostTags={onPlayAnimationPostTags} 
                    /> 
              )}
              </div>
              )}

      </div>
    </>
  );
};

export default PostsEdit;
