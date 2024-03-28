import httpRequest from "./../httpRequest.js";

const login = (payload) => {
    return httpRequest.post('/login', payload);
}

const register = (payload) => {
    return httpRequest.post('/register', payload);
}

export {
    login,
    register,
}