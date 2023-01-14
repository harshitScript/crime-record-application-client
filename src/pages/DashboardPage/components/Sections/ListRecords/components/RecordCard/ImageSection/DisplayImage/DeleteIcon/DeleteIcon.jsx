import { toast } from "react-hot-toast";
import useRecord from "../../../../../../../../../../customHooks/useRecord";
import { TrashIcon, TrashLoader } from "./DeleteIcon.style";

const DeleteIcon = ({
  type = "",
  recordId = "",
  recordDataRefetch = () => {},
}) => {
  const { triggerDeleteImage, deleteRecordImageLoading } = useRecord({
    recordId,
  });
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
      {deleteRecordImageLoading ? (
        <TrashLoader />
      ) : (
        <TrashIcon onClick={deleteImageHandler} />
      )}
    </>
  );
};

export default DeleteIcon;
