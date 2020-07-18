import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

//axios offers to set global url (by the use of axios.default function), and then to use only /smthng... instead of writing the whole link address, have a look:

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// this lile was also moved to axios.js - a file that I made to have different global URLs settings inside application, not just one; look into that file! that can be used across files and modify global settings of URLs

//also we can set a common headers, that will be used around whole application and set only on this one place; good and powerful feature... just for example:

axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

//axios package has a global fuinctions above https requests and responds, here, how to connect them globally above whole app:
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;

    //  always return request, otherwise you will disconnect all http requests
    // you can edit request config - that is the main idea behind interceptors
    // we can add also a second function, separated by comma after return,... that will handle all arrors have a look:
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
