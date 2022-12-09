import { useParams } from "react-router-dom";
import { Box } from "../../../../components/Box/Box";
import Button from "../../../../components/Buttons/Button";
import { Card } from "../../../../components/Cards/Card";
import TextField from "../../../../components/FormFields/TextField";
import useTheme from "../../../../customHooks/useTheme";
import { useForm } from "react-hook-form";
import { Error } from "../../../../components/Errors/Error";

const LoginForm = () => {
  const { theme } = useTheme();
  const { type } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formConfiguration = {
    admin: {
      onSubmit(data) {},
      title: "Admin Login",
      description: "login as a admin.",
    },
    user: {
      onSubmit(data) {},
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
              })}
            />
            {errors?.password?.message ? (
              <Error>{errors?.password?.message}</Error>
            ) : (
              <></>
            )}
          </Box>
          <Box>
            <Button wd="100%" type="submit">
              Authenticate
            </Button>
          </Box>
        </form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
