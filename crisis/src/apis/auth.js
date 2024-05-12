import axios from 'axios';

export async function userLogin(access_token) {
    try {
        console.log(access_token)
        const response = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/users/google/',
            headers: {"Content-Type": "application/json",
            "Cross-Origin-Opener-Policy":"same-origin"
            },
            data: {
                access_token:access_token,
                
            }
        });
        console.log(response)
        return {
            status: response.status,
            response:response.data,
        }
    } catch(err) {
        return err;
    }
}