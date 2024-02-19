import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Content from "./Content";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Content />
      <About />
    </div>
  );
};

export default Home;
