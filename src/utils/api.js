import axios from 'axios';

const BASEURL = 'http://localhost:3333/';

export const apiGet = (path) => {
    return axios.get(`${BASEURL}${path}`)
};