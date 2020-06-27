import QuestionRepository from './questionRepository'
import AuthRepository from './AuthRepository'
const repositories = {
    question: QuestionRepository,
    auth: AuthRepository,
}
export default {
    get(name) {
        return repositories[name]
    }
}
