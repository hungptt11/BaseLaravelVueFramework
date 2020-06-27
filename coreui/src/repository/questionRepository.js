import client from '../helper/client'

const urlCreateQuestion = '/api/questions/create'
const urlGetList = '/api/questions'
export default {
    createQuestion(body) {
        return client.post(urlCreateQuestion,body);
    },
    getList(params) {
        return client.get(urlGetList,params);
    },
    deleteQuestion(id) {
        return client.delete(urlGetList, { data: { id: id }})
    }
}