import axios from "axios";

export default axios.create({
  headers: {
    Authorization: "Client-ID peSsFg8fk5yye6VHOUvrTCHC5WIZLLPNfsqa5SKBlBw",
  },
  baseURL: "https://api.unsplash.com/",
});
