// TODO: write your code here
import sum from './basic';
import Team from './team';
import Character from './character';

console.log('worked');
console.log(sum([1, 2]));

// Создание персонажей
const archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 60, 1, 30, 20);
const mage = new Character('Маг', 'Magician', 40, 1, 50, 5);

// Создание команды
const team = new Team([archer, swordsman, mage]);

// Использование итератора (for...of)
console.log('Team members:');
for (const character of team) {
  console.log(`${character.name} (${character.type}) - Атака: ${character.attack}`);
}

// Использование оператора spread
const allCharacters = [...team];
console.log(`Всего персонажей: ${allCharacters.length}`);
