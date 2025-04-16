import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import ChoosePage from './ChoosePage'
import BucketList from './BucketList'
import YearlyOverview from './YearlyOverview'
import LoginWithGoogle from './LoginWithGoogle'

// Placeholder components
const MonthlyPlanner = () => <div>Monthly Planner Placeholder</div>
const DailyPlan = () => <div>Daily Plan Placeholder</div>
const HabitTracker = () => <div>Habit Tracker Placeholder</div>
const FutureVision = () => <div>Future Vision Placeholder</div>

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
