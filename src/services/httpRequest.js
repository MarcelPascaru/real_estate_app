import axios from "axios";

const instance = {
    baseURL: 'http://localhost:8888'
};

const httpRequest = axios.create({
    baseURL: `${instance.baseURL}/api/frontend`,
    headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
    },
    timeout: 0,
});

const authInterceptor = (config) => {
    const token = JSON.parse(localStorage.getItem('accessToken'));
    if (token) {
        config.headers[
            "Authorization"
            ] = 'Bearer ' + token;
    }

    return config;
};

const responseInterceptor = (response) => {
    return response.data;
};

httpRequest.interceptors.request.use(authInterceptor);
httpRequest.interceptors.response.use(responseInterceptor);

export default httpRequest;