import Gameboard, {getShipCells} from '../src/gameboard.js';

describe('Gameboard', () => {
  describe('getLastAttack', () => {
    test('is null before any attack', () => {
      expect(Gameboard().getLastAttack()).toBeNull();
    });

    test('reports a miss', () => {
      const board = Gameboard();
      board.receiveAttack(4, 4);
      expect(board.getLastAttack()).toEqual({
        x: 4,
        y: 4,
        result: 'miss',
        shipName: null,
        sunk: false,
      });
    });

    test('reports a hit that does not sink the ship', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal', 'Destroyer');
      board.receiveAttack(0, 0);
      expect(board.getLastAttack()).toEqual({
        x: 0,
        y: 0,
        result: 'hit',
        shipName: 'Destroyer',
        sunk: false,
      });
    });

    test('reports the hit that sinks a ship', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal', 'Destroyer');
      board.receiveAttack(0, 0);
      board.receiveAttack(1, 0);
      expect(board.getLastAttack()).toEqual({
        x: 1,
        y: 0,
        result: 'hit',
        shipName: 'Destroyer',
        sunk: true,
      });
    });

    test('is cleared by reset', () => {
      const board = Gameboard();
      board.receiveAttack(1, 1);
      board.reset();
      expect(board.getLastAttack()).toBeNull();
    });
  });

  describe('sunk cells', () => {
    test('every cell of a sunk ship reports "sunk"', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      board.receiveAttack(0, 0);
      expect(board.getCellState(0, 0)).toBe('hit');
      board.receiveAttack(1, 0);
      expect(board.getCellState(0, 0)).toBe('sunk');
      expect(board.getCellState(1, 0)).toBe('sunk');
    });
  });

  describe('getShipPlacement', () => {
    test('describes where a square sits within its ship', () => {
      const board = Gameboard();
      board.placeShip(2, 3, 3, 'horizontal', 'Cruiser');
      expect(board.getShipPlacement(3, 3)).toEqual({
        name: 'Cruiser',
        length: 3,
        direction: 'horizontal',
        index: 1,
      });
    });

    test('returns null for water and for squares off the board', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      expect(board.getShipPlacement(5, 5)).toBeNull();
      expect(board.getShipPlacement(10, 0)).toBeNull();
    });
  });

  describe('getShipCells', () => {
    test('lists the cells of a horizontal ship', () => {
      expect(getShipCells(2, 3, 3, 'horizontal')).toEqual([
        [2, 3],
        [3, 3],
        [4, 3],
      ]);
    });

    test('lists the cells of a vertical ship', () => {
      expect(getShipCells(5, 1, 2, 'vertical')).toEqual([
        [5, 1],
        [5, 2],
      ]);
    });
  });

  describe('canPlaceShip', () => {
    test('returns true for an empty spot on the board', () => {
      expect(Gameboard().canPlaceShip(0, 0, 5, 'horizontal')).toBe(true);
    });

    test('returns false if the ship would go off the board', () => {
      const board = Gameboard();
      expect(board.canPlaceShip(8, 0, 3, 'horizontal')).toBe(false);
      expect(board.canPlaceShip(0, 8, 3, 'vertical')).toBe(false);
    });

    test('returns false if the ship would overlap another', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 3, 'horizontal');
      expect(board.canPlaceShip(1, 0, 2, 'vertical')).toBe(false);
    });

    test('does not change the board', () => {
      const board = Gameboard();
      board.canPlaceShip(0, 0, 3, 'horizontal');
      expect(board.getCellState(0, 0)).toBe('empty');
    });
  });

  describe('placeShipsRandomly', () => {
    function countShipCells(board) {
      let count = 0;
      for (let y = 0; y < 10; y += 1) {
        for (let x = 0; x < 10; x += 1) {
          if (board.getCellState(x, y) === 'ship') count += 1;
        }
      }
      return count;
    }

    test('places the full fleet without overlaps', () => {
      // Random, so repeat to make a lucky pass unlikely
      for (let i = 0; i < 50; i += 1) {
        const board = Gameboard();
        board.placeShipsRandomly();
        expect(countShipCells(board)).toBe(17); // 5 + 4 + 3 + 3 + 2
      }
    });

    test('accepts a custom list of ship lengths', () => {
      const board = Gameboard();
      board.placeShipsRandomly([{length: 2}, {length: 2}]);
      expect(countShipCells(board)).toBe(4);
    });

    test('replaces the previous placement instead of adding to it', () => {
      const board = Gameboard();
      board.placeShipsRandomly();
      board.placeShipsRandomly();
      expect(countShipCells(board)).toBe(17);
    });
  });

  describe('reset', () => {
    test('clears ships, misses, and attacks', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      board.receiveAttack(0, 0);
      board.receiveAttack(5, 5);
      board.reset();
      expect(board.getCellState(0, 0)).toBe('empty');
      expect(board.getMissedAttacks()).toEqual([]);
      expect(board.hasBeenAttacked(5, 5)).toBe(false);
      expect(board.allShipsSunk()).toBe(false);
    });
  });

  describe('getCellState', () => {
    test('reports empty, ship, hit and miss', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      board.receiveAttack(0, 0);
      board.receiveAttack(5, 5);
      expect(board.getCellState(0, 0)).toBe('hit');
      expect(board.getCellState(1, 0)).toBe('ship');
      expect(board.getCellState(5, 5)).toBe('miss');
      expect(board.getCellState(9, 9)).toBe('empty');
    });

    test('throws for coordinates off the board', () => {
      expect(() => Gameboard().getCellState(10, 0)).toThrow();
    });
  });

  describe('hasBeenAttacked', () => {
    test('reports whether a square has been attacked', () => {
      const board = Gameboard();
      board.receiveAttack(2, 2);
      expect(board.hasBeenAttacked(2, 2)).toBe(true);
      expect(board.hasBeenAttacked(3, 3)).toBe(false);
    });
  });
  describe('placeShip', () => {
    test('places a ship horizontally', () => {
      const board = Gameboard();
      board.placeShip(2, 3, 3, 'horizontal');
      expect(board.receiveAttack(2, 3)).toBe('hit');
      expect(board.receiveAttack(3, 3)).toBe('hit');
      expect(board.receiveAttack(4, 3)).toBe('hit');
    });

    test('places a ship vertically', () => {
      const board = Gameboard();
      board.placeShip(5, 1, 2, 'vertical');
      expect(board.receiveAttack(5, 1)).toBe('hit');
      expect(board.receiveAttack(5, 2)).toBe('hit');
    });

    test('throws if the ship would go off the board', () => {
      const board = Gameboard();
      expect(() => board.placeShip(8, 0, 3, 'horizontal')).toThrow();
      expect(() => board.placeShip(0, 8, 3, 'vertical')).toThrow();
    });

    test('throws if the starting coordinates are off the board', () => {
      const board = Gameboard();
      expect(() => board.placeShip(-1, 0, 2, 'horizontal')).toThrow();
      expect(() => board.placeShip(0, 10, 2, 'horizontal')).toThrow();
    });

    test('throws if ships would overlap', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 3, 'horizontal');
      expect(() => board.placeShip(1, 0, 2, 'vertical')).toThrow();
    });
  });

  describe('receiveAttack', () => {
    test('returns "miss" when no ship is at the coordinates', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      expect(board.receiveAttack(5, 5)).toBe('miss');
    });

    test('records missed attacks', () => {
      const board = Gameboard();
      board.receiveAttack(4, 4);
      board.receiveAttack(7, 2);
      expect(board.getMissedAttacks()).toEqual([
        [4, 4],
        [7, 2],
      ]);
    });

    test('does not record hits as misses', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      board.receiveAttack(0, 0);
      expect(board.getMissedAttacks()).toEqual([]);
    });

    test('throws if the same square is attacked twice', () => {
      const board = Gameboard();
      board.receiveAttack(3, 3);
      expect(() => board.receiveAttack(3, 3)).toThrow();
    });

    test('throws if the attack is off the board', () => {
      const board = Gameboard();
      expect(() => board.receiveAttack(10, 0)).toThrow();
      expect(() => board.receiveAttack(0, -1)).toThrow();
    });
  });

  describe('allShipsSunk', () => {
    test('returns false when there are no ships placed', () => {
      expect(Gameboard().allShipsSunk()).toBe(false);
    });

    test('returns false while any ship is still afloat', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      board.placeShip(0, 2, 2, 'horizontal');
      board.receiveAttack(0, 0);
      board.receiveAttack(1, 0);
      expect(board.allShipsSunk()).toBe(false);
    });

    test('returns true once every ship is sunk', () => {
      const board = Gameboard();
      board.placeShip(0, 0, 2, 'horizontal');
      board.placeShip(0, 2, 1, 'horizontal');
      board.receiveAttack(0, 0);
      board.receiveAttack(1, 0);
      board.receiveAttack(0, 2);
      expect(board.allShipsSunk()).toBe(true);
    });
  });
});