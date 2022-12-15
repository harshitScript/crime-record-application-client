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
import MultiSelectDD from "../../../../../../../components/FormFields/MultiSelectDD";
import { permissions } from "../../../../../../../utils/helper";
import { useRef } from "react";
import { useCreateUserMutation } from "../../../../../../../store/userApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateUserForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "all" });

  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const [viewOnly, setViewOnly] = useState(false);

  const permissionRef = useRef();
  const navigate = useNavigate();

  const saveClickHandler = (e) => {
    setViewOnly(true);
  };

  const backClickHandler = () => {
    setViewOnly(false);
  };

  const submitHandler = async (data) => {
    const userData = {
      ...data,
      image: data?.image[0],
      permissions: permissionRef?.current?.value
        ?.split(", ")
        .filter((permission) => permission),
    };

    //* Clone our data into form generated data.
    const formData = new FormData();
    formData.append("name", `${userData?.firstName} ${userData?.lastName}`);
    formData.append("image", userData?.image);
    formData.append("mobile", userData?.mobile);
    formData.append("email", userData?.email);
    formData.append("password", userData?.password);
    formData.append("permissions", userData?.permissions);

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
                  readOnly={viewOnly}
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
                readOnly={viewOnly}
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
                readOnly={viewOnly}
                accepts="image/png, image/jpg, image/jpeg"
                file={watch("image")}
                {...register("image", {
                  required: {
                    value: true,
                    message: "User image is required",
                  },
                })}
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
                readOnly={viewOnly}
                type="password"
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
