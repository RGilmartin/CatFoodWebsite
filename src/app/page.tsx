import Image from "next/image";
import Calculator from "./ui/calculator";

export default function Home() {
  return (
    <div className="">
      <div className="bg-teal-900 h-48">
        <h1 className="p-5 text-3xl text-slate-50">Wet cat food calculator</h1>
        <p className="px-20 text-slate-50">
          This Website provides a simple way for you to compare the costs of
          food items for your cat. Everyone wants to give their cat the best
          food possible, but it can be hard to know what is best for your cat
          and your budget. This website will help you compare the costs of
          different food items for your cat so you can make an informed
          decision.
        </p>
      </div>
      <Calculator />
    </div>
  );
}
