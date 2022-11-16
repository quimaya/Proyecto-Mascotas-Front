import axios from "axios"

export const APIHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: {
        toString() {
            return `Bearer ${localStorage.getItem("token")}`;
        }
    }
}

export const API = axios.create ({
    baseURL: "http://localhost:8080/api/v1",
    baseURL: "http://18.159.246.168:8090/api/v1",
    timeout: 6000,
    headers: APIHeaders,
})

const baseURL = "http://18.159.246.168:8090/api/v1";

const http = (url, method, data) => {
    return axios({
        url,
        method,
        data,
    });
};

export const get = (url) => {
    return http(baseURL + url, 'GET', null);
};


