import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Projects from "./screens/Projects";
import TeamPage from "./screens/TeamPage";
import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import EventPage from "./screens/EventPage";
import RegisterPage from "./screens/RegisterPage";
import Page404 from "./screens/Page404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/events" component={EventPage} />
        <Route path="/RegisterPage" component={RegisterPage} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
