import axios from "axios";

const KEY = "AIzaSyDIKVYEMPwRPLXbISm7Ebzq3x5lEyULW8Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
