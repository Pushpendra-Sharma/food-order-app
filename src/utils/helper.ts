import { ITEM } from './types';

type param = { quantity: number; item: ITEM };

export function calculateTotal(items: param[]) {
  let result = {
    totalPrice: 0,
  };

  for (const obj of items) {
    const { quantity, item } = obj;

    result.totalPrice += quantity * item.sellingPrice;
  }

  return result;
}
