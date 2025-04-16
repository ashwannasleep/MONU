import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import LoginWithGoogle from './LoginWithGoogle';
import LandingPage from './LandingPage';
import ChoosePage from './ChoosePage';
import YearlyOverview from './YearlyOverview';
import BucketList from './BucketList';

// Placeholder
const MonthlyPlanner = () => <div>Monthly Planner Placeholder</div>;
const DailyPlan = () => <div>Daily Plan Placeholder</div>;
const HabitTracker = () => <div>Habit Tracker Placeholder</div>;
const FutureVision = () => <div>Future Vision Placeholder</div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route path="/yearly-overview" element={<YearlyOverview />} />
        <Route path="/monthly-planner" element={<MonthlyPlanner />} />
        <Route path="/daily-plan" element={<DailyPlan />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />
        <Route path="/future-vision" element={<FutureVision />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/login-with-google" element={<LoginWithGoogle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
