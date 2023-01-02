import { AddImageOuter } from "./AddImage.style";
import { BiImageAdd } from "react-icons/bi";

const AddImage = ({ onClick = () => {}, type = "Front" }) => {
  return (
    <AddImageOuter>
      <BiImageAdd />
      <span>{type}</span>
    </AddImageOuter>
  );
};
export default AddImage;
