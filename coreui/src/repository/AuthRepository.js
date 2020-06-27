import client from '../helper/client'
const urlLogin = '/api/login'
export default {
    login(body) {
        return client.post(urlLogin,body);
    },
}