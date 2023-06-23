import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUrlQueries } from "../../../../../../../customHooks/useUrlQuery";
import recordApi, {
  useCreateRecordMutation,
  useEditRecordMutation,
} from "../../../../../../../store/recordApi";
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
  const { edit } = useUrlQueries();

  const [triggerCreateRecord, { isLoading: createLoading }] =
    useCreateRecordMutation();
  const [triggerEditRecord, { isLoading: editLoading }] =
    useEditRecordMutation();

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

  const submitCreateRecordForm = async () => {
    if (allFormDataReceived) {
      try {
        const response = await triggerCreateRecord({
          body: {
            ...formData?.identity,
            ...formData?.location,
            ...formData?.crimes,
          },
        });
        if (response?.error) throw new Error();

        toast.success("Record created successfully.");
        dispatch(recordApi.util.invalidateTags(["record-ids"]));
        navigate("/dashboard/list-records");
      } catch {
        toast.error("Failed to create record.");
      }
    }
  };

  const submitEditRecordForm = async () => {
    if (allFormDataReceived) {
      try {
        const response = await triggerEditRecord({
          body: {
            ...formData?.identity,
            ...formData?.location,
            ...formData?.crimes,
          },
        });
        if (response?.error) throw new Error();

        toast.success("Record updated successfully.");
        dispatch(recordApi.util.invalidateTags(["record-ids"]));
        navigate("/dashboard/list-records");
      } catch {
        toast.error("Failed to update record.");
      }
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
    submitForm: edit ? submitEditRecordForm : submitCreateRecordForm,
    navigateTo,
    allFormDataReceived,
    isLoading: createLoading || editLoading,
  };
};

export default useCreateRecordForm;
