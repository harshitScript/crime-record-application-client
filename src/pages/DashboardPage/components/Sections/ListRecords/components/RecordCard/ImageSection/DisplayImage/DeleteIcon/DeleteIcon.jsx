import { toast } from "react-hot-toast";
import { useDeleteRecordImageMutation } from "../../../../../../../../../../store/recordApi";
import { TrashIcon, TrashLoader } from "./DeleteIcon.style";

const DeleteIcon = ({
  type = "",
  recordId = "",
  recordDataRefetch = () => {},
}) => {
  const [triggerDeleteImage, { isLoading }] = useDeleteRecordImageMutation();
  const deleteImageHandler = async () => {
    try {
      const response = await triggerDeleteImage({ type, recordId });
      if (response?.error) {
        throw new Error();
      }
      toast.success(response?.data?.message, {
        position: "top-center",
      });

      recordDataRefetch();
    } catch {
      toast.error("Failed to delete the image.", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      {isLoading ? <TrashLoader /> : <TrashIcon onClick={deleteImageHandler} />}
    </>
  );
};

export default DeleteIcon;
