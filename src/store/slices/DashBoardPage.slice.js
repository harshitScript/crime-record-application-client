import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    createRecordForm: {
      identityForm: {},
      activeSection: "identity",
    },
  },
  reducers: {
    setIdentityFormData: (state, { payload }) => {
      state.createRecordForm.identityForm = {
        ...state.createRecordForm.identityForm,
        ...payload,
      };
    },
    setActiveSection: (state, { payload }) => {
      state.createRecordForm.activeSection = payload;
    },
  },
});

export const { setIdentityFormData, setActiveSection } = dashboardSlice.actions;

export default dashboardSlice;
