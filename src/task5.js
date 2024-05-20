const axios = require('axios');

async function getBookReview(isbn) {
    try {
        const response = await axios.get(`API_ENDPOINT/book/${isbn}/reviews`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getBookReview('SPECIFIC_ISBN');
// example of ibn 1738492847