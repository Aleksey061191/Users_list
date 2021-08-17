import { ApiService } from "./ApiService";

export const UserApi = {
    getAll: () => ApiService.get(`users`),
    getSearch: (name) => ApiService.get(`/search/users/${name ? '&query=' + name: ''}`)
};