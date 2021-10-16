import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/products">
            <ProductsList />
          </Route>
          <Route path="/product/:id" component={Product} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
