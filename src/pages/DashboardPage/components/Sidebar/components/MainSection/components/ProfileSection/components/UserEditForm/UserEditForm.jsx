import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Box } from "../../../../../../../../../../components/Box/Box";
import Button from "../../../../../../../../../../components/Buttons/Button";
import LinkButton from "../../../../../../../../../../components/Buttons/LinkButton";
import { Error } from "../../../../../../../../../../components/Errors/Error";
import { TextField } from "../../../../../../../../../../components/FormFields/FormFields.style";
import useUser from "../../../../../../../../../../customHooks/useUser";
import userApi from "../../../../../../../../../../store/userApi";
import {
  email,
  firstOrLastName,
  mobile,
} from "../../../../../../../../../../utils/formValidations";
import { getName } from "../../../../../../../../../../utils/helper";
import { FlexBox } from "./UserEditForm.style";

const UserEditForm = ({ onDiscard = () => {}, initialUser = {} }) => {
  const {
    triggerUpdateUser,
    updateUserQuery: { isLoading, isError },
  } = useUser();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: getName({
        type: "first",
        data: initialUser,
      }),
      lastName: getName({
        type: "last",
        data: initialUser,
      }),
      mobile: initialUser?.mobile,
      email: initialUser?.email,
    },
  });

  const onSubmit = async (data) => {
    const body = {
      name: `${data?.firstName} ${data?.lastName}`,
      mobile: data?.mobile,
      email: data?.email,
    };
    try {
      const response = await triggerUpdateUser({ body });
      if (response?.error) {
        throw new Error();
      }
      toast.success("User information updated successfully.", {
        position: "top-center",
      });
      onDiscard();
      dispatch(userApi.util.invalidateTags(["user"]));
    } catch {
      toast.error("Failed to update user info.", { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <TextField
          placeholder="First Name"
          {...register("firstName", firstOrLastName)}
        />
        {errors?.firstName?.message ? (
          <Error>{errors?.firstName?.message}</Error>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        <TextField
          placeholder="Last Name"
          {...register("lastName", firstOrLastName)}
        />
        {errors?.lastName?.message ? (
          <Error>{errors?.lastName?.message}</Error>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        <TextField placeholder="Mobile" {...register("mobile", mobile)} />
        {errors?.mobile?.message ? (
          <Error>{errors?.mobile?.message}</Error>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        <TextField placeholder="Email" {...register("email", email)} />
        {errors?.email?.message ? (
          <Error>{errors?.email?.message}</Error>
        ) : (
          <></>
        )}
      </Box>
      <FlexBox>
        <Button type="submit" loader={isLoading}>
          {isError ? "Retry" : "Save"}
        </Button>
        <LinkButton onClick={onDiscard} disabled={isLoading}>
          Discard
        </LinkButton>
      </FlexBox>
    </form>
  );
};
export default UserEditForm;
