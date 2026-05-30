export default class Team {
  constructor(characters = []) {
    this.characters = characters;
  }

  *[Symbol.iterator]() {
    yield* this.characters;
  }
}
