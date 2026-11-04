import Player from '../src/player.js';
import Gameboard from '../src/gameboard.js';

describe('Player', () => {
  test('stores its type', () => {
    expect(Player('real').type).toBe('real');
    expect(Player('computer').type).toBe('computer');
  });

  test('throws on an unknown type', () => {
    expect(() => Player('alien')).toThrow();
  });

  test('each player has its own gameboard', () => {
    const p1 = Player('real');
    const p2 = Player('computer');
    p1.gameboard.placeShip(0, 0, 2, 'horizontal');
    expect(p1.gameboard).not.toBe(p2.gameboard);
    expect(p2.gameboard.receiveAttack(0, 0)).toBe('miss');
  });

  describe('real player attack', () => {
    test('attacks the given coordinates on the enemy board', () => {
      const player = Player('real');
      const enemy = Gameboard();
      enemy.placeShip(4, 4, 1, 'horizontal');
      expect(player.attack(enemy, 4, 4)).toBe('hit');
      expect(enemy.hasBeenAttacked(4, 4)).toBe(true);
    });
  });

  describe('computer player attack', () => {
    describe('after a hit', () => {
      afterEach(() => {
        jest.restoreAllMocks();
      });

      // Forces the random fallback to pick the square at (x, y)
      function mockRandomPick(x, y) {
        const index = y * 10 + x;
        jest.spyOn(Math, 'random').mockReturnValue((index + 0.5) / 100);
      }

      test('targets a square adjacent to the hit', () => {
        const computer = Player('computer');
        const enemy = Gameboard();
        enemy.placeShip(0, 0, 2, 'horizontal');
        mockRandomPick(0, 0); // first shot is a guaranteed hit

        computer.attack(enemy);
        computer.attack(enemy);

        const adjacentAttacked =
          enemy.hasBeenAttacked(1, 0) || enemy.hasBeenAttacked(0, 1);
        expect(adjacentAttacked).toBe(true);
      });

      test('sinks a ship quickly once it has found it', () => {
        const computer = Player('computer');
        const enemy = Gameboard();
        enemy.placeShip(4, 4, 3, 'horizontal');
        mockRandomPick(5, 4); // first shot hits the middle of the ship

        // 1 hit + at most 7 follow-ups, with no further random guessing
        for (let i = 0; i < 8; i += 1) {
          computer.attack(enemy);
        }
        expect(enemy.allShipsSunk()).toBe(true);
      });

      test('follows the line once it has two hits in a row', () => {
        const computer = Player('computer');
        const enemy = Gameboard();
        enemy.placeShip(2, 5, 4, 'horizontal'); // squares (2..5, 5)
        enemy.receiveAttack(3, 5);
        enemy.receiveAttack(4, 5);

        computer.attack(enemy);

        const extendedLine =
          enemy.hasBeenAttacked(2, 5) || enemy.hasBeenAttacked(5, 5);
        expect(extendedLine).toBe(true);
      });

      test('goes back to searching once the ship is sunk', () => {
        const computer = Player('computer');
        const enemy = Gameboard();
        enemy.placeShip(4, 4, 2, 'horizontal');
        mockRandomPick(4, 4); // first shot hits

        // At most 1 hit + 3 wrong neighbors + 1 hit = 5 shots to sink it
        for (let i = 0; i < 5 && !enemy.allShipsSunk(); i += 1) {
          computer.attack(enemy);
        }
        expect(enemy.allShipsSunk()).toBe(true);

        // Searching again: with random forced to 0, the first free square is (0, 0)
        Math.random.mockReturnValue(0);
        computer.attack(enemy);
        expect(enemy.hasBeenAttacked(0, 0)).toBe(true);
      });
    });

    test('attacks a square on the enemy board', () => {
      const computer = Player('computer');
      const enemy = Gameboard();
      computer.attack(enemy);
      let attackedCount = 0;
      for (let y = 0; y < 10; y += 1) {
        for (let x = 0; x < 10; x += 1) {
          if (enemy.hasBeenAttacked(x, y)) attackedCount += 1;
        }
      }
      expect(attackedCount).toBe(1);
    });

    test('never attacks the same square twice', () => {
      const computer = Player('computer');
      const enemy = Gameboard();
      // 100 squares, 100 attacks: would throw on any repeat
      for (let i = 0; i < 100; i += 1) {
        expect(() => computer.attack(enemy)).not.toThrow();
      }
    });
  });
});