const axios = require('axios');

async function getBookList() {
    try {
        const response = await axios.get('API_ENDPOINT/book-list');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBookList();
