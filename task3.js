const axios = require('axios');

async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`API_ENDPOINT/books/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBooksByAuthor('AUTHOR_NAME');