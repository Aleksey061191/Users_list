import { ApiService } from "./ApiService";

export const UserApi = {
    getAll: () => ApiService.get('users'),
    getSearch: (name) => ApiService.get(`users?q=${name}`)
};