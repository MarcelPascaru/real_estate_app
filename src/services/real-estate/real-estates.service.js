import httpRequest from "@/services/httpRequest.js";

const search = (payload) => {
    return httpRequest.post('real-estates/search', payload);
}

export {
    search
}