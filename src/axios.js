import axios from "axios";

// this instance will replace global settings that are stated in index.js as the axios.default statements; all that are not mentioned in this new instance will remain as set global in axios.default...

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//we can change by the use of instance also defaults to custom:

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
