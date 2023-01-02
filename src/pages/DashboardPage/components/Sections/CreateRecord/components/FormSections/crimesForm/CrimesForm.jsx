import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Box } from "../../../../../../../../components/Box/Box";
import BorderedButton from "../../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../../components/Buttons/Button";
import { Error } from "../../../../../../../../components/Errors/Error";
import {
  TextArea,
  TextField,
} from "../../../../../../../../components/FormFields/FormFields.style";
import {
  ButtonGroup,
  FormSectionCard,
} from "../../CreateRecordForm/CreateRecordForm.style";
import useCreateRecordForm from "../../hooks/useCreateRecordForm";
import CrimeEntriesDisplay from "./CrimeEntries/CrimeEntriesDisplay";
import { FlexBox } from "./CrimesForm.style";

const CrimesForm = () => {
  const { saveCrimesForm, isLoading } = useCreateRecordForm();
  const [entries, setEntries] = useState([]);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const addEntryHandler = (data) => {
    const formattedData = {
      id: Math.random().toFixed(3),
      place: {
        city: data?.city,
        state: data?.state,
        address: data?.address,
      },
      description: data?.description,
      dateAndTime: data?.dateAndTime,
    };
    setEntries((current) => [...current, { ...formattedData }]);
    reset();
  };
  const removeEntry = (id = "") => {
    const updatedEntires = entries.filter((entry) => entry?.id !== id);
    setEntries(updatedEntires);
  };
  const submitHandler = () => {
    if (entries.length) {
      saveCrimesForm({ crimes: entries });
    } else {
      toast.error("Please add at-least one entry.");
    }
  };
  return (
    <>
      <FormSectionCard>
        <form id="crimes" onSubmit={handleSubmit(addEntryHandler)}>
          <Box>
            <TextArea
              rows={5}
              placeholder="enter crime description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Crime description is required.",
                },
                minLength: {
                  value: 50,
                  message: "Minium description require 50 characters.",
                },
                maxLength: {
                  value: 1000,
                  message: "Description limit exceeds.",
                },
              })}
            />
            {errors?.description?.message ? (
              <Error>{errors?.description?.message}</Error>
            ) : (
              <></>
            )}
          </Box>

          <FlexBox>
            <Box>
              <TextField
                placeholder="enter city"
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Invalid city name.",
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
                placeholder="enter state"
                {...register("state", {
                  required: {
                    value: true,
                    message: "State is required.",
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
          </FlexBox>
          <Box>
            <TextField
              placeholder="enter address"
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
          <Box>
            <TextField
              type="datetime-local"
              placeholder="enter time"
              {...register("dateAndTime", {
                required: {
                  value: true,
                  message: "Date and Time is required.",
                },
              })}
            />
            {errors?.dateAndTime?.message ? (
              <Error>{errors?.dateAndTime?.message}</Error>
            ) : (
              <></>
            )}
          </Box>

          <ButtonGroup>
            <span></span>
            <Button type="submit">Add Entry</Button>
          </ButtonGroup>
        </form>
        {entries.length ? (
          <CrimeEntriesDisplay entries={entries} removeEntry={removeEntry} />
        ) : (
          <></>
        )}
        <ButtonGroup>
          <BorderedButton>Back</BorderedButton>
          <Button onClick={submitHandler} loader={isLoading}>
            Continue
          </Button>
        </ButtonGroup>
      </FormSectionCard>
    </>
  );
};
export default CrimesForm;
