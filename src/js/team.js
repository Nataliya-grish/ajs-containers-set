export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error("Такой персонаж уже есть в игре");
    } else {
      this.members.add(hero);
    }
  }

  addAll(...allHeroes) {
    for (const key of allHeroes) {
      this.members.add(key);
    }
  }

  toArray() {
    return Array.from(this.members.values());
  }
}
