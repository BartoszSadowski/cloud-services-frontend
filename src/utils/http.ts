import axios from "axios";

export default axios.create({
  baseURL: "https://cloud-service-backend.azurewebsites.net",
});
