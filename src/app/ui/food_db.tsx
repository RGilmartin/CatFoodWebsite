"use client";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Can } from "../lib/definitions";
import { useEffect, useMemo, useState } from "react";
const FoodTable = () => {
  const [food, setFood] = useState([]); //Food data from api

  // Get the data for the table
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFood(data);
      });
  }, []);

  // Generate columns for the table
  const columns = useMemo<MRT_ColumnDef<Can>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Price",
        accessorKey: "price",
      },
      {
        header: "Value Rating",
        accessorKey: "value_rating",
      },
      {
        header: "Cals/KG",
        accessorKey: "cal_kg",
      },
      {
        header: "Grams/Can",
        accessorKey: "gr_can",
      },
      {
        header: "Currency",
        accessorKey: "currency",
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
