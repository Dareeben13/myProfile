import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/nav/home";
import Contact from "../components/nav/contact";
import About from "../components/nav/about";
import Service from "../components/nav/service";
import NavBar from "./Navbar";
import Particles from "../components/Particles";

const App = () => {
  return (
    <div>
      <Particles />
      <BrowserRouter>
        <div style={{ position: "relative" }}>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/service" exact component={Service} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
