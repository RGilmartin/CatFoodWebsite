"use client";
import { useState } from "react";

export default function Calculator() {
  const [price, setprice] = useState(0);
  const [cal_kg, setcal_kg] = useState(0);
  const [gr_can, setgr_can] = useState(0);
  const [cost_day, setcost_day] = useState(0);
  const [targ_cals, settarg_cals] = useState(0);
  const [cost_cal, setcost_cal] = useState(0);

  return (
    <div>
      <h1 className="text-xl p-2">Calculator</h1>
      <div className="p-3">
        <label>Target Cals</label>
        <input
          type="number"
          className="border border-gray-900 ml-5"
          onChange={(e) => settarg_cals(e.target.valueAsNumber)}
        />
      </div>
      <div className="p-3">
        <label>Price</label>
        <input
          type="number"
          className="border border-gray-900 ml-5"
          onChange={(e) => setprice(e.target.valueAsNumber)}
        />
      </div>
      <div className="p-3">
        <label>Calories per kg</label>
        <input
          type="number"
          className="border border-gray-900 ml-5"
          onChange={(e) => setcal_kg(e.target.valueAsNumber)}
        />
      </div>
      <div className="p-3">
        <label>Grams per can</label>
        <input
          type="number"
          className="border border-gray-900 ml-5"
          onChange={(e) => setgr_can(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <h2>Results</h2>
        <p>cost per cal: {price / cal_kg}</p>
        <p>cals per can: {gr_can * (cal_kg / 1000)}</p>
        <p>cans per day: {targ_cals / (gr_can * (cal_kg / 1000))}</p>
        <p>
          cost per month:
          {price * (targ_cals / (gr_can * (cal_kg / 1000))) * (375 / 12)}
        </p>
        <p></p>
      </div>
    </div>
  );
}
