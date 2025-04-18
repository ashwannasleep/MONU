import React, { useState, useEffect } from "react";
import "./FutureVision.css";

export default function FutureVision() {
  const [ageTarget, setAgeTarget] = useState("<Replace> -year-old me");
  const [goals, setGoals] = useState({
    health: [""],
    relationships: [""],
    growth: [""],
    travel: [""],
    environment: [""],
    career: [""],
    finance: [""],
  });

  useEffect(() => {
    const savedAge = localStorage.getItem("future_age");
    const savedGoals = JSON.parse(localStorage.getItem("future_goals"));
    if (savedAge) setAgeTarget(savedAge);
    if (savedGoals) setGoals(savedGoals);
  }, []);

  useEffect(() => {
    localStorage.setItem("future_age", ageTarget);
    localStorage.setItem("future_goals", JSON.stringify(goals));
  }, [ageTarget, goals]);

  const handleChange = (category, index, value) => {
    const updated = { ...goals };
    updated[category][index] = value;
    setGoals(updated);
  };

  const handleAddLine = (category) => {
    const updated = { ...goals };
    updated[category].push("");
    setGoals(updated);
  };

  const handleDelete = (category, index) => {
    const updated = { ...goals };
    updated[category].splice(index, 1);
    setGoals(updated);
  };
  
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#3A3A3A] px-6 py-12 flex flex-col items-center">
  <h1 className="text-4xl font-serif font-bold mb-2">MONU</h1>
  <p className="future-subheader italic">Your 3-Year Blueprint</p>

      <div className="blueprint-wrapper">
        <div className="column">
          <div className="section">
            <h3>
              TO:
              <input
                type="text"
                value={ageTarget}
                onChange={(e) => setAgeTarget(e.target.value)}
                placeholder="21-year-old me"
                className="editable-title"
              />
            </h3>
          </div>

          {["health", "relationships", "growth"].map((cat) => (
            <div key={cat} className="section">
              <h3>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
              <ul>
                {goals[cat].map((item, i) => (
                  <li key={i}>
                    <div className="goal-item">
  <input
    type="text"
    value={item}
    onChange={(e) => handleChange(cat, i, e.target.value)}
  />
  <button
    onClick={() => handleDelete(cat, i)}
    className="delete-btn"
    title="Delete"
  >
    ✕
  </button>
</div>

                  </li>
                ))}
              </ul>
              <button onClick={() => handleAddLine(cat)}>＋</button>
            </div>
          ))}
        </div>

        <div className="column">
          {["travel", "environment", "career", "finance"].map((cat) => (
            <div key={cat} className="section">
              <h3>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
              <ul>
                {goals[cat].map((item, i) => (
                  <li key={i}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleChange(cat, i, e.target.value)}
                    />
                  </li>
                ))}
              </ul>
              <button onClick={() => handleAddLine(cat)}>＋</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
