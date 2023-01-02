import { useForm } from "react-hook-form";
import { Box } from "../../../../../../../../components/Box/Box";
import Button from "../../../../../../../../components/Buttons/Button";
import { Error } from "../../../../../../../../components/Errors/Error";
import { TextField } from "../../../../../../../../components/FormFields/FormFields.style";
import {
  ButtonGroup,
  FormSectionCard,
} from "../../CreateRecordForm/CreateRecordForm.style";
import useCreateRecordForm from "../../hooks/useCreateRecordForm";
import { FlexBox } from "./IdentityForm.style";

const IdentityForm = () => {
  const { saveIdentityForm, isLoading } = useCreateRecordForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  return (
    <>
      <form id="identity" onSubmit={handleSubmit(saveIdentityForm)}>
        <FormSectionCard>
          <FlexBox>
            <Box>
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
            </Box>
            <Box>
              <TextField
                placeholder="Last Name"
                {...register("lastName", {
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
              {errors?.lastName?.message ? (
                <Error>{errors?.lastName?.message}</Error>
              ) : (
                <></>
              )}
            </Box>
          </FlexBox>
          <Box>
            <TextField
              placeholder="Mobile Number"
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
          <ButtonGroup>
            <span></span>
            <Button type="submit" loader={isLoading}>
              Continue
            </Button>
          </ButtonGroup>
        </FormSectionCard>
      </form>
    </>
  );
};
export default IdentityForm;
