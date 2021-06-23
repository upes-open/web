import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Projects from "./screens/Projects";
import TeamPage from "./screens/TeamPage";
// import AboutPage from "./screens/AboutPage";
// import ContactPage from "./screens/ContactPage";
// import EventPage from "./screens/EventPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/web">
          <HomePage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      <Switch>
        <Route exact path="/team" component={TeamPage}></Route>
      </Switch>
      {/* <Switch>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/event">
          <EventPage />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
