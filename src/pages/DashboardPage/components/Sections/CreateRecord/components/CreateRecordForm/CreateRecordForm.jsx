import CrimesForm from "../FormSections/crimesForm/CrimesForm";
import IdentityForm from "../FormSections/IdentityForm/IdentityForm";
import LocationForm from "../FormSections/LocationForm/LocationForm";
import { HorizontalScroll } from "./CreateRecordForm.style";

const CreateRecordForm = () => {
  return (
    <HorizontalScroll>
      <IdentityForm />
      <LocationForm />
      <CrimesForm />
    </HorizontalScroll>
  );
};
export default CreateRecordForm;
