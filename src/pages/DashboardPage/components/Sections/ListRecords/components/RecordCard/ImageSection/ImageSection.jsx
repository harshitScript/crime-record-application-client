import AddImage from "./AddImage/AddImage";
import { RecordImage } from "./ImageSection.style";

const ImageSection = ({ recordId = "", imageData = {} }) => {
  const imageUrls = imageData?.urls;
  const front = imageUrls?.front;
  const side = imageUrls?.side;
  return (
    <>
      {front ? (
        <RecordImage
          src="https://myjourneyonline192712519.files.wordpress.com/2021/03/pexels-photo-6069608.jpeg?w=800&resize=200%2C200"
          alt="Front-Face"
          loading="lazy"
        />
      ) : (
        <AddImage type="Front" />
      )}
      {side ? (
        <RecordImage
          src="https://i.pinimg.com/736x/d5/7a/b5/d57ab5e7abf40ed33b78932b1e680136.jpg"
          alt="Side-Face"
          loading="lazy"
        />
      ) : (
        <AddImage type="Side" />
      )}
    </>
  );
};

export default ImageSection;
