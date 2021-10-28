class PokemonItem {
  constructor(obj) {
    (this.name = obj.name),
      (this.types = obj.types.map((item) => item.type.name)),
      (this.id = obj.id),
      (this.img =
        obj.sprites.other.dream_world.front_default ||
        obj.sprites.other.home.front_default);
  }
}

class PokemonDetail {
  constructor(obj) {
    (this.name = obj.name),
      (this.types = obj.types),
      (this.id = obj.id),
      (this.img = obj.sprites.other),
      (this.weight = obj.weight),
      (this.height = obj.height),
      (this.stats = obj.stats);
  }
}

module.exports = {
  PokemonItem,
  PokemonDetail,
};
