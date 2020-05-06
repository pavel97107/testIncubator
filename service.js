'use strict';


const getImages = (page) => {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${page.value}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
};
