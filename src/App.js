import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './containers/Home';
import About from './containers/About';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';
import Profile from './containers/Profile';
import Users from './containers/Users';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/profile">
              <Profile name="John" age="20" email="john@gmail.com" country="China" />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
