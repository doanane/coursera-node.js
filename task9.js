const axios = require('axios');

async function deleteReview(isbn, reviewId) {
    try {
        const response = await axios.delete(`API_ENDPOINT/book/${isbn}/review/${reviewId}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

deleteReview('SPECIFIC_ISBN', 'REVIEW_ID');
