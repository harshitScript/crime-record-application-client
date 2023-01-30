import { useState } from "react";
import { toast } from "react-hot-toast";
import ImageActionsPopup from "../../../../../../../../../../components/ImageActionsPopup/ImageActionsPopup";
import useTheme from "../../../../../../../../../../customHooks/useTheme";
import userApi, {
  useReplaceUserImageMutation,
} from "../../../../../../../../../../store/userApi";
import { urlToObject } from "../../../../../../../../../../utils/helper";
import { ImageOuter } from "./ImageSection.style";
import userImage from "../../../../../../../../../../assets/logos/user.png";
import { useDispatch } from "react-redux";

const ImageSection = ({ imageURL = "", userId = "" }) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const [triggerReplaceImage, { isLoading }] = useReplaceUserImageMutation();
  const [showImageActionPopup, setShowImageActionsPopup] = useState(false);

  const toggleImageActionsPopup = () =>
    setShowImageActionsPopup((current) => !current);
  const onEditImageHandler = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const res = await triggerReplaceImage({ userId, body: formData });
      if (res?.error) throw res?.error;
      toast.success("User image updated successfully.");
      dispatch(userApi.util.invalidateTags(["user"]));
    } catch (error) {
      toast.error("Failed to update user image.");
    }
  };
  const onImageRemoveHandler = async () => {
    try {
      const defaultUserImage = await urlToObject({
        imageURL: userImage,
        fileName: `${new Date().getTime()}.png`,
      });
      const formData = new FormData();
      formData.append("image", defaultUserImage);
      const res = await triggerReplaceImage({ userId, body: formData });
      if (res?.error) throw res?.error;
      toast.success("User image updated successfully.");
      dispatch(userApi.util.invalidateTags(["user"]));
    } catch (error) {
      toast.error("Failed to update user image.");
    }
  };

  return (
    <>
      <ImageOuter {...theme} onClick={toggleImageActionsPopup}>
        <img src={imageURL} alt="user" width="100%" loading="lazy" />
      </ImageOuter>
      {showImageActionPopup ? (
        <ImageActionsPopup
          title="Profile Picture"
          imageURL={imageURL}
          onClose={toggleImageActionsPopup}
          onEditImageHandler={onEditImageHandler}
          onImageRemoveHandler={onImageRemoveHandler}
          isLoading={isLoading}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ImageSection;
