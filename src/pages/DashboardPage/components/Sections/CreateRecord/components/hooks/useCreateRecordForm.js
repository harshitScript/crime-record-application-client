import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSection,
  setCrimesFormData,
  setIdentityFormData,
} from "../../../../../../../store/slices/DashBoardPage.slice";
const formSequence = ["identity", "location", "crimes"];
const useCreateRecordForm = () => {
  const dispatch = useDispatch();
  const {
    createRecordForm: { activeSection, formData },
  } = useSelector(({ dashboard }) => dashboard);

  const navigateTo = (section = "") => {
    dispatch(setActiveSection(section));
  };

  //* Takes form to viewport
  useEffect(() => {
    document.getElementById(activeSection).scrollIntoView();
  }, [activeSection]);

  //* Form savers
  const saveIdentityForm = (data = {}) => {
    dispatch(setIdentityFormData(data));
    navigateTo("location");
  };
  const saveLocationForm = (data = {}) => {
    dispatch(setIdentityFormData(data));
    navigateTo("crimes");
  };
  const saveCrimesForm = (data = {}) => {
    dispatch(setCrimesFormData(data));
  };

  const formStateGenerator = (formName = "") => {
    const formState = {};
    formSequence.forEach((form, index) => {
      if (index === 0) {
        formState[form] = "active";
        return;
      } else {
        //* Check if previous form data is available or not.
        return (formState[form] = Object.keys(
          formData?.[formSequence[index - 1]]
        ).length
          ? "active"
          : "disabled");
      }
    });
    return formState?.[formName];
  };

  return {
    activeSection,
    identityFormData: formData?.identity,
    locationFormData: formData?.location,
    crimesFormData: formData?.crimes,
    formSequence,
    formStateGenerator,
    saveIdentityForm,
    saveLocationForm,
    saveCrimesForm,
    navigateTo,
  };
};

export default useCreateRecordForm;
