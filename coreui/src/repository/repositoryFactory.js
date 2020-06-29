import AuthRepository from './AuthRepository'
import MenuRepository from './MenuRepository'
const repositories = {
    auth: AuthRepository,
    menu: MenuRepository
}
export default {
    get(name) {
        return new repositories[name]();
    }
}
