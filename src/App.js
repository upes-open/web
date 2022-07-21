import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Projects from "./screens/Projects";
import TeamPage from "./screens/TeamPage";
import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import EventPage from "./screens/EventPage";

import AuthenticationPage from "./screens/AuthenticationPage";
import OSCPage from "./screens/OSCPage";
import OSCLeaderboard from "./screens/OSCLeaderboard";
import Page404 from "./screens/Page404";
import RegisterPage from "./screens/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/authenticate" element={<AuthenticationPage />} />
      <Route path="/osc" exact element={<OSCPage />} />
      <Route path="/osc/register" element={<RegisterPage />} />
      <Route path="/osc/leaderboard" element={<OSCLeaderboard />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
