import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'1a7904ddf7d44c538010505c5f29c161'
    }
});

 