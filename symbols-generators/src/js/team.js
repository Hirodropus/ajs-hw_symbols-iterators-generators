export default class Team {
  constructor(characters = []) {
    this.characters = characters;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.characters.length; i++) {
      yield this.characters[i];
    }
  }
}
