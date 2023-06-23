import CrimesForm from "../FormSections/crimesForm/CrimesForm";
import IdentityForm from "../FormSections/IdentityForm/IdentityForm";
import LocationForm from "../FormSections/LocationForm/LocationForm";
import { HorizontalScroll } from "./CreateRecordForm.style";
import SubmitForm from "./SubmitForm/SubmitForm";

const CreateRecordForm = ({ initialRecordData }) => {
  return (
    <>
      <HorizontalScroll>
        <IdentityForm initialRecordData={initialRecordData} />
        <LocationForm initialRecordData={initialRecordData} />
        <CrimesForm initialRecordData={initialRecordData} />
      </HorizontalScroll>
      <SubmitForm />
    </>
  );
};
export default CreateRecordForm;

