
export interface OUTLET {
  id: number;
  name: string;
  minOrderValue: number;
  prepaid: boolean;
  cuisines: string[];
  ratingValue: number;
  ratingCount: number;
  orderByTime: string;
  logo: string;
  vendorId: string;
  deliveryCharge: number;
  speciality: string | null;
  specialityImg: string | null;
}

export interface VENDOR {
  id: number;
  name: string;
  ratingValue: number;
  ratingCount: number;
  vendorType: string;
  showAsGroup: boolean;
  cuisines: string[];
  logo: string;
  minOrderValue: number;
  outlets: OUTLET[];
}

export interface GET_OUTLETS_API_RESPONSE {
  status: string;
  message: string;
  result: {
    totalOutlets: number;
    vendors: VENDOR[];
    stationName: string;
    stationCode: string;
  };
}

export interface ITEM {
  id: number;
  itemName: string;
  description: string;
  basePrice: number;
  sellingPrice: number;
  taxRate: number;
  isVegetarian: boolean;
  image: string;
  neonUrl: string;
  cuisine: string;
  schedules: null | string;
  customisations: null | string;
}

export interface CATEGORY {
  name: string;
  showExpanded: boolean;
  foodType: string;
  viewType: string;
  items: ITEM[];
}

export interface GET_MENU_API_RESPONSE {
  status: string;
  message: string;
  result: {
    outletId: number;
    vendorId: number;
    validateCart: boolean;
    categories: CATEGORY[];
  };
}
