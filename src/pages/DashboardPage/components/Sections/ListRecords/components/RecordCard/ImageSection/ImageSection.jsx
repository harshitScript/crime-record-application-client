import AddImage from "./AddImage/AddImage";
import { RecordImage } from "./ImageSection.style";

const ImageSection = ({ recordId = "", imageData = {} }) => {
  const imageUrls = imageData?.urls;
  const front = imageUrls?.front;
  const side = imageUrls?.side;
  return (
    <>
      {front ? (
        <RecordImage src={front} alt="Front-Face" loading="lazy" />
      ) : (
        <AddImage type="front" recordId={recordId} />
      )}
      {side ? (
        <RecordImage src={side} alt="Side-Face" loading="lazy" />
      ) : (
        <AddImage type="side" recordId={recordId} />
      )}
    </>
  );
};

export default ImageSection;
