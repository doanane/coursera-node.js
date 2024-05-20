const axios = require('axios');

function searchByISBN(isbn) {
    return axios.get(`API_ENDPOINT/book/${isbn}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

searchByISBN('SPECIFIC_ISBN');
