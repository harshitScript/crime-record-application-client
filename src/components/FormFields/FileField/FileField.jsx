import { useState, forwardRef } from "react";
import { sizeInMB } from "../../../utils/helper";
import {
  DetailsOuter,
  HiddenInput,
  ImageOuter,
  ImageUploadIcon,
  MockFileOuter,
  UploadDisplaySectionOuter,
} from "../FormFields.style";
import FileCrop from "./FileCrop";
import { EditIcon } from "./FileCrop.style";

const FileField = forwardRef(
  ({ accepts = "", file, readOnly, label = "", ...props }, ref) => {
    const [openCropEditor, setOpenCropEditor] = useState(false);
    const [selectedFile, setSelectedFile] = useState(file?.[0] || null);
    const toggleCropEditor = () => setOpenCropEditor((current) => !current);
    const onSelectedFileChange = (e) => {
      setSelectedFile(e.target.files?.[0]);
      toggleCropEditor();
    };

    return (
      <>
        <HiddenInput
          ref={ref}
          type="file"
          id="file_input"
          name="file_input"
          accept={accepts}
          readOnly={readOnly}
          {...props}
          onChange={onSelectedFileChange}
        />
        <MockFileField
          selectedFile={selectedFile}
          readOnly={readOnly}
          toggleCropEditor={toggleCropEditor}
        />
        {openCropEditor && selectedFile ? (
          <FileCrop
            selectedFile={selectedFile}
            initAspect={1 / 1}
            toggle={toggleCropEditor}
            setSelectedFile={setSelectedFile}
            name={"file_input"}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
);

const MockFileField = ({ selectedFile, readOnly, toggleCropEditor }) => {
  const useFile = selectedFile;
  const openFilePicker = () => document.querySelector("#file_input").click();
  return (
    <>
      {useFile ? <EditIcon onClick={toggleCropEditor} /> : <></>}
      <MockFileOuter
        onClick={readOnly ? () => {} : openFilePicker}
        readOnly={readOnly}
      >
        {useFile ? (
          <UploadDisplaySection useFile={useFile} />
        ) : (
          <>
            <ImageUploadIcon />
            <p className="title">{"Upload a User image"}</p>
          </>
        )}
      </MockFileOuter>
    </>
  );
};

const UploadDisplaySection = ({ useFile }) => {
  const imageURL = URL.createObjectURL(useFile);
  return (
    <UploadDisplaySectionOuter>
      <ImageOuter>
        <img src={imageURL} alt="Upload" loading="lazy" />
      </ImageOuter>
      <DetailsOuter>
        <p className="title">{useFile?.name}</p>
        <p className="sub-title">{`${useFile.type} x ${sizeInMB(
          useFile.size
        )}mb`}</p>
      </DetailsOuter>
    </UploadDisplaySectionOuter>
  );
};

export default FileField;
