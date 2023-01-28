import Team from "../team";
import Character from "../character";

test("checking the method addAll", () => {
  const hero1 = new Character("Vasya", "Undead");
  const hero2 = new Character("Vasya", "Zombie");
  const hero3 = new Character("Vasya", "Zombie");
  const team = new Team();
  team.addAll(hero1, hero2, hero3);
  expect(team.members).toContain(hero1, hero2);
});

test("checking the method add", () => {
  const hero1 = new Character("Vasya", "Undead");
  const hero2 = new Character("Vasya", "Zombie");
  const team = new Team();
  team.add(hero1);
  team.add(hero2);
  expect(team.members).toContain(hero1, hero2);
});

test("checking the method add for an ERROR", () => {
  expect(() => {
    const hero1 = new Character("Vasya", "Undead");
    const team = new Team();
    team.add(hero1);
    team.add(hero1);
  }).toThrow("Такой персонаж уже есть в игре");
});

test("checking the method toArray", () => {
  const hero1 = new Character("Vasya", "Undead");
  const hero2 = new Character("Vasya", "Zombie");
  const team = new Team();
  team.addAll(hero1, hero2);
  expect(team.toArray()).toEqual([hero1, hero2]);
});
