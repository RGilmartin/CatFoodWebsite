export type Can = {
  name: string;
  cal_kg: number;
  gr_can: number;
  price: number;
  currency: string;
  value_rating: number;
  // food: Food;
};

export type Food = {
  cans: Can[];
  value_rating: number;
};
