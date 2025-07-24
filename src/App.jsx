import LandingPage from "./features/LandingPage";
import MediBot from "./features/MediBot";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<MediBot />} />
      </Routes>
    </>
  );
}

export default App;
