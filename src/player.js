import Gameboard, { BOARD_SIZE } from './gameboard';

const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

export default function Player(type) {
  if (type !== 'real' && type !== 'computer') {
    throw new Error('Player type must be "real" or "computer"');
  }

  const gameboard = Gameboard();

  function isOnBoard(x, y) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
  }

  function isLegalTarget(enemyBoard, x, y) {
    return isOnBoard(x, y) && !enemyBoard.hasBeenAttacked(x, y);
  }

  // The computer may only know what a human attacker could see:
  // nothing at all about squares it hasn't shot yet.
  function knownState(enemyBoard, x, y) {
    if (!isOnBoard(x, y) || !enemyBoard.hasBeenAttacked(x, y)) {
      return 'unknown';
    }
    return enemyBoard.getCellState(x, y);
  }

  function pickRandomSquare(enemyBoard) {
    const available = [];
    for (let y = 0; y < BOARD_SIZE; y += 1) {
      for (let x = 0; x < BOARD_SIZE; x += 1) {
        if (!enemyBoard.hasBeenAttacked(x, y)) {
          available.push([x, y]);
        }
      }
    }
    return available[Math.floor(Math.random() * available.length)];
  }

  // Hits on ships that are still afloat
  function findHits(enemyBoard) {
    const hits = [];
    for (let y = 0; y < BOARD_SIZE; y += 1) {
      for (let x = 0; x < BOARD_SIZE; x += 1) {
        if (knownState(enemyBoard, x, y) === 'hit') {
          hits.push([x, y]);
        }
      }
    }
    return hits;
  }

  function pickHuntSquare(enemyBoard, hits) {
    const isHit = (x, y) => knownState(enemyBoard, x, y) === 'hit';
    const lineTargets = []; // squares that extend a row of 2+ hits
    const nearbyTargets = []; // any free square next to a hit

    hits.forEach(([x, y]) => {
      DIRECTIONS.forEach(([dx, dy]) => {
        const tx = x + dx;
        const ty = y + dy;
        if (!isLegalTarget(enemyBoard, tx, ty)) return;

        nearbyTargets.push([tx, ty]);
        // The square behind us is also a hit, so we're on a line
        if (isHit(x - dx, y - dy)) lineTargets.push([tx, ty]);
      });
    });

    const pool = lineTargets.length > 0 ? lineTargets : nearbyTargets;
    if (pool.length === 0) return pickRandomSquare(enemyBoard);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function pickSquare(enemyBoard) {
    const hits = findHits(enemyBoard);
    return hits.length > 0
      ? pickHuntSquare(enemyBoard, hits)
      : pickRandomSquare(enemyBoard);
  }

  function attack(enemyBoard, x, y) {
    if (type === 'computer') {
      const [targetX, targetY] = pickSquare(enemyBoard);
      return enemyBoard.receiveAttack(targetX, targetY);
    }
    return enemyBoard.receiveAttack(x, y);
  }

  return { type, gameboard, attack };
}