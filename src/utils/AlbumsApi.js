import {URL} from './constants';

export const getAlbums = () => {
    return fetch(`${URL}/api/albums`)
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
}

export const getAlbumById = (id) => {
    return fetch(`${URL}/api/albums/${id}`)
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
}