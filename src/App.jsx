import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ChoosePage from "./ChoosePage";
import BucketList from "./BucketList";
import YearlyOverview from "./YearlyOverview";
import LoginWithGoogle from "./LoginWithGoogle";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/yearly-overview" element={<YearlyOverview />} />
        <Route path="/login-with-google" element={<LoginWithGoogle />} />
      </Routes>
    </Router>
  );
}

export default App;
