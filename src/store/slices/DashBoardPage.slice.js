import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    createRecordForm: {
      formData: {
        identityForm: {},
        locationForm: {},
      },
      activeSection: "identity",
    },
  },
  reducers: {
    setIdentityFormData: (state, { payload }) => {
      state.createRecordForm.formData.identityForm = {
        ...state.createRecordForm.identityForm,
        ...payload,
      };
    },
    setLocationFormData: (state, { payload }) => {
      state.createRecordForm.formData.locationForm = {
        ...state.createRecordForm.locationForm,
        ...payload,
      };
    },
    setActiveSection: (state, { payload }) => {
      state.createRecordForm.activeSection = payload;
    },
  },
});

export const { setIdentityFormData, setActiveSection, setLocationFormData } =
  dashboardSlice.actions;

export default dashboardSlice;
