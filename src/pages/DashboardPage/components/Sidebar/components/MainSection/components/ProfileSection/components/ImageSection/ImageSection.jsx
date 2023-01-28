import { useState } from "react";
import ImageActionsPopup from "../../../../../../../../../../components/ImageActionsPopup/ImageActionsPopup";
import useTheme from "../../../../../../../../../../customHooks/useTheme";
import { ImageOuter } from "./ImageSection.style";

const ImageSection = ({ imageURL = "" }) => {
  const { theme } = useTheme();
  const [showImageActionPopup, setShowImageActionsPopup] = useState(false);
  const toggleImageActionsPopup = () =>
    setShowImageActionsPopup((current) => !current);

  return (
    <>
      <ImageOuter {...theme} onClick={toggleImageActionsPopup}>
        <img src={imageURL} alt="user" width="100%" loading="lazy" />
      </ImageOuter>
      {showImageActionPopup ? (
        <ImageActionsPopup
          title="Profile Picture"
          imageURL={imageURL}
          onClose={toggleImageActionsPopup}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ImageSection;
