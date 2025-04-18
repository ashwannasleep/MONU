import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import ChoosePage from './ChoosePage'
import BucketList from './BucketList'
import YearlyOverview from './YearlyOverview'
import LoginWithGoogle from './LoginWithGoogle'
import DailyPlan from './DailyPlan'
import FutureVision from './FutureVision'
import MonthlyPlanner from './MonthlyPlanner';
import HabitTracker from './HabitTracker';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/choose" element={<ChoosePage />} />
      <Route path="/bucket-list" element={<BucketList />} />
      <Route path="/yearly-overview" element={<YearlyOverview />} />
      <Route path="/login-with-google" element={<LoginWithGoogle />} />
      <Route path="/monthly-planner" element={<MonthlyPlanner />} />
      <Route path="/daily-plan" element={<DailyPlan />} />
      <Route path="/habit-tracker" element={<HabitTracker />} />
      <Route path="/future-vision" element={<FutureVision />} />
    </Routes>
  )
}
