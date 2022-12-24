import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSection,
  setIdentityFormData,
} from "../../../../../../../store/slices/DashBoardPage.slice";

const useCreateRecordForm = () => {
  const dispatch = useDispatch();
  const {
    createRecordForm: { activeSection, identityForm: identityFormData },
  } = useSelector(({ dashboard }) => dashboard);

  const saveIdentityForm = (data = {}) => {
    dispatch(setIdentityFormData(data));
  };

  const navigateTo = (section = "") => {
    dispatch(setActiveSection(section));
  };

  useEffect(() => {
    document.getElementById(activeSection).scrollIntoView();
  }, [activeSection]);

  return {
    activeSection,
    identityFormData,
    saveIdentityForm,
    navigateTo,
  };
};

export default useCreateRecordForm;
