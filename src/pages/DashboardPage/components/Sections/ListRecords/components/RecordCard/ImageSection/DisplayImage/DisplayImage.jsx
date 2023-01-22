import { useContext } from "react";
import RenderRecordsContext from "../../../../../../../../../context/renderRecordsContext";
import DeleteIcon from "./DeleteIcon/DeleteIcon";
import { RelativeOuter } from "./DeleteIcon/DeleteIcon.style";
import { RecordImage } from "./DisplayImage.style";

const DisplayImage = ({
  type = "",
  recordId = "",
  url = "",
  recordDataRefetch = () => {},
}) => {
  const { user } = useContext(RenderRecordsContext);
  return (
    <RelativeOuter>
      {user ? (
        <DeleteIcon
          type={type}
          recordId={recordId}
          recordDataRefetch={recordDataRefetch}
        />
      ) : (
        <></>
      )}
      <RecordImage src={url} id={type} alt={type} loading="lazy" />
    </RelativeOuter>
  );
};
export default DisplayImage;
