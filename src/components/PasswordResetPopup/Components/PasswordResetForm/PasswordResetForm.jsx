import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box } from "../../../Box/Box";
import Button from "../../../Buttons/Button";
import { Error } from "../../../Errors/Error";
import { TextField } from "../../../FormFields/FormFields.style";
import { RequestSentOuter } from "../../PasswordResetPopup.style";
import mailSent from "../../../../assets/svg/MailSent.svg";

const PasswordResetForm = () => {
  const [requestDone, setRequestDone] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log("Make api request here", data);
    setRequestDone(true);
  };
  return requestDone ? (
    <RequestSentUI />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <TextField
          {...register("email", {
            required: {
              value: true,
              message: "This field is required.",
            },
            pattern: {
              value:
                /^(www.)?[a-zA-Z0-9.]{1,50}@[a-zA-Z0-9]{3,35}(.co|.com|.in|.org|.dev|)$/,
              message: "Enter a valid email.",
            },
          })}
          placeholder="Registered Email"
        />
        {errors?.email?.message ? (
          <Error>{errors?.email?.message}</Error>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        <Button>Request</Button>
      </Box>
    </form>
  );
};

const RequestSentUI = () => {
  return (
    <RequestSentOuter>
      <p className="title">Email Sent</p>
      <img
        className="image"
        src={mailSent}
        alt="mail sent"
        loading="lazy"
        decoding="async"
      />
      <small className="helper">
        {"Please follow the link in the mail to reset the password."}
      </small>
    </RequestSentOuter>
  );
};

export default PasswordResetForm;
