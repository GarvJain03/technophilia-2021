import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import PageNotFound from "./pages/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/products" component={ProductsList}/>
          <Route path="/product/:id" component={Product} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
