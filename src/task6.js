const axios = require('axios');

async function registerUser(userDetails) {
    try {
        const response = await axios.post('API_ENDPOINT/register', userDetails);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

registerUser({
    username: 'newuser',
    password: 'password123',
    email: 'newuser@example.com'
});
