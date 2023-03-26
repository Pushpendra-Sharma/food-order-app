import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITEM } from '../../../utils/types';
import { POST_ORDER_URL } from '../../../utils/constants';

interface CartState {
  order: {
    isLoading: boolean;
    isSuccess: boolean;
    status: string;
    result: { orderId: number };
    message: string;
  };
  items: {
    [propName: string]: { quantity: number; item: ITEM };
  };
}

const initialState: CartState = {
  order: {
    isLoading: false,
    isSuccess: false,
    status: '',
    result: { orderId: 0 },
    message: '',
  },
  items: {},
};

type Action = {
  type: string;
  payload: ITEM;
};

export const placeOrder = createAsyncThunk(`cart/placeOrder`, async (data) => {
  try {
    const resp = await fetch(POST_ORDER_URL, {
      method: 'POST',
      body: '',
    });

    const jsonResponse = await resp.json();

    return jsonResponse;
  } catch (error) {
    return error;
  }
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: Action) => {
      const { id } = action.payload;
      if (state.items[id] && state.items[id].quantity > 0) {
        state.items[id].quantity += 1;
      } else
        state.items[id] = {
          quantity: 1,
          item: action.payload,
        };
    },
    removeItem: (state, action: Action) => {
      const { id } = action.payload;
      if (state.items[id].quantity === 1) {
        delete state.items[id];
      } else if (state.items[id]) {
        state.items[id].quantity -= 1;
      } else {
        delete state.items[id];
      }
    },
    clear: state => {
      state.items = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(placeOrder.pending, state => {
        state.order.isLoading = true;
        state.order.isSuccess = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.order.isLoading = false;
        state.order.isSuccess = true;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.order.isLoading = false;
        state.order.isSuccess = false;
      });
  },
});

export const { addItem, clear, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
