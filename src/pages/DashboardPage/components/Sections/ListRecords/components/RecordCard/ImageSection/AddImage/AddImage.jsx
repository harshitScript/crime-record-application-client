import {
  AddImageOuter,
  HiddenInput,
  PreviewImage,
  PreviewImageBox,
} from "./AddImage.style";
import { BiImageAdd } from "react-icons/bi";
import { useState } from "react";
import FileCrop from "../../../../../../../../../components/FormFields/FileField/FileCrop";
import { useUploadRecordImageMutation } from "../../../../../../../../../store/recordApi";
import { toast } from "react-hot-toast";

const AddImage = ({
  type = "front",
  recordId = "",
  recordDataRefetch = () => {},
}) => {
  const id = `file_input-${type}`;

  const [triggerUploadImage, { isLoading }] = useUploadRecordImageMutation();

  const [image, setImage] = useState(null);
  const [openFileCropper, setOpenFileCropper] = useState(false);
  const toggleFileCropper = () => setOpenFileCropper((current) => !current);
  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
    toggleFileCropper();
  };
  const openFileInput = () => {
    document.getElementById(id).click();
  };
  const uploadFile = async (image) => {
    setImage(image);
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await triggerUploadImage({
        recordId,
        type,
        body: formData,
      });
      if (response?.error) {
        throw new Error();
      }

      toast.success(response?.data?.message, {
        position: "top-center",
      });

      recordDataRefetch();
    } catch {
      toast.error("Failed to upload the image.", {
        position: "top-center",
      });
      setImage(null);
    }
  };
  const imageURL = image ? URL.createObjectURL(image) : null;
  return (
    <>
      <HiddenInput
        type="file"
        onChange={imageChangeHandler}
        accept="image/*"
        id={id}
      />
      <AddImageOuter onClick={openFileInput}>
        {imageURL ? (
          <PreviewImageBox loading={isLoading}>
            <PreviewImage src={imageURL} alt={`preview of ${type}`} />
          </PreviewImageBox>
        ) : (
          <>
            <BiImageAdd />
            <span>{type}</span>
          </>
        )}
      </AddImageOuter>
      {openFileCropper ? (
        <FileCrop
          selectedFile={image}
          setSelectedFile={uploadFile}
          toggle={toggleFileCropper}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default AddImage;
