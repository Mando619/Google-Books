import axios from 'axios';

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
const APIKEY = "AIzaSyBTYxR47Xesf77lV_jwX9Eot-67zp06jbI";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
}