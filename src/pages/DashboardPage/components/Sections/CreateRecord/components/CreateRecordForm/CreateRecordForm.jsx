import { useEffect } from "react";
import {
  FormSectionCard,
  HorizontalScrollForm,
} from "./CreateRecordForm.style";

const CreateRecordForm = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("4").scrollIntoView();
    }, 3000);
  });
  return (
    <HorizontalScrollForm>
      <FormSectionCard>Card 1</FormSectionCard>
      <FormSectionCard>Card 2</FormSectionCard>
      <FormSectionCard>Card 3</FormSectionCard>
      <FormSectionCard id="4">Card 4</FormSectionCard>
      <FormSectionCard>Card 5</FormSectionCard>
      <FormSectionCard>Card 6</FormSectionCard>
      <FormSectionCard>Card 7</FormSectionCard>
    </HorizontalScrollForm>
  );
};
export default CreateRecordForm;
