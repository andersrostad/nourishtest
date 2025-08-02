import React from 'react';
import Nutrition from './components/Nutrition';
import Recovery from './components/Recovery';
import Overview from './components/Overview';

export default function App() {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold text-primary">Nourish AI</h1>
      <Nutrition />
      <Recovery />
      <Overview />
    </div>
  );
}