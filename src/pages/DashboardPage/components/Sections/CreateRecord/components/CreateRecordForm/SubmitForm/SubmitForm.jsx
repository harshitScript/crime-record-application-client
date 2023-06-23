import LinkButton from "../../../../../../../../components/Buttons/LinkButton";
import { Card } from "../../../../../../../../components/Cards/Card";
import useCreateRecordForm from "../../hooks/useCreateRecordForm";

const SubmitForm = () => {
  const { allFormDataReceived, submitCreateRecordForm, isLoading } =
    useCreateRecordForm();
  return allFormDataReceived ? (
    <Card id="submit-record">
      <LinkButton
        fullWidth={true}
        onClick={submitCreateRecordForm}
        loader={isLoading}
      >
        Submit
      </LinkButton>
    </Card>
  ) : (
    <></>
  );
};
export default SubmitForm;
