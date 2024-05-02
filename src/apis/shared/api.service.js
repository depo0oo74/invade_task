// ** Import axios
import axios from "axios";

// ** Headers of Request
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
};

const APIService = {
    // ** Function for get request
    async get(URL) {
        return axios.get(URL, {headers})
    },
    // ** Function for post request
    async post(URL, data) {
        return axios.post(URL, data, {headers});
    },
    // ** Function for update request
    async put(URL, data) {
        return axios.put(URL, data, {headers});
    },
    // ** Function for delete request
    async delete(URL) {
        return axios.delete(URL, {headers});
    }
}

export default APIService;
