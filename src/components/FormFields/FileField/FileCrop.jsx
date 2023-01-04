import { useMemo } from "react";
import { useState } from "react";
import Cropper from "react-easy-crop";
import useTheme from "../../../customHooks/useTheme";
import Button from "../../Buttons/Button";
import DropDown from "../DropDown";
import { BottomTray, FullScreenBackdrop } from "./FileCrop.style";
import getCroppedImg from "./cropImage";
import { toast } from "react-hot-toast";
import { urlToObject } from "../../../utils/helper";

const aspectRatios = [
  { label: "1:1", code: 1 / 1 },
  { label: "4:3", code: 4 / 3 },
  { label: "16:9", code: 16 / 9 },
];

const FileCrop = ({
  selectedFile,
  initAspect = 1 / 1,
  initCrop = { x: 0, y: 0 },
  initZoom = 1,
  toggle = () => {},
  setSelectedFile = () => {},
}) => {
  const [crop, setCrop] = useState(initCrop);
  const [zoom, setZoom] = useState(initZoom);
  const [aspect, setAspect] = useState(initAspect);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const initialFiletype = useMemo(
    () => selectedFile?.type?.split("/")?.[1],
    [selectedFile]
  );

  const imageURL = useMemo(
    () => URL.createObjectURL(selectedFile),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedFile?.name]
  );

  const { theme } = useTheme();

  const onZoomChange = (e) => setZoom(e.target.value);
  const saveClickHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const croppedImageURL = await getCroppedImg(imageURL, croppedAreaPixels);
      const croppedFile = await urlToObject({
        imageURL: croppedImageURL,
        fileName: `${new Date().getTime()}.${initialFiletype}`,
      });

      setSelectedFile(croppedFile);
      toggle();
    } catch (error) {
      toast.error("Failed to crop image please retry.");
      console.error(error);
    }
  };
  const resetClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCrop(initCrop);
    setZoom(initZoom);
    setAspect(initAspect);
  };
  const cancelClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  };
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <FullScreenBackdrop>
      <Cropper
        image={imageURL}
        crop={crop}
        zoom={zoom}
        aspect={aspect}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
      <BottomTray {...theme}>
        <section className="sliderContainer">
          <input
            type="range"
            min={1}
            max={2}
            step={0.1}
            value={zoom}
            onChange={onZoomChange}
          />
        </section>
        <section className="ddContainer">
          <DropDown options={aspectRatios} onChange={setAspect} />
        </section>
        <section className="btn-container">
          <Button onClick={cancelClickHandler}>Cancel</Button>
          <Button onClick={resetClickHandler}>Reset</Button>
          <Button onClick={saveClickHandler}>Save</Button>
        </section>
      </BottomTray>
    </FullScreenBackdrop>
  );
};
export default FileCrop;
