import {
  CloseButton,
  ImageViewBackdrop,
  ViewImageDisplay,
} from "./ViewImage.style";

const ViewImage = ({ imageURL = "", toggleViewImage = () => {} }) => {
  return (
    <ImageViewBackdrop>
      <CloseButton onClick={toggleViewImage} />
      <ViewImageDisplay
        loading="eager"
        decoding="sync"
        src={imageURL}
        alt="display-view"
      />
    </ImageViewBackdrop>
  );
};

export default ViewImage;
