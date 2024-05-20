const axios = require('axios');

async function searchByTitle(title) {
    try {
        const response = await axios.get(`API_ENDPOINT/books/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

searchByTitle('BOOK_TITLE');
