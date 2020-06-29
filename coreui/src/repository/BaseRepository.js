import client from '../helper/client'
import store from '../store'
class BaseRepository {
    post(url, body) {
        store.dispatch("enableLoadingIndicator");
        return client.post(url,body);
    }
    get(url) {
        //store.dispatch("enableLoadingIndicator");
        return client.get(url);
    }
}
export default BaseRepository