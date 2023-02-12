import CrimesForm from "../FormSections/crimesForm/CrimesForm";
import IdentityForm from "../FormSections/IdentityForm/IdentityForm";
import LocationForm from "../FormSections/LocationForm/LocationForm";
import { HorizontalScroll } from "./CreateRecordForm.style";
import SubmitForm from "./SubmitForm/SubmitForm";

const CreateRecordForm = ({ initialRecordData = {} }) => {
  console.log("The initialRecordData => ", initialRecordData);
  return (
    <>
      <HorizontalScroll>
        <IdentityForm />
        <LocationForm />
        <CrimesForm />
      </HorizontalScroll>
      <SubmitForm />
    </>
  );
};
export default CreateRecordForm;
