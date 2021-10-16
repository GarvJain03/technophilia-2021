import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
