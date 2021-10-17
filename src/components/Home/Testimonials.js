import React from "react";

function Testimonials() {
  return (
    <div
      id="testimonials"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5"
    >
      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>{" "}
        </figure>
        <div class="card-body">
          <h2 class="card-title">Garv Jain</h2>
          <p className="italic">
            I have been using GameZeo for over an year now and it has never
            failed to disappoint me with their services. It is truly the best
            gaming store!
          </p>
        </div>
      </div>
      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>{" "}
        </figure>
        <div class="card-body">
          <h2 class="card-title">Mehul Shrivastava</h2>
          <p className="italic">
            I have been using GameZeo for over an year now and it has never
            failed to disappoint me with their services. It is truly the best
            gaming store!
          </p>
        </div>
      </div>
      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>{" "}
        </figure>
        <div class="card-body">
          <h2 class="card-title">Saksham Raheja</h2>
          <p className="italic">
            I have been using GameZeo for over an year now and it has never
            failed to disappoint me with their services. It is truly the best
            gaming store!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
