import { Can } from "./definitions";

// Parameters: targ_cals: number, can: Can
// Returns: number, number of cans needed per day
export function cansPerDay(targ_cals: number, can: Can): number {
  return Math.round(
    ((targ_cals / (can.gr_can * (can.cal_kg / 1000))) * 100) / 100,
  );
}

// Parameters: targ_cals: number, can: Can
// Returns: number, cost per month
export function costPerMonth(targ_cals: number, can: Can): number {
  return Math.round(
    (can.price *
      (targ_cals / (can.gr_can * (can.cal_kg / 1000))) *
      (375 / 12) *
      100) /
      100,
  );
}
