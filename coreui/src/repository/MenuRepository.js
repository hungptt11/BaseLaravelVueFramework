import BaseRepository from "./BaseRepository";
class MenuRepository extends BaseRepository {
  getMenu() {
    return super.get("/api/menu");
  }
}
export default MenuRepository;
