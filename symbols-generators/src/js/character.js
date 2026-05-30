export default class Character {
  constructor(name, type, health = 100, level = 1, attack = 0, defence = 0) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
