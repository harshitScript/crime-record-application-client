import { Modal } from "react-bootstrap";
import ActionTile from "./ActionTile/ActionTile";
import { BsFillTrashFill } from "react-icons/bs";
import { MdViewInAr } from "react-icons/md";
import { RiImageEditLine, RiImageAddLine } from "react-icons/ri";
import ViewImage from "./ViewImage/ViewImage";
import { useState } from "react";

const ImageActionsPopup = ({
  onClose = () => {},
  title = "Image Actions",
  imageURL = "",
}) => {
  const [viewImage, setViewImage] = useState(false);
  const toggleViewImage = () => setViewImage((current) => !current);
  return (
    <Modal show={true}>
      <Modal.Header closeButton={true} onHide={onClose}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <ActionTile LogoComp={RiImageEditLine} action="Edit" />
        ) : (
          <></>
        )}
        {imageURL ? (
          <ActionTile LogoComp={BsFillTrashFill} action="Delete" />
        ) : (
          <></>
        )}
        {viewImage ? (
          <ViewImage imageURL={imageURL} toggleViewImage={toggleViewImage} />
        ) : (
          <></>
        )}
      </Modal.Body>
    </Modal>
  );
};
export default ImageActionsPopup;
