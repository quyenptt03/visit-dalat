import axios from "axios";

export const URL = "http://localhost:5000/api/v1";

export const fetchDestinations = () => axios.get(`${URL}/destinations`);
