import { useEffect, useState, forwardRef } from "react";

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
  (
    { accepts = "", file, readOnly, label = "", onChange = () => {}, ...props },
    ref
  ) => {
    const [openCropEditor, setOpenCropEditor] = useState(false);
    const toggleCropEditor = () => setOpenCropEditor((current) => !current);
    const fileName = file?.[0]?.name;
    useEffect(() => {
      if (fileName) {
        toggleCropEditor();
      }
    }, [fileName]);
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
          onChange={onChange}
        />
        <MockFileField
          file={file}
          readOnly={readOnly}
          toggleCropEditor={toggleCropEditor}
        />
        {openCropEditor ? (
          <FileCrop
            useFile={file?.[0]}
            initAspect={1 / 1}
            toggle={toggleCropEditor}
            onChange={onChange}
            name={"file_input"}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
);

const MockFileField = ({ file, readOnly, toggleCropEditor }) => {
  const useFile = file?.[0];
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
            <p className="title">{`Upload a User image`}</p>
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
