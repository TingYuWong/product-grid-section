import { createSlice } from '@reduxjs/toolkit';

import { TOAST_SEVERITY } from '@/enums/toastSeverity';

const initialState = {
  open: false,
  duration: 3000,
  message: '',
  severity: TOAST_SEVERITY.SUCCESS,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload?.severity ?? TOAST_SEVERITY.SUCCESS;
    },
    closeToast: (state) => {
      state.open = false;
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
