import React, { useState, useEffect } from "react";
import "./YearlyOverview.css";
import LoginWithGoogle from './LoginWithGoogle';

export default function YearlyOverview() {
  const [goals, setGoals] = useState(["", "", "", "", ""]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("monu_yearly_goals"));
    if (saved) setGoals(saved);
  }, []);

  const handleGoalChange = (i, value) => {
    const updated = [...goals];
    updated[i] = value;
    setGoals(updated);
    localStorage.setItem("monu_yearly_goals", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#3A3A3A] px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-serif font-bold mb-2">MONU</h1>
      <p className="yearly-subtitle italic mb-12">Your calendar, your plan.</p>

      <div className="yearly-content-box bg-white shadow-md p-6 rounded-xl w-[350px] space-y-6">
        {/* Yearly Goals */}
        <div>
          {goals.map((goal, i) => (
            <div key={i} className="flex items-center mb-4">
              <input type="checkbox" className="w-4 h-4 mr-4" />
              <input
                type="text"
                value={goal}
                onChange={(e) => handleGoalChange(i, e.target.value)}
                placeholder={`Goal ${i + 1}`}
                className="goal-input border-b border-gray-400 bg-transparent w-full focus:outline-none text-sm font-serif placeholder-gray-400"
              />
            </div>
          ))}
        </div>

        
        <div className="pt-4">
          <LoginWithGoogle />
        </div>
        <p className="text-center text-sm italic text-[#666] mt-12">
            when we set an intention,<br />
            somehow the universe seems to magically come to meet us.
        </p>

      </div>
    </div>
  );
}
