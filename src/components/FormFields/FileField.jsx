import { forwardRef } from "react";
import { sizeInMB } from "../../utils/helper";
import {
  DetailsOuter,
  HiddenInput,
  ImageOuter,
  ImageUploadIcon,
  MockFileOuter,
  UploadDisplaySectionOuter,
} from "./FormFields.style";

const FileField = forwardRef(
  ({ accepts = "", file, label = "", ...props }, ref) => {
    return (
      <>
        <HiddenInput
          ref={ref}
          type="file"
          id="file_input"
          accept={accepts}
          {...props}
        />
        <MockFileField file={file} />
      </>
    );
  }
);

const MockFileField = ({ file }) => {
  const useFile = file?.[0];
  const openFilePicker = () => document.querySelector("#file_input").click();
  return (
    <>
      <MockFileOuter onClick={openFilePicker}>
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
