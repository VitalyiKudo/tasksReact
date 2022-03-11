import axios from 'axios';
import { root } from './confil';

export const api = Object.freeze({
    people: {
        fetch: () => {
           return axios.get(`${root}/people`);
        },
    },
    films: {
        fetch: () => {
           return axios.get(`${root}/films`);
        },
    },
});
