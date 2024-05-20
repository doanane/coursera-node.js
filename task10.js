const axios = require('axios');

async function getAllBooks(callback) {
    try {
        const response = await axios.get('API_ENDPOINT/book-list');
        callback(null, response.data);
    } catch (error) {
        callback(error);
    }
}

getAllBooks((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});
