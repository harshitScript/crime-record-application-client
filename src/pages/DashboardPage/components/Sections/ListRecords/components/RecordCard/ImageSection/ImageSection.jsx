import AddImage from "./AddImage/AddImage";
import DisplayImage from "./DisplayImage/DisplayImage";

const ImageSection = ({
  recordId = "",
  imageData = {},
  recordDataRefetch = () => {},
}) => {
  const imageUrls = imageData?.urls;
  const front = imageUrls?.front;
  const side = imageUrls?.side;
  return (
    <>
      {front ? (
        <DisplayImage
          url={front}
          type={"front"}
          recordId={recordId}
          recordDataRefetch={recordDataRefetch}
        />
      ) : (
        <AddImage
          type="front"
          recordId={recordId}
          recordDataRefetch={recordDataRefetch}
        />
      )}
      {side ? (
        <DisplayImage
          url={side}
          type={"side"}
          recordId={recordId}
          recordDataRefetch={recordDataRefetch}
        />
      ) : (
        <AddImage
          type="side"
          recordId={recordId}
          recordDataRefetch={recordDataRefetch}
        />
      )}
    </>
  );
};

export default ImageSection;
