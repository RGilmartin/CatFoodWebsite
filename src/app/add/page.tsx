"use client";
import { useState } from "react";
import { Can } from "../lib/definitions";

export default function Add() {
  const [name, setName] = useState("");
  const [calKg, setCalKg] = useState(0);
  const [grCan, setGrCan] = useState(0);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [valueRating, setValueRating] = useState(5);


   async function addItem() {
    let can: Can = {
      name: name,
      gr_can: grCan,
      cal_kg: calKg,
      price: price,
      currency: currency,
      value_rating: valueRating
    };

    fetch("/api", {
      method: "POST",
      body: JSON.stringify(can)
    });

    setName("");
    setCalKg(0);
    setGrCan(0);
    setPrice(0);
    setValueRating(5);
  }


  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold m-5">Add Can</h1>
      </div>
      <div className="flex flex-col m-5 p-5 w-96 border">
        {/* form to collect Can data  */}
        <label className="p-2">Can Name</label>
        <input
          className="p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="p-2">Calories per Kg</label>
        <input
          className="p-2"
          type="number"
          placeholder="Calories per Kg"
          value={calKg}
          onChange={(e) => setCalKg(e.target.valueAsNumber)}
        />
        <label className="p-2">Grams per Can</label>
        <input
          className="p-2"
          type="number"
          placeholder="Grams per Can"
          value={grCan}
          onChange={(e) => setGrCan(e.target.valueAsNumber)}
        />
        <label className="p-2">Price</label>
        <input
          className="p-2"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
        />
        <label className="p-2">Currency</label>
        <input
          className="p-2"
          type="text"
          placeholder="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <label className="p-2">Rating</label>
        <input
          className="p-2"
          type="number"
          placeholder="Rating"
          value={valueRating}
          onChange={(e) => setValueRating(e.target.valueAsNumber)}
        />
        <button className="m-5 p-2 bg-teal-500 text-white rounded-lg" onClick={addItem}>
          Add Can
        </button>
      </div>
    </div>
  );
}
