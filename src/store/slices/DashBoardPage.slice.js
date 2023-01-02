import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    createRecordForm: {
      formData: {
        identity: {},
        location: {},
        crimes: {},
      },
      activeSection: "identity",
    },
  },
  reducers: {
    setIdentityFormData: (state, { payload }) => {
      state.createRecordForm.formData.identity = {
        ...state.createRecordForm.identity,
        ...payload,
      };
    },
    setLocationFormData: (state, { payload }) => {
      state.createRecordForm.formData.location = {
        ...state.createRecordForm.location,
        ...payload,
      };
    },
    setCrimesFormData: (state, { payload }) => {
      state.createRecordForm.formData.crimes = {
        ...state.createRecordForm.formData.crimes,
        ...payload,
      };
    },
    setActiveSection: (state, { payload }) => {
      state.createRecordForm.activeSection = payload;
    },
  },
});

export const {
  setIdentityFormData,
  setActiveSection,
  setLocationFormData,
  setCrimesFormData,
} = dashboardSlice.actions;

export default dashboardSlice;
