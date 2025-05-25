import React from "react";

const COLORS = [
  { name: "light-gray", hex: "#f8f6f6" },
  { name: "cream", hex: "#FCE4D8" },
  { name: "tan", hex: "#A68671" },
  { name: "sage", hex: "#B2B379" },
  { name: "chocolate", hex: "#472816" },
  { name: "charcoal", hex: "#0A0A06" },
];


export default function ColorPalette() {
     return (
    <div className="grid grid-cols-6 gap-4 p-8">
      {COLORS.map(({ name, hex }) => (
        <div key={name} className="flex flex-col items-center">
          <div
            className={`w-24 h-40 rounded shadow-md bg-${name}`}
          />
          <code className="mt-2 text-sm font-mono text-gray-700">{hex}</code>
        </div>
      ))}
    </div>
  );
}