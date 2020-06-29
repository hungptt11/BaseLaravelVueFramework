import BaseRepository from "./BaseRepository";
class AuthRepository extends BaseRepository {
  login(body) {
    return super.post("/api/login", body);
  }
  logout() {
    return super.post("/api/logout", {});
  }
}
export default AuthRepository;
