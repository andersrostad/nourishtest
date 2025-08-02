import React from 'react';

export default function Nutrition() {
  return (
    <div className="p-4 rounded-xl bg-[#1a162e] shadow-md">
      <h2 className="text-xl mb-2 text-secondary">Nutrition</h2>
      <p className="text-lg">2,317 kcal/day</p>
      <div className="mt-4 space-y-1">
        <p>Carbs: <span className="text-primary">238g</span></p>
        <p>Protein: <span className="text-primary">107g</span></p>
        <p>Fats: <span className="text-primary">56g</span></p>
      </div>
    </div>
  );
}