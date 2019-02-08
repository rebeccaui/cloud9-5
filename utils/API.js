import axios from "axios";

export default {
  // Gets today's weather based on zip code
  // If country is not specified then the search works for USA as a default.
  getToday: function(zipcode) {
    return axios.get("/api/today" + zipcode);
  },
  // Gets the 5-day forecast
  getForecast: function(id) {
    return axios.get("/api/forecast/" + id);
  },
  // Gets the radar map
  getRadar: function(id) {
    return axios.get("/api/radar/" + id);
  }
};
