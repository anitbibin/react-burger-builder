import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-8d271.firebaseio.com/"
});

export default instance;