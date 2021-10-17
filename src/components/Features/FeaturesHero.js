import React from "react";
import { Link as ScrollLink } from "react-scroll";

function FeaturesHero() {
  return (
    <div className="hero min-h-screen">
      <section class="s-hero text-gray-600 body-font px-16 py-1 ">
        <div
          class="container mx-auto flex  md:flex-row flex-col items-center"
          style={{ height: "100%" }}
        >
          <div class="features-banner lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-96"></div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Features
            </h1>
            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              praesentium labore ex id accusamus officiis officia obcaecati
              fugiat? Unde voluptatem sed tempore sit deleniti asperiores nemo
              quas perferendis iure velit.{" "}
            </p>
            <div class="flex justify-center">
              <ScrollLink to="stats" spy={true} smooth={true} duration={500}>
                <button className="btn btn-primary">Read More</button>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div id="stats"></div>
      </section>
    </div>
  );
}

export default FeaturesHero;
