import axios from "axios";

export default axios.create({
  baseURL: "https://cloud-services-backend.azurewebsites.net",
});
