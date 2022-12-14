import { useForm } from "react-hook-form";
import BorderedButton from "../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../components/Buttons/Button";
import { useState } from "react";
import { Box50, ButtonGroup, FlexBlock } from "./CreateUserForm.style";
import { Card } from "../../../../../../../components/Cards/Card";
import TitleSection from "../TitleSection/TitleSection";
import { Box } from "../../../../../../../components/Box/Box";
import { TextField } from "../../../../../../../components/FormFields/FormFields.style";
import FileField from "../../../../../../../components/FormFields/FileField";
import { Error } from "../../../../../../../components/Errors/Error";

const CreateUserForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [viewOnly, setViewOnly] = useState(false);

  const saveClickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setViewOnly(true);
  };

  const backClickHandler = () => {
    setViewOnly(false);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("The data => ", data);
      })}
    >
      {/* Personal Details */}
      <Card>
        <TitleSection title="Personal Details" />
        <>
          <FlexBlock>
            <Box50>
              <TextField
                placeholder="First Name"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Must have 3 > characters",
                  },
                  maxLength: {
                    value: 22,
                    message: "Must have < 23 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "Please enter valid characters",
                  },
                })}
              />
              {errors?.firstName?.message ? (
                <Error>{errors?.firstName?.message}</Error>
              ) : (
                <></>
              )}
            </Box50>
            <Box50>
              <TextField
                placeholder="Last Name"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Must have 3 > characters",
                  },
                  maxLength: {
                    value: 22,
                    message: "Must have < 23 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "Please enter valid characters",
                  },
                })}
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
              placeholder="Mobile"
              {...register("mobile", {
                required: {
                  value: true,
                  message: "Mobile number is required",
                },
                minLength: {
                  value: 10,
                  message: "Must have 9 > characters",
                },
                maxLength: {
                  value: 11,
                  message: "Must have < 12 characters",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter valid characters",
                },
              })}
            />
            {errors?.mobile?.message ? (
              <Error>{errors?.mobile?.message}</Error>
            ) : (
              <></>
            )}
          </Box>
          <Box>
            <FileField
              accepts="image/png, image/jpg, image/jpeg"
              file={watch("image")}
              {...register("image", {
                required: {
                  value: true,
                  message: "User image is required",
                },
              })}
            />
          </Box>
        </>
      </Card>

      {/* Authentication Details */}
      <Card>
        <TitleSection title="Authentication Details" />
        <>
          <Box>
            <TextField
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },

                pattern: {
                  value:
                    /^(www.)?[a-zA-Z0-9.]{1,50}@[a-zA-Z0-9]{3,35}(.co|.com|.in|.org|.dev|)$/,
                  message: "Please enter valid email",
                },
              })}
            />
            {errors?.email?.message ? (
              <Error>{errors?.email?.message}</Error>
            ) : (
              <></>
            )}
          </Box>
          <Box>
            <TextField
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Must have 7 > characters",
                },
                maxLength: {
                  value: 22,
                  message: "Must have < 26 characters",
                },
              })}
            />
            {errors?.password?.message ? (
              <Error>{errors?.mobile?.message}</Error>
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
          <TextField placeholder="Permissions" />
        </Box>
      </Card>

      <ButtonGroup>
        {viewOnly ? (
          <>
            <BorderedButton onClick={backClickHandler}>Back</BorderedButton>
            <Button type="submit">Submit</Button>
          </>
        ) : (
          <>
            <span />
            <Button onClick={saveClickHandler}>Save</Button>
          </>
        )}
      </ButtonGroup>
    </form>
  );
};

export default CreateUserForm;
