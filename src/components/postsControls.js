import { __ } from "@wordpress/i18n";
import React, {  useState, useEffect  } from "react";
import SectionSlidePostSelector from "./sectionSlidePostSelector";
import {
  SelectControl,
  PanelBody,
  Icon,
  RangeControl,
  Tooltip,
  ToggleControl,
  Button,
} from "@wordpress/components";
import AlignmentControl from "./align/aligncontrol";
import {  button, info} from "@wordpress/icons";
import apiFetch from '@wordpress/api-fetch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PostsControls = ({ setAttributes, attributes, index, element }) => {
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
    visibleElements = {}
} = attributes;

const [categories, setCategories] = useState([]);


useEffect(() => {
  // Recupera le categorie disponibili
  apiFetch({ path: '/wp/v2/categories' }).then((data) => {
    const categoryOptions = data
      .filter(category => category.slug !== 'uncategorized') // Escludi la categoria 'Uncategorized'
      .map((category) => ({
        label: category.name,
        value: category.id,
      }));
    setCategories(categoryOptions);
  });
}, []);


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
    <PanelBody
          className="cocoblocks-panel panel-slide"
          title={
            <>
              <Icon icon={button} />
              {__("Posts Content", "cocoblocks")}
            </>
          }
        >
      <div className="content-subdescription-section-slider">
        <h2>{__("Posts Content")}</h2>
      </div>
      <SectionSlidePostSelector onSectionChange={setActiveSectionSlidePost} />
      {activeSectionSlidePost === "content" && (
        <>
          {postElementsOrder.map((element, index) => (
            <div key={index}>
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
        </>
      )}

      {activeSectionSlidePost === "layout" && (
        <>
         <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Layout", "cocoblocks")}
                </h2>
              </div>
              
                <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select select-control-label-right">
            <SelectControl
              label={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
                  </svg>
                  {__("Content direction", "cocoblocks")}
                </>
              }
              value={layoutPost}
              options={[
                {
                  label: __("Column", "slider"),
                  value: "column",
                },
                {
                  label: __("Row", "slider"),
                  value: "row",
                },
              ]}
              onChange={(val) => setAttributes({ layoutPost: val })}
            />
          </div>
          <div className="custom-select">
            <RangeControl
              label={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" />
                  </svg>
                  {__("Gap between items", "cocoblocks")}
                </>
              }
              value={gapItemsPost}
              onChange={(val) => setAttributes({ gapItemsPost: val })}
              min={0}
              max={256}
              step={1}
            />
          </div>
          <div className="custom-select">
            <AlignmentControl
              value={positionPost}
              onChange={(val) => setAttributes({ positionPost: val })}
            />
          </div>
          <div className="custom-select">
            <ToggleControl
              label={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Z" />
                  </svg>
                  {__("Use content width", "cocoblocks")}
                </>
              }
              checked={enableContentWidthPost}
              onChange={(val) => setAttributes({ enableContentWidthPost: val })}
            />
            <Tooltip
              placement="top"
              style={{
                padding: "10px",
                maxWidth: "300px",
                borderRadius: "4px",
              }}
              text={__(
                "Nested blocks will fill the width of this container. Toggle to constrain.",
                "cocoblocks"
              )}
            >
              <Icon
                icon={info}
                className="tooltip-icon"
                style={{ top: "12px" }}
              />
            </Tooltip>
          </div>
          {enableContentWidthPost && (
            <>
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z" />
                      </svg>
                      {__("Content width", "cocoblocks")}
                    </>
                  }
                  value={contentWidthPost}
                  onChange={(val) => setAttributes({ contentWidthPost: val })}
                  min={100}
                  max={3200}
                  step={1}
                />
              </div>
            </>
          )}
          <div className="custom-select select-control-label-right">
            <SelectControl
              label={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M40-80v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-240-80h80v-200h-80v200ZM40-520v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-560-80h80v-200h-80v200Zm640 0h80v-200h-80v200Z" />
                  </svg>
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
          <SelectControl
              multiple
              label={__("Select Categories to Include", "cocoblocks")}
              value={includeCategories}
              options={categories}
              onChange={(value) => setAttributes({ includeCategories: value, excludeCategories: categories.filter(cat => !value.includes(cat.value)) })}
            />

<SelectControl
            label={__("Order", "cocoblocks")}
            value={order}
            options={[
              { label: __("Ascending", "cocoblocks"), value: "ASC" },
              { label: __("Descending", "cocoblocks"), value: "DESC" },
            ]}
            onChange={(value) => setAttributes({ order: value })}
          />
           <RangeControl
            label={__("Number of Posts", "cocoblocks")}
            value={postsToShow}
            onChange={(value) => setAttributes({ postsToShow: value })}
            min={1}
            max={20}
          />

          </div>
        </>
      )}
      </PanelBody>
    </>
  );
};

export default PostsControls;
