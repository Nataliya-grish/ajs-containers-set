export default class Character {
  constructor(name, type) {
    if (name.length > 10 || name.length < 2) {
      throw new Error("Ошибка. Имя не может быть короче 2 символов и длиннее 10");
    }
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (types.indexOf(type) === -1) {
      throw new Error("Ошибка. Такого персонажа нет.");
    }
    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
