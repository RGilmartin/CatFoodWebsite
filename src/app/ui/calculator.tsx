"use client";
import { useState } from "react";

export default function Calculator() {
  const [price, setprice] = useState(0); // price per can
  const [cal_kg, setcal_kg] = useState(0); // calories per kg
  const [gr_can, setgr_can] = useState(0); // grams per can
  const [cans_day, setcans_day] = useState(0); // cans per day
  const [targ_cals, settarg_cals] = useState(0); // target calories
  const [cost_month, setcost_month] = useState(0); // cost per month

  function calculate() {
    setcans_day(
      Math.round((targ_cals / (gr_can * (cal_kg / 1000))) * 100) / 100,
    );
    setcost_month(
      Math.round(
        price * (targ_cals / (gr_can * (cal_kg / 1000))) * (375 / 12) * 100,
      ) / 100,
    );
  }

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
      <div className="p-3">
        <button
          className="h-14 w-28 bg-teal-700 text-slate-50 rounded-md"
          onClick={calculate}
        >
          Calculate
        </button>
        <h2 className="text-xl p-2">Results</h2>
        <p className="p-2">
          cans per day:
          {cans_day.toString()}
        </p>
        <p className="p-2">
          cost per month:
          {cost_month.toString() + " " + "USD"}
        </p>
        <p></p>
      </div>
    </div>
  );
}
