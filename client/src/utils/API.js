import axios from "axios";

export default {    
    search: function(title) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title);
    },
    return: function() {
        return axios.get('/api/books');
    },
    save: function(data) {
        return axios.put('/api/books', data);
    },
    delete: function(id) {
        return axios.delete('/api/books/' + id);
    }
};