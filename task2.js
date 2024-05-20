const axios = require('axios');

async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`API_ENDPOINT/book/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBookByISBN('SPECIFIC_ISBN');
