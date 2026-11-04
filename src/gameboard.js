import Ship from './ship';

export const BOARD_SIZE = 10;

export const FLEET = [
  { name: 'Carrier', length: 5 },
  { name: 'Battleship', length: 4 },
  { name: 'Cruiser', length: 3 },
  { name: 'Submarine', length: 3 },
  { name: 'Destroyer', length: 2 },
];

export function getShipCells(x, y, length, direction) {
  const dx = direction === 'horizontal' ? 1 : 0;
  const dy = direction === 'vertical' ? 1 : 0;
  return Array.from({ length }, (_, i) => [x + dx * i, y + dy * i]);
}

export default function Gameboard() {
  const ships = [];
  const placements = new Map(); // ship -> { direction, cells }
  const grid = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(null)
  );
  const missedAttacks = [];
  const attacked = new Set();
  let lastAttack = null;

  function isOnBoard(x, y) {
    return (
      Number.isInteger(x) &&
      Number.isInteger(y) &&
      x >= 0 &&
      x < BOARD_SIZE &&
      y >= 0 &&
      y < BOARD_SIZE
    );
  }

  function canPlaceShip(x, y, length, direction) {
    return getShipCells(x, y, length, direction).every(
      ([cx, cy]) => isOnBoard(cx, cy) && grid[cy][cx] === null
    );
  }

  function placeShip(x, y, length, direction, name) {
    if (!canPlaceShip(x, y, length, direction)) {
      throw new Error('Ship cannot be placed there');
    }

    const ship = Ship(length, name);
    const cells = getShipCells(x, y, length, direction);
    cells.forEach(([cx, cy]) => {
      grid[cy][cx] = ship;
    });
    ships.push(ship);
    placements.set(ship, { direction, cells });
  }

  function reset() {
    grid.forEach((row) => row.fill(null));
    ships.length = 0;
    placements.clear();
    missedAttacks.length = 0;
    attacked.clear();
    lastAttack = null;
  }

  function placeShipsRandomly(fleet = FLEET) {
    reset();
    fleet.forEach(({ name, length }) => {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * BOARD_SIZE);
        const y = Math.floor(Math.random() * BOARD_SIZE);
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        try {
          placeShip(x, y, length, direction, name);
          placed = true;
        } catch (error) {
          // Invalid spot (off the board or overlapping): pick another
        }
      }
    });
  }

  function receiveAttack(x, y) {
    if (!isOnBoard(x, y)) {
      throw new Error('Attack must be within the board');
    }
    const key = `${x},${y}`;
    if (attacked.has(key)) {
      throw new Error('Square has already been attacked');
    }
    attacked.add(key);

    const ship = grid[y][x];
    if (ship) {
      ship.hit();
      lastAttack = {
        x,
        y,
        result: 'hit',
        shipName: ship.name,
        sunk: ship.isSunk(),
      };
      return 'hit';
    }
    missedAttacks.push([x, y]);
    lastAttack = { x, y, result: 'miss', shipName: null, sunk: false };
    return 'miss';
  }

  function getLastAttack() {
    return lastAttack ? { ...lastAttack } : null;
  }

  function getMissedAttacks() {
    return missedAttacks.map((coords) => [...coords]);
  }

  function hasBeenAttacked(x, y) {
    return attacked.has(`${x},${y}`);
  }

  function getCellState(x, y) {
    if (!isOnBoard(x, y)) {
      throw new Error('Coordinates must be within the board');
    }
    const ship = grid[y][x];
    if (attacked.has(`${x},${y}`)) {
      if (!ship) return 'miss';
      return ship.isSunk() ? 'sunk' : 'hit';
    }
    return ship ? 'ship' : 'empty';
  }

  // Reveals where a ship is, so callers should only use it for squares
  // they are allowed to show.
  function getShipPlacement(x, y) {
    if (!isOnBoard(x, y) || grid[y][x] === null) return null;
    const ship = grid[y][x];
    const { direction, cells } = placements.get(ship);
    const index = cells.findIndex(([cx, cy]) => cx === x && cy === y);
    return { name: ship.name, length: ship.length, direction, index };
  }

  function allShipsSunk() {
    return ships.length > 0 && ships.every((ship) => ship.isSunk());
  }

  return {
    placeShip,
    canPlaceShip,
    placeShipsRandomly,
    reset,
    receiveAttack,
    getLastAttack,
    getMissedAttacks,
    hasBeenAttacked,
    getCellState,
    getShipPlacement,
    allShipsSunk,
  };
}