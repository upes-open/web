import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Projects from "./screens/Projects";
import TeamPage from "./screens/TeamPage";
import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import EventPage from "./screens/EventPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/web">
          <HomePage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Switch>
        <Route path="/team">
          <TeamPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/events">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
