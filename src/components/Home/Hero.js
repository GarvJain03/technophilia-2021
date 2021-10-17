import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/165496.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">GameZeo</h1>
            <p className="mb-5">
              Your very own online store for every gamer's needs at affordable
              prices.
            </p>
            <ScrollLink
              to="features"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="btn btn-primary">Read More</button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
