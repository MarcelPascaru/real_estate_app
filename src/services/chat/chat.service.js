import httpRequest from "@/services/httpRequest.js";

const chat = (payload) => {
    return httpRequest.post('/chat', payload);
}

export {
    chat
}