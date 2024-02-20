import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Content from "./Content";
import About from "./About";
import Solution from "./Solution";
import Platform from "./Platform";
import Management from "./Management";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Content />
      <About />
      <Solution />
      <Platform />
      <Management />
      <Testimonials />
    </div>
  );
};

export default Home;
