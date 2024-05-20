const axios = require('axios');

async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`API_ENDPOINT/books/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBooksByTitle('BOOK_TITLE');
