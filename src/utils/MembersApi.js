import {URL} from "./constants";
export const getMembers = () => {
    return fetch(`${URL}/api/members`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при получении данных');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
            throw error;
        });
};