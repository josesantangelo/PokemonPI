class PokemonItem {
  constructor(obj) {
    (this.name = obj.name),
      (this.types = obj.types.map((item) => {
        delete item.type.url;
        return item.type;
      }));
    this.id = obj.id;
    this.img =
      obj.sprites.other.dream_world.front_default ||
      obj.sprites.other.home.front_default;
    this.attack = obj.stats[1].base_stat;
  }
}
//
class PokemonDetail {
  constructor(obj) {
    (this.name = obj.name),
      (this.types = obj.types.map((item) => {
        delete item.type.url;
        return item.type;
      })),
      (this.id = obj.id),
      (this.img =
        obj.sprites.other.dream_world.front_default ||
        obj.sprites.other.home.front_default);
    (this.weight = obj.weight),
      (this.height = obj.height),
      (this.hp = obj.stats[0].base_stat);
    this.attack = obj.stats[1].base_stat;
    this.defense = obj.stats[2].base_stat;
    this.speed = obj.stats[5].base_stat;
  }
}

module.exports = {
  PokemonItem,
  PokemonDetail,
};
