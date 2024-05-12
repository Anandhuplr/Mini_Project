import axios from 'axios';

export async function get_profile(token) {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/users/me/',
            headers: { "Content-Type": "application/json", "Authorization": `token ${token}`, }
        });
        return {
            status: response.status,
            response: response.data
        }
    } catch(err) {
        return err;
    }
}