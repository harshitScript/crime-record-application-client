import { useNavigate, useParams } from "react-router-dom";
import { Box } from "../../../../components/Box/Box";
import Button from "../../../../components/Buttons/Button";
import { Card } from "../../../../components/Cards/Card";
import useTheme from "../../../../customHooks/useTheme";
import { useForm } from "react-hook-form";
import { Error } from "../../../../components/Errors/Error";
import { useLoginUserMutation } from "../../../../store/userApi";
import toast from "react-hot-toast";
import useAuth from "../../../../customHooks/useAuth";
import { TextField } from "../../../../components/FormFields/FormFields.style";
import BorderedButton from "../../../../components/Buttons/BorderedButton";
import { LinkText, OrText } from "./LoginForm.style";
import PasswordResetPopup from "../../../../components/PasswordResetPopup/PasswordResetPopup";
import { useState } from "react";

const LoginForm = () => {
  const { theme } = useTheme();
  const { type } = useParams();
  const navigate = useNavigate();

  const [showPasswordResetPopup, setShowPasswordResetPopup] = useState(true);
  const toggleShowPasswordResetPopup = () =>
    setShowPasswordResetPopup((current) => !current);

  const [triggerLogin, { isLoading }] = useLoginUserMutation();
  const { setAuthDataAndReload } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formConfiguration = {
    admin: {
      title: "Admin Login",
      description: "login as a admin.",
    },
    user: {
      title: "User Login",
      description: "login as a user.",
    },
  };

  const onSubmit = async (data) => {
    try {
      const response = await triggerLogin({ body: data });
      if (response.error) {
        throw new Error();
      }
      setAuthDataAndReload({ ...response.data, redirect: "/dashboard" });
    } catch {
      toast.error("Login failed, please check credentials and retry.", {
        position: "top-center",
      });
    }
  };

  const backHandler = () => {
    navigate("/journey");
  };

  return (
    <>
      <Card {...theme}>
        <Card.Header>
          <Card.Header.Title {...theme}>
            {formConfiguration[type].title}
          </Card.Header.Title>
          <Card.Header.Description {...theme}>
            {formConfiguration[type].description}
          </Card.Header.Description>
        </Card.Header>

        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                type="email"
                placeholder="Enter email to login."
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(www.)?[a-zA-Z0-9.]{1,50}@[a-zA-Z0-9]{3,35}(.co|.com|.in|.org|.dev|)$/,
                    message: "Not a valid email.",
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
                type="password"
                placeholder="Enter password to login."
                {...register("password", {
                  required: true,
                  maxLength: {
                    value: 25,
                    message: "Password must be less than 25 characters.",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must have 8 characters.",
                  },
                })}
              />
              {errors?.password?.message ? (
                <Error>{errors?.password?.message}</Error>
              ) : (
                <></>
              )}
              <LinkText onClick={toggleShowPasswordResetPopup}>
                Forget password ?
              </LinkText>
            </Box>
            <Box>
              <Button wd="100%" type="submit" loader={isLoading}>
                Login
              </Button>

              <OrText>OR</OrText>

              <BorderedButton
                wd="100%"
                onClick={backHandler}
                disabled={isLoading}
              >
                Back
              </BorderedButton>
            </Box>
          </form>
        </Card.Body>
      </Card>
      {showPasswordResetPopup ? (
        <PasswordResetPopup onClose={toggleShowPasswordResetPopup} />
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginForm;
