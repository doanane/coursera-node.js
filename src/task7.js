const axios = require('axios');

async function loginUser(credentials) {
    try {
        const response = await axios.post('API_ENDPOINT/login', credentials);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

loginUser({
    username: 'registereduser',
    password: 'password123'
});
