import httpRequest from "@/services/httpRequest.js";

const readAll = () => {
    return httpRequest.get('real-estates');
}

export {
    readAll
}