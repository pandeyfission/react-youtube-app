import axios from 'axios';
const KEY = 'AIzaSyCzUtDla-XR8-7AvyCM7UhTuIROcQfHS7A'



export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        part:'Snippet',
        maxResults: 3,
        key: KEY,
    },
});
