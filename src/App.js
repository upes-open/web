import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Projects from "./screens/Projects";
import TeamPage from "./screens/TeamPage";
import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import EventPage from "./screens/EventPage";

function App() {
  return (
    <Router basename="/web" >
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/projects' component={Projects} />
        <Route path='/team' component={TeamPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/events' component={EventPage} />
        {/* <Route exact path="/">
          <HomePage />
        </Route>
      
        <Route exact path="/projects" component={Projects}></Route>
      
        <Route exact path="/team" component={TeamPage}></Route>
      
        <Route exact path="/about">
          <AboutPage />
        </Route>
      
        <Route exact path="/contact">
          <ContactPage />
        </Route>
     
        <Route exact path="/event">
          <EventPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
