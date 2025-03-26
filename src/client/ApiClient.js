import axios from "axios";

const ApiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {        
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8"
    },
})

function getAuthToken() {
    return localStorage.getItem("token");
}

ApiClient.interceptors.request.use(config => {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

export default ApiClient;