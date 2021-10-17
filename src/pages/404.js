import React from "react";
import {Link} from "react-router-dom"

function PageNotFound() {
  return (
    <div className="px-5">
      <div class="hero min-h-screen bg-base-200">
        <div class="flex-col hero-content lg:flex-row-reverse">
          <img
            src="https://jstseguru.in/assets/images/jstseguru-404.gif"
            class="max-w-sm rounded-lg"
          />
          <div>
            <h1 class="mb-5 text-5xl font-bold">404</h1>
            <p class="mb-5">What you are looking for doesn't seem to exist.</p>
            <Link to="/"><button class="btn btn-primary">Go home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
