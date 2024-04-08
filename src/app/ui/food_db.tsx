"use client";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Can } from "../lib/definitions";
import { useMemo } from "react";
import { food } from "../lib/food_temp";
const FoodTable = () => {
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
  return <MaterialReactTable table={table} />;
};

export default FoodTable;
