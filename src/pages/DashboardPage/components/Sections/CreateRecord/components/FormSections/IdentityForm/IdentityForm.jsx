import { useForm } from "react-hook-form";
import Button from "../../../../../../../../components/Buttons/Button";
import {
  ButtonGroup,
  FormSectionCard,
} from "../../CreateRecordForm/CreateRecordForm.style";
import useCreateRecordForm from "../../hooks/useCreateRecordForm";

const IdentityForm = () => {
  const { saveIdentityForm } = useCreateRecordForm();
  const { handleSubmit } = useForm();

  return (
    <form id="identity" onSubmit={handleSubmit(saveIdentityForm)}>
      <FormSectionCard>
        <ButtonGroup>
          <span></span>
          <Button type="submit">Next</Button>
        </ButtonGroup>
      </FormSectionCard>
    </form>
  );
};
export default IdentityForm;
