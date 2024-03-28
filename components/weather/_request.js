import axios from "axios";
import { API_KEY, API_URL } from "@env"


export const getWeatherCity = async (q) => {
    const api = `${API_URL}?key=${API_KEY}&q=${q}&aqi=no`
    return axios.get(api)
}