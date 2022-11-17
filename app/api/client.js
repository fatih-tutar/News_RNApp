import axios from "axios";

export default axios.create({
    baseURL: 'http://192.168.28.50:3000/api'
});