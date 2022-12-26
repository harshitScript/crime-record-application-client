import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSection,
  setIdentityFormData,
} from "../../../../../../../store/slices/DashBoardPage.slice";

const useCreateRecordForm = () => {
  const dispatch = useDispatch();
  const {
    createRecordForm: {
      activeSection,
      formData: {
        identityForm: identityFormData,
        locationForm: locationFormData,
      },
    },
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
    navigateTo("location");
  };

  return {
    activeSection,
    identityFormData,
    locationFormData,
    saveIdentityForm,
    saveLocationForm,
    navigateTo,
  };
};

export default useCreateRecordForm;
