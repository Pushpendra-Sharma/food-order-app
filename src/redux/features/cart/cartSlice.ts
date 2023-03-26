import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITEM } from '../../../utils/types';
import { POST_ORDER_URL } from '../../../utils/constants';
import { Action } from '../../store';

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

type Cart_Action = {
  type: string;
  payload: ITEM;
};

export const placeOrder = createAsyncThunk(`cart/placeOrder`, async data => {
  try {
    const resp = await fetch(POST_ORDER_URL, {
      method: 'POST',
      body: '',
    });

    const textResponse = await resp.text();

    /**
     * textResponse is a string
     * Example:
     * {status: "success", result: { orderId: 1232242}, message: "Order successfully created."}
     *
     */

    function getIdFromString(str: string) {
      const strArray = str.split(' ');
      return strArray[5];
    }

    let id = getIdFromString(textResponse);
    id = id.slice(0, id.length - 2);

    const prevOrderHistory = localStorage.getItem('orderHistory') || '{}';
    const orderHistoryObject = JSON.parse(prevOrderHistory);
    const timeStamp = Date.now();
    const newObj = {
      [id]: {
        orderId: id,
        timeStamp,
      },
    };

    const newHistory = { ...orderHistoryObject, ...newObj };
    localStorage.setItem('orderHistory', JSON.stringify(newHistory));

    return {
      status: 'success',
      result: { orderId: id },
      message: 'Order successfully created.',
    };
  } catch (error) {
    return error;
  }
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: Cart_Action) => {
      const { id } = action.payload;
      if (state.items[id] && state.items[id].quantity > 0) {
        state.items[id].quantity += 1;
      } else
        state.items[id] = {
          quantity: 1,
          item: action.payload,
        };
    },
    removeItem: (state, action: Cart_Action) => {
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
      .addCase(placeOrder.fulfilled, (state, action: Action) => {
        const { status, result, message } = action?.payload;
        state.order = {
          isLoading: false,
          isSuccess: true,
          status,
          result,
          message,
        };
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.order.isLoading = false;
        state.order.isSuccess = false;
      });
  },
});

export const { addItem, clear, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
