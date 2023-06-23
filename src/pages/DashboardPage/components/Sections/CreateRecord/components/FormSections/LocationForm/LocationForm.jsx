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

const LocationForm = ({ initialRecordData = {} }) => {
  const { saveLocationForm, isLoading } = useCreateRecordForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      city: initialRecordData?.city,
      state: initialRecordData?.state,
      address: initialRecordData?.address,
    },
  });

  return (
    <form id="location" onSubmit={handleSubmit(saveLocationForm)}>
      <FormSectionCard>
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
