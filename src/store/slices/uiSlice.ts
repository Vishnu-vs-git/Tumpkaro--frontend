import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
}

const initialState: UIState = {
  sidebarCollapsed: false,
  mobileSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },

    collapseSidebar(state) {
      state.sidebarCollapsed = true;
    },

    expandSidebar(state) {
      state.sidebarCollapsed = false;
    },

    openMobileSidebar(state) {
      state.mobileSidebarOpen = true;
    },

    closeMobileSidebar(state) {
      state.mobileSidebarOpen = false;
    },

    toggleMobileSidebar(state) {
      state.mobileSidebarOpen = !state.mobileSidebarOpen;
    },
  },
});

export const {
  toggleSidebar,
  collapseSidebar,
  expandSidebar,
  openMobileSidebar,
  closeMobileSidebar,
  toggleMobileSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;