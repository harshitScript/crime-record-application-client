import { Modal } from "react-bootstrap";
import ActionTile from "./ActionTile/ActionTile";
import { BsFillTrashFill } from "react-icons/bs";
import { MdViewInAr } from "react-icons/md";
import { RiImageEditLine, RiImageAddLine } from "react-icons/ri";
import ViewImage from "./ViewImage/ViewImage";
import { useState } from "react";
import EditImage from "./EditImage/EditImage";
import Loader1 from "../Loaders/Loader1";
import { PlaceMiddle } from "./ImageActionsPopup.style";

const ImageActionsPopup = ({
  onClose = () => {},
  title = "Image Actions",
  imageURL = "",
  onEditImageHandler = () => {},
  onImageRemoveHandler = () => {},
  isLoading = false,
}) => {
  const [viewImage, setViewImage] = useState(false);
  const toggleViewImage = () => setViewImage((current) => !current);
  const editInputId = "image-input-edit";
  const toggleEditImage = () => {
    document.getElementById(editInputId).click();
    return 1;
  };
  const removeImageClickHandler = () => {
    if (confirm("Do you want to remove the user image ?")) {
      onImageRemoveHandler();
      return 1;
    } else {
      return 0;
    }
  };
  return (
    <Modal show={true}>
      <Modal.Header closeButton={true} onHide={onClose}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? (
          <PlaceMiddle>
            <Loader1 />
          </PlaceMiddle>
        ) : (
          <>
            {/* ACTIONS TAB */}
            <>
              {imageURL ? (
                <ActionTile
                  LogoComp={MdViewInAr}
                  onClick={toggleViewImage}
                  action="View"
                />
              ) : (
                <ActionTile LogoComp={RiImageAddLine} action="Add" />
              )}
              {imageURL ? (
                <ActionTile
                  LogoComp={RiImageEditLine}
                  onClick={toggleEditImage}
                  action="Edit"
                />
              ) : (
                <></>
              )}
              {imageURL ? (
                <ActionTile
                  LogoComp={BsFillTrashFill}
                  onClick={removeImageClickHandler}
                  action="Delete"
                />
              ) : (
                <></>
              )}
            </>
            {/* RESPONSE COMPONENTS */}
            <>
              {viewImage ? (
                <ViewImage
                  imageURL={imageURL}
                  toggleViewImage={toggleViewImage}
                />
              ) : (
                <></>
              )}
              <EditImage
                inputId={editInputId}
                onEditImageHandler={onEditImageHandler}
              />
            </>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};
export default ImageActionsPopup;
