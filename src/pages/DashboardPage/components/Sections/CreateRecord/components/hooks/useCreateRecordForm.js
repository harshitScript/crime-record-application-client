import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateRecordMutation } from "../../../../../../../store/recordApi";
import {
  setActiveSection,
  setCrimesFormData,
  setIdentityFormData,
  setLocationFormData,
} from "../../../../../../../store/slices/DashBoardPage.slice";
const formSequence = ["identity", "location", "crimes"];
const useCreateRecordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [triggerCreateRecord, { isLoading }] = useCreateRecordMutation();

  const {
    createRecordForm: { activeSection, formData },
  } = useSelector(({ dashboard }) => dashboard);

  const allFormDataReceived = formSequence.every(
    (form) => Object.keys(formData?.[form]).length
  );

  const navigateTo = (section = "") => {
    dispatch(setActiveSection(section));
  };

  //* Takes form to viewport
  useEffect(() => {
    document.getElementById(activeSection).scrollIntoView();
  }, [activeSection]);

  const submitCreateRecordForm = () => {
    if (allFormDataReceived) {
      triggerCreateRecord({
        body: {
          ...formData?.identity,
          ...formData?.location,
          ...formData?.crimes,
        },
      }).then((response) => {
        if (response.error) {
          toast.error("Failed to create record.");
        } else {
          toast.success("Record created successfully.");
          navigate("/dashboard/list-records");
        }
      });
    }
  };

  //* Form savers
  const saveIdentityForm = (data = {}) => {
    const tempData = { ...data, name: `${data?.firstName} ${data?.lastName}` };
    dispatch(setIdentityFormData(tempData));
    navigateTo("location");
  };
  const saveLocationForm = (data = {}) => {
    dispatch(setLocationFormData(data));
    navigateTo("crimes");
  };
  const saveCrimesForm = (data = {}) => {
    dispatch(setCrimesFormData(data));
  };

  return {
    activeSection,
    identityFormData: formData?.identity,
    locationFormData: formData?.location,
    crimesFormData: formData?.crimes,
    formSequence,
    saveIdentityForm,
    saveLocationForm,
    saveCrimesForm,
    submitCreateRecordForm,
    navigateTo,
    allFormDataReceived,
    isLoading,
  };
};

export default useCreateRecordForm;
