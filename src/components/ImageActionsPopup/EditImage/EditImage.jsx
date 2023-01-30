import { useState } from "react";
import FileCrop from "../../FormFields/FileField/FileCrop";
import { HiddenInput } from "../../FormFields/FormFields.style";

const EditImage = ({ inputId = "", onEditImageHandler = () => {} }) => {
  const [file, setFile] = useState(null);
  const [openFileCropper, setOpenFileCropper] = useState(false);
  const toggleFileCropper = () => setOpenFileCropper((current) => !current);
  const imageChangeHandler = (e) => {
    toggleFileCropper();
    setFile(e.target.files?.[0]);
  };

  return (
    <>
      <HiddenInput
        type={"file"}
        onChange={imageChangeHandler}
        name="userImage"
        id={inputId}
        required
      />
      {openFileCropper && file ? (
        <FileCrop
          selectedFile={file}
          setSelectedFile={onEditImageHandler}
          toggle={toggleFileCropper}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default EditImage;
