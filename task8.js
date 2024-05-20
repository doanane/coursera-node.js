const axios = require('axios');

async function addOrModifyReview(isbn, review) {
    try {
        const response = await axios.post(`API_ENDPOINT/book/${isbn}/review`, review);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

addOrModifyReview('SPECIFIC_ISBN', {
    rating: 5,
    comment: 'Excellent book!'
});
