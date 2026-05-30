import Team from '../team';
import Character from '../character';

describe('Team generator', () => {
  let team;
  let characters;

  beforeEach(() => {
    characters = [
      new Character('Лучник', 'Bowman', 50, 1, 40, 10),
      new Character('Мечник', 'Swordsman', 60, 1, 30, 20),
    ];
    team = new Team(characters);
  });

  test('should be iterable with for...of using generator', () => {
    const names = [];
    for (const char of team) {
      names.push(char.name);
    }
    expect(names).toEqual(['Лучник', 'Мечник']);
  });

  test('should work with spread operator', () => {
    const result = [...team];
    expect(result).toHaveLength(2);
    expect(result[0].type).toBe('Bowman');
  });

  test('should handle empty team', () => {
    const emptyTeam = new Team();
    expect([...emptyTeam]).toEqual([]);
  });
});
