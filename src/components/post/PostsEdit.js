import { __ } from "@wordpress/i18n";
import React, {  useState, useEffect  } from "react";
import SectionSlidePostSelector from "../multitab/sectionSlidePostSelector";
import {
  Tooltip,
  Button,
  CheckboxControl
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
    latestPosts 

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

  return (
    <>
    <div
          className="cocoblocks-panel panel-slide"
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
              {__("Content", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-post">
          {postElementsOrder.map((element, index) => (
            <div key={index} className="content-element-post">
              <span style={{color:'var(--light-color)',textTransform:'capitalize'}}>{element}</span>

              <div className={"button-move-element-post"}>
              <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveElement(index, index - 1)}
                      size="small"
                      disabled={index === 0}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                       onClick={() => moveElement(index, index + 1)}
                      size="small"
                      disabled={index === postElementsOrder.length - 1}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                  <Tooltip text={visibleElements[element] ? __("Hide", "cocoblocks") : __("Show", "cocoblocks")}>
              <Button
                onClick={() => toggleVisibility(element)}
                size="small"
                label={visibleElements[element] ? __("Hide", "cocoblocks") : __("Show", "cocoblocks")}
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
                  {__("Layout", "cocoblocks")}
                </h2>
              </div>
              
          <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
            <CustomSelectControl
              label={
                <>
                  <ViewQuiltIcon />
                  {__("Content direction", "cocoblocks")}
                </>
              }
              value={layoutPost}
              options={[
                {
                  label: __("Column", "slider"),
                  value: "vertical-layout",
                },
                {
                  label: __("Row", "slider"),
                  value: "horizontal-layout",
                },
              ]}
              onChange={(val) => setAttributes({ layoutPost: val })}
            />
            <CustomRangeControl
              label={
                <>
                   <SettingsEthernetIcon/>
                  {__("Gap between items", "cocoblocks")}
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
                  {__("Use content width", "cocoblocks")}
                </>
              }
              checked={enableContentWidthPost}
              onChange={(val) => setAttributes({ enableContentWidthPost: val })}
              showTooltip={true}
              tooltipText={__("Nested blocks will fill the width of this container. Toggle to constrain.", "cocoblocks")}
              tooltipTop = {'11px'}
              tooltipLeft = {'60%'}
            />
          {enableContentWidthPost && (
            <>
                <CustomRangeControl
                  label={
                    <>
                      <SettingsEthernetIcon/>
                      {__("Content width", "cocoblocks")}
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
                  {__("Flex wrap", "cocoblocks")}
                </>
              }
              value={layoutWrapPost}
              options={[
                {
                  label: __("Wrap", "slider"),
                  value: "wrap",
                },
                {
                  label: __("No Wrap", "slider"),
                  value: "nowrap",
                },
              ]}
              onChange={(val) => setAttributes({ layoutWrapPost: val })}
            />
            </div>
            </div>
            )}
              {activeSectionSlidePost === "style" && (
              
                  <div className="custom-block-added">

          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Background", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
          <CustomToggleControl
                      label={
                        <>
                        <ImageIcon />
                          {__("Featured Image", "cocoblocks")}
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
                        {__("Image fit", "cocoblocks")}
                      </>
                    }
                    value={imageBgPostSize || 'cover'}
                    onChange={(val) => setAttributes({imageBgPostSize: val })}
                    options={[  
                      {
                        label: __("Cover", "cocoblocks"),
                        value: "cover",
                      },
                      {
                        label: __("Contain", "cocoblocks"),
                        value: "contain",
                      },
                      {
                        label: __("Auto", "cocoblocks"),
                        value: "auto",
                      },
                    ]}
                  />
                  <CustomSelectControl
                    label={
                      <>
                        <RepeatIcon />
                        {__("Image repeat", "cocoblocks")}
                      </>
                    }
                    value={imageBgPostRepeat || 'no-repeat'}
                    onChange={(val) => setAttributes({imageBgPostRepeat: val })}
                    options={[  
                      {
                        label: __("Repeat", "cocoblocks"),
                        value: "repeat",
                      },
                      {
                        label: __("No Repeat", "cocoblocks"),
                        value: "no-repeat",
                      },
                    ]}
                  />
                   <CustomRangeControl
                    label={<> <SettingsOverscanIcon  />{__("Image position X", "cocoblocks")}</>}
                    value={imageBgPostPositionX || 0}
                    onChange={(val) => setAttributes({imageBgPostPositionX: val })}
                    min={-200}
                    max={200}
                    step={1}
                  />
                    <CustomRangeControl
                    label={<> <SettingsOverscanIcon  />{__("Image position Y", "cocoblocks")}</>}
                    value={imageBgPostPositionY || 0}
                    onChange={(val) => setAttributes({imageBgPostPositionY: val })}
                    min={-200}
                    max={200}
                    step={1}
                  />
                  </>
                    )}
</div>
         <div className="content-title-custom-panel">
                <h2 className="title-custom-panel">
                  {__("Spacing", "cocoblocks")}
                </h2>
              </div>
              
          <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
            <CustomRangeControl
                    label={<> <VerticalAlignTopIcon />{__("Content vertical padding", "cocoblocks")}</>}
                    value={backgroundVerticalPaddingPost}
                    onChange={(val) => setAttributes({backgroundVerticalPaddingPost: val })}
                    min={0}
                    max={256}
                    step={1}
                  />
           <CustomRangeControl
                    label={<> <VerticalAlignTopIcon  style={{
                      transform: "rotate(90deg)",
                    }} />{__("Content horizontal padding", "cocoblocks")}</>}
                    value={backgroundHorizontalPaddingPost}
                    onChange={(val) => setAttributes({backgroundHorizontalPaddingPost: val })}
                    min={0}
                    max={256}
                    step={1}
                  />
                  </div>
                  </div>
                
              )}
               {activeSectionSlidePost === "effect" && (
              <div className="custom-block-added">
     <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Effect", "cocoblocks")}
            </h2>
          </div>
      <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
      <CustomSelectControl
                    label={
                      <>
                      <TextureIcon />
                        {__("Divider", "cocoblocks")}
                      </>
                    }
                    value={divider || 'none'}
                    onChange={(val) => setAttributes({divider: val })}
                    options={dividerBackgroundOptions}
                  />
                    {divider !== "none" && (
                      <>
                   <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon style={{transform:'rotate(90deg'}} />
                        {__("Height", "cocoblocks")}
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
                        {__("Width", "cocoblocks")}
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
                        buttonTitle={__("Color", "cocoblocks")}
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
                          {__("Flip", "cocoblocks")}
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
                          {__("Invert", "cocoblocks")}
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
                        {__("Position", "cocoblocks")}
                      </>
                    }
                    value={positionDivider || 'divider-top'}
                    onChange={(val) => setAttributes({positionDivider: val })}
                    options={[
                      {
                        label: __("Top", "cocoblocks"),
                        value: "divider-top",
                      },
                      {
                        label: __("Bottom", "cocoblocks"),
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
              {__("Query", "cocoblocks")}
            </h2>
          </div>
      <div className="content-section-panel" style={{ padding: "0", marginLeft:'14px',marginRight:'14px',marginTop:'24px',marginBottom:'32px' }}>
          <div className="custom-select checkbox" style={{paddingTop:'12px',paddingBottom:'10px'}}>
           <CheckboxControl
                    __nextHasNoMarginBottom
                    label={<><DynamicFeedIcon />{__('Show Latest Posts','cocoblock')}</>}
                    checked={latestPosts}
                    onChange={handleLatestPostsChange}
                />
                </div>
                {latestPosts === false && (
                  <>
           <div className="custom-select select-control-label-right select-material transform-none">
        <TextField
          label={<><CategoryIcon />{__("Include Categories", "cocoblocks")}</>}
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
        label={<><FlagIcon />{__("Specific Posts", "cocoblocks")}</>}
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
            label={<><SortByAlphaIcon />{__("Order", "cocoblocks")}</>}
            value={order}
            options={[
              { label: __("Ascending", "cocoblocks"), value: "ASC" },
              { label: __("Descending", "cocoblocks"), value: "DESC" },
            ]}
            onChange={(value) => setAttributes({ order: value })}
          />
           <CustomRangeControl
            label={<><ThirtyFpsSelectIcon />{__("Number of Posts", "cocoblocks")}</>}
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
              {__("Element", "cocoblocks")}
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
