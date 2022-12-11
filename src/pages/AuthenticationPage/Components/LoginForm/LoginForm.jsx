import { useParams } from "react-router-dom";
import { Box } from "../../../../components/Box/Box";
import Button from "../../../../components/Buttons/Button";
import { Card } from "../../../../components/Cards/Card";
import TextField from "../../../../components/FormFields/TextField";
import useTheme from "../../../../customHooks/useTheme";
import { useForm } from "react-hook-form";
import { Error } from "../../../../components/Errors/Error";
import { useLoginUserMutation } from "../../../../store/userApi";
import toast from "react-hot-toast";
import useAuth from "../../../../customHooks/useAuth";

const LoginForm = () => {
  const { theme } = useTheme();
  const { type } = useParams();

  const [triggerLogin, { isLoading }] = useLoginUserMutation();
  const { setAuthDataAndReload } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formConfiguration = {
    admin: {
      async onSubmit(data) {
        try {
          const response = await triggerLogin({ body: data });
          if (response.error) {
            throw new Error();
          }
          setAuthDataAndReload({ ...response.data, redirect: "/admin" });
        } catch {
          toast.error("Login failed, please check credentials and retry.", {
            position: "top-center",
          });
        }
      },
      title: "Admin Login",
      description: "login as a admin.",
    },
    user: {
      async onSubmit(data) {
        try {
          const response = await triggerLogin({ body: data });
          if (response.error) {
            throw new Error();
          }
          setAuthDataAndReload({ ...response.data, redirect: "/user" });
        } catch {
          toast.error("Login failed, please check credentials and retry.", {
            position: "top-center",
          });
        }
      },
      title: "User Login",
      description: "login as a user.",
    },
  };

  return (
    <Card>
      <Card.Header>
        <Card.Header.Title {...theme}>
          {formConfiguration[type].title}
        </Card.Header.Title>
        <Card.Header.Description {...theme}>
          {formConfiguration[type].description}
        </Card.Header.Description>
      </Card.Header>

      <Card.Body>
        <form onSubmit={handleSubmit(formConfiguration[type].onSubmit)}>
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
          </Box>
          <Box>
            <Button wd="100%" type="submit" loader={isLoading}>
              Login
            </Button>
          </Box>
        </form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
