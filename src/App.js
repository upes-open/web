import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import ContactPage from './screens/ContactPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/web">
          <HomePage/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path = "/about">
          <AboutPage/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path = "/contact">
          <ContactPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
