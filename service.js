'use strict';


const getImages = (page) => {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${page.value}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
};


const getTasks = () => {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=11117`);
    return promise.then((response) => {
        return response.data;
    });
};

const createTasks = (title) => {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 11117,
        title: title
    });
    return promise.then((response) => {
        return response.data;
    });

};

const updateTasks = (title, id) => {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 11116,
        title: title,
        taskId: id
    });
    return promise.then((response) => {
        return response.data;
    });
};

const deleteTasks = (id) => {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=11116&taskId=${id}`);
    return promise.then((response) => {
        return response.data;
    });
};

