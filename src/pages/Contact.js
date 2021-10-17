import React, { useState } from "react";
import Alert from "../components/Alert";

function Contact() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const handleSubmit = (e) => {
    showAlert("Your response has been recorded.");
  };
  return (
    <div class="flex justify-center items-center pt-12 h-screen mx-auto bg-gray-100">
      <form class="w-full md:w-3/4 lg:w-3/6 p-4" onReset={handleSubmit}>
        <h1 class="mb-5 text-5xl font-bold text-center">Contact Us</h1>
        <Alert alert={alert} />
        <div class="p-3">
          <input
            class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div class="p-3">
          <input
            class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="p-3">
          <input
            class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            type="number"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div class="p-3">
          <textarea
            class="border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div class="p-3 pt-4">
          <button
            type="reset"
            class="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
