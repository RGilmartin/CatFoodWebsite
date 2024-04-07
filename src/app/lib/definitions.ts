export type Can = {
  name: string;
  cal_kg: number;
  gr_can: number;
  price: number;
  currency: "USD" | "EUR" | "GBP";
  value_rating: number;
};

export type Food = {
  cans: Can[];
  value_rating: number;
};
