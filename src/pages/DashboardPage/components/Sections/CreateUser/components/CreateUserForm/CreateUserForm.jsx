import { useForm } from "react-hook-form";
import BorderedButton from "../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../components/Buttons/Button";
import { useState } from "react";
import { Box50, ButtonGroup, FlexBlock } from "./CreateUserForm.style";
import { Card } from "../../../../../../../components/Cards/Card";
import TitleSection from "../TitleSection/TitleSection";
import { Box } from "../../../../../../../components/Box/Box";
import { TextField } from "../../../../../../../components/FormFields/FormFields.style";
import { Error } from "../../../../../../../components/Errors/Error";
import MultiSelectDD from "../../../../../../../components/FormFields/MultiSelectDD";
import { permissions, urlToObject } from "../../../../../../../utils/helper";
import { useRef } from "react";
import { useCreateUserMutation } from "../../../../../../../store/userApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../../../../customHooks/useAuth";
import FileField from "../../../../../../../components/FormFields/FileField/FileField";
import userImage from "../../../../../../../assets/logos/user.png";
import {
  email,
  firstOrLastName,
  mobile,
  password,
} from "../../../../../../../utils/formValidations";

const CreateUserForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const [createUser, { isLoading, isError }] = useCreateUserMutation();
  const permissionRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();
  const { getAuthData } = useAuth();

  const [viewOnly, setViewOnly] = useState(false);

  const saveClickHandler = () => {
    setViewOnly(true);
  };

  const backClickHandler = () => {
    setViewOnly(false);
  };

  const submitHandler = async (data) => {
    let image = imageRef.current.files?.[0];
    if (!image) {
      image = await urlToObject({
        imageURL: userImage,
        fileName: `${new Date().getTime()}.png`,
      });
    }
    const userData = {
      ...data,
      image: image,
      permissions: permissionRef?.current?.value,
    };

    //* Clone our data into form generated data.
    const formData = new FormData();
    formData.append("name", `${userData?.firstName} ${userData?.lastName}`);
    formData.append("image", userData?.image);
    formData.append("mobile", userData?.mobile);
    formData.append("email", userData?.email);
    formData.append("password", userData?.password);
    formData.append("permissions", userData?.permissions);
    formData.append("creator", getAuthData().userId);

    try {
      const res = await createUser({ body: formData });
      if (res.error) {
        throw new Error();
      }
      navigate("/dashboard/list-users");
    } catch {
      toast.error("Failed to create user. Please retry.", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Personal Details */}
        <Card>
          <TitleSection title="Personal Details" />
          <>
            <FlexBlock>
              <Box50>
                <TextField
                  readOnly={viewOnly}
                  placeholder="First Name"
                  {...register("firstName", firstOrLastName)}
                />
                {errors?.firstName?.message ? (
                  <Error>{errors?.firstName?.message}</Error>
                ) : (
                  <></>
                )}
              </Box50>
              <Box50>
                <TextField
                  readOnly={viewOnly}
                  placeholder="Last Name"
                  {...register("lastName", firstOrLastName)}
                />
                {errors?.lastName?.message ? (
                  <Error>{errors?.lastName?.message}</Error>
                ) : (
                  <></>
                )}
              </Box50>
            </FlexBlock>
            <Box>
              <TextField
                readOnly={viewOnly}
                placeholder="Mobile"
                {...register("mobile", mobile)}
              />
              {errors?.mobile?.message ? (
                <Error>{errors?.mobile?.message}</Error>
              ) : (
                <></>
              )}
            </Box>
            <Box>
              <FileField
                readOnly={viewOnly}
                accepts="image/png, image/jpg, image/jpeg"
                ref={imageRef}
              />
              {errors?.image?.message ? (
                <Error>{errors?.image?.message}</Error>
              ) : (
                <></>
              )}
            </Box>
          </>
        </Card>

        {/* Authentication Details */}
        <Card>
          <TitleSection title="Authentication Details" />
          <>
            <Box>
              <TextField
                readOnly={viewOnly}
                placeholder="Email"
                {...register("email", email)}
              />
              {errors?.email?.message ? (
                <Error>{errors?.email?.message}</Error>
              ) : (
                <></>
              )}
            </Box>
            <Box>
              <TextField
                readOnly={viewOnly}
                type="password"
                placeholder="Password"
                {...register("password", password)}
              />
              {errors?.password?.message ? (
                <Error>{errors?.password?.message}</Error>
              ) : (
                <></>
              )}
            </Box>
          </>
        </Card>

        {/* Permissions */}
        <Card>
          <TitleSection title="Permissions" />
          <Box>
            <MultiSelectDD
              readOnly={viewOnly}
              options={permissions}
              placeholder="Permissions"
              ref={permissionRef}
            />
          </Box>
        </Card>

        {viewOnly ? (
          <ButtonGroup>
            <>
              <BorderedButton onClick={backClickHandler}>Back</BorderedButton>
              <Button loader={isLoading} type="submit">
                {isError ? "Retry" : "Submit"}
              </Button>
            </>
          </ButtonGroup>
        ) : (
          <></>
        )}
      </form>
      {viewOnly ? (
        <></>
      ) : (
        <ButtonGroup>
          <span />
          <Button onClick={saveClickHandler}>Save</Button>
        </ButtonGroup>
      )}
    </>
  );
};

export default CreateUserForm;
