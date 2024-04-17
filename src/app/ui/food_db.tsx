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

  // Get the data for the table
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let cansInfo: InfoCan[] = [];
        data.forEach((can: Can) => {
          let cpd = cansPerDay(210, can); // TODO, add changable target Cals
          let cpm = costPerMonth(210, can);
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

  const table = useMaterialReactTable({
    columns,
    data: food,
  });
  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default FoodTable;
