"use client";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Can } from "../lib/definitions";
import { useEffect, useMemo, useState } from "react";
import { cansPerDay, costPerMonth } from "../lib/can_calc";
const FoodTable = () => {
  const [food, setFood] = useState<InfoCan[]>([]); //Food data from api

  type InfoCan = Can & { cans_per_day: number; cost_per_month: number };

  function updateCanData() {
    food.forEach((can: InfoCan) => {
      can.cans_per_day = cansPerDay(t_cals, can); // TODO, add changable target Cals
      can.cost_per_month = costPerMonth(t_cals, can);
      console.log(can);
    });

    setFood(food);
  }

  const updateData = useEffect(() => {
    food.forEach((can: InfoCan) => {
      can.cans_per_day = cansPerDay(t_cals, can); // TODO, add changable target Cals
      can.cost_per_month = costPerMonth(t_cals, can);
      console.log(can);
    });

    setFood(food);
  }, []);

  // Get the data for the table
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => {
        let cansInfo: InfoCan[] = [];
        data.forEach((can: Can) => {
          let cpd = cansPerDay(t_cals, can); // TODO, add changable target Cals
          let cpm = costPerMonth(t_cals, can);
          cansInfo.push({ ...can, cans_per_day: cpd, cost_per_month: cpm });
        });
        setFood(cansInfo);
      });
  }, []);

  // Generate columns for the table
  const columns = useMemo<
    MRT_ColumnDef<Can & { cans_per_day: number; cost_per_month: number }>[]
  >(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        size: 150,
      },
      {
        header: "Price",
        accessorKey: "price",
        size: 75,
      },
      {
        header: "Value Rating",
        accessorKey: "value_rating",
        size: 50,
      },
      {
        header: "Cals/KG",
        accessorKey: "cal_kg",
        size: 75,
      },
      {
        header: "Grams/Can",
        accessorKey: "gr_can",
        size: 75,
      },
      {
        header: "Currency",
        accessorKey: "currency",
        size: 50,
      },
      {
        header: "Cans/Day",
        accessorKey: "cans_per_day",
        size: 75,
      },
      {
        header: "Cost/Month",
        accessorKey: "cost_per_month",
        size: 75,
      },
    ],
    [],
  );

  const [t_cals, set_t_cals] = useState(200);

  return (
    <div>
      <label>Target Calories</label>
      <input
        className="w-24 border-2 border-gray-300 rounded-md m-5"
        type="number"
        id="targetCalories"
        name="targetCalories"
        onChange={(val) => {
          set_t_cals(val.target.valueAsNumber);
        }}
      />
      <button
        className="h-12 w-24 bg-teal-700 text-slate-50 rounded-md m-5"
        onClick={updateData}
      >
        Update
      </button>
      <MaterialReactTable columns={columns} data={food} />
    </div>
  );
};

export default FoodTable;
