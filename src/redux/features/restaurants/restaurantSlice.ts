import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_ALL_RESTAURANT_URL } from '../../../utils/constants';
import { GET_OUTLETS_API_RESPONSE, VENDOR } from '../../../utils/types';
import { Action } from '../../store';

interface RestaurantState {
  isLoading: boolean;
  isSuccess: boolean;
  error: {};
  data: {
    result: {
      totalOutlets: number;
      vendors: VENDOR[];
      stationName: string;
      stationCode: string;
    };
  };
}

const initialState: RestaurantState = {
  isLoading: false,
  isSuccess: false,
  error: {},
  data: {
    result: {
      totalOutlets: 0,
      vendors: [],
      stationName: 'string',
      stationCode: '',
    },
  },
};

export const fetchRestaurantList = createAsyncThunk(
  `restaurants/fetchAll`,
  async () => {
    try {
      const resp = await fetch(GET_ALL_RESTAURANT_URL);
      const json: GET_OUTLETS_API_RESPONSE = await resp.json();

      return json;
    } catch (error) {
      return error;
    }
  }
);

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    clear: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurantList.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRestaurantList.fulfilled, (state, action: Action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchRestaurantList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {};
      });
  },
});

export const { clear } = restaurantSlice.actions;

export default restaurantSlice.reducer;
