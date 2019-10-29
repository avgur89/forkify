import axios from 'axios';
import { API_KEY, BASE_URL, PROXY_URL } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${PROXY_URL}${BASE_URL}/search?key=${API_KEY}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            throw new Error(error);
        }
    }
}
