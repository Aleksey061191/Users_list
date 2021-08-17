import axios from 'axios';

const createApiService = () => axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000
});

export const ApiService = createApiService();