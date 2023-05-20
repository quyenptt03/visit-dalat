import axios from "axios";

export const URL = "http://localhost:5000";

export const fetchDestinations = () => axios.get(`${URL}/api/v1/destinations`);
export const fetchFeaturedDestinations = () =>
  axios.get(`${URL}/api/v1/destinations/featured`);

export const fetchSingleDestination = (id: string) =>
  axios.get(`${URL}/api/v1/destinations/${id}`);
