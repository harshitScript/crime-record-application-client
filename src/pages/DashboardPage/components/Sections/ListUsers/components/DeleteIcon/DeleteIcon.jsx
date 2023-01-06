import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import userApi, {
  useDeleteUserMutation,
} from "../../../../../../../store/userApi";
import { TrashIcon, TrashLoader } from "../UserCard/UserCard.style";

const DeleteIcon = ({ user = {} }) => {
  const dispatch = useDispatch();
  const [triggerDeletion, { isLoading }] = useDeleteUserMutation();
  const deleteClickHandler = async () => {
    try {
      const response = await triggerDeletion({ userId: user?._id });
      if (response.error) {
        throw new Error();
      }
      toast.success("User Deleted successfully.");
      dispatch(userApi.util.invalidateTags(["user"]));
    } catch {
      toast.error("Failed to delete user.");
    }
  };

  if (user?.permissions.includes("root")) {
    return <></>;
  } else {
    return isLoading ? (
      <TrashLoader />
    ) : (
      <TrashIcon onClick={deleteClickHandler} />
    );
  }
};
export default DeleteIcon;
