import axios from 'axios';

const instance = axios.create({
    baseURL: "https://udemy-burgerbuilder.firebaseio.com/"
})

export default instance;