import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_MENU_URL } from '../../../utils/constants';
import { GET_MENU_API_RESPONSE } from '../../../utils/types';
import { Action } from '../../store';

interface MenuSlice {
  isLoading: boolean;
  isSuccess: boolean;
  error: {};
  data: GET_MENU_API_RESPONSE;
}

const initialState: MenuSlice = {
  isLoading: false,
  isSuccess: false,
  error: {},
  data: {
    status: '',
    message: '',
    result: {
      outletId: 0,
      vendorId: 0,
      validateCart: false,
      categories: [],
    },
  },
};

export const fetchMenuDetails = createAsyncThunk(`menu/fetchAll`, async () => {
  try {
    const resp = await fetch(GET_MENU_URL);
    const data = await resp.json();

    return data;
  } catch (error) {
    return error;
  }
});

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    clear: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMenuDetails.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchMenuDetails.fulfilled, (state, action: Action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchMenuDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {};
      });
  },
});

export const { clear } = menuSlice.actions;

export default menuSlice.reducer;
