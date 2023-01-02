import { useForm } from "react-hook-form";
import { Box } from "../../../../../../../../components/Box/Box";
import BorderedButton from "../../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../../components/Buttons/Button";
import { Error } from "../../../../../../../../components/Errors/Error";
import { TextField } from "../../../../../../../../components/FormFields/FormFields.style";
import {
  ButtonGroup,
  FormSectionCard,
} from "../../CreateRecordForm/CreateRecordForm.style";
import useCreateRecordForm from "../../hooks/useCreateRecordForm";

const LocationForm = () => {
  const { saveLocationForm, isLoading } = useCreateRecordForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  return (
    <form id="location" onSubmit={handleSubmit(saveLocationForm)}>
      <FormSectionCard>
        <Box>
          <TextField
            placeholder="Enter Pin-Code"
            {...register("pinCode", {
              required: {
                value: true,
                message: "PinCode is required.",
              },
              minLength: {
                value: 6,
                message: "PinCode must be 6 characters long.",
              },
              maxLength: {
                value: 6,
                message: "PinCode must be 6 characters long.",
              },
              pattern: {
                value: /^[1-9][0-9]{5}$/,
                message: "Not a valid pinCode",
              },
            })}
          />
          {errors?.pinCode?.message ? (
            <Error>{errors?.pinCode?.message}</Error>
          ) : (
            <></>
          )}
        </Box>
        <Box>
          <TextField
            placeholder="Enter City"
            {...register("city", {
              required: {
                value: true,
                message: "City is required",
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Invalid state name.",
              },
            })}
          />
          {errors?.city?.message ? (
            <Error>{errors?.city?.message}</Error>
          ) : (
            <></>
          )}
        </Box>
        <Box>
          <TextField
            placeholder="Enter State"
            {...register("state", {
              required: {
                value: true,
                message: "state is required",
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Invalid state name.",
              },
            })}
          />
          {errors?.state?.message ? (
            <Error>{errors?.state?.message}</Error>
          ) : (
            <></>
          )}
        </Box>
        <Box>
          <TextField
            placeholder="Enter Address"
            {...register("address", {
              required: {
                value: true,
                message: "Address is required",
              },
              minLength: {
                value: 5,
                message: "Address must be 5+ characters long.",
              },
              maxLength: {
                value: 120,
                message: "Address must be < 120 characters long.",
              },
            })}
          />
          {errors?.address?.message ? (
            <Error>{errors?.address?.message}</Error>
          ) : (
            <></>
          )}
        </Box>
        <ButtonGroup>
          <BorderedButton>Back</BorderedButton>
          <Button type="submit" loader={isLoading}>
            Continue
          </Button>
        </ButtonGroup>
      </FormSectionCard>
    </form>
  );
};
export default LocationForm;
