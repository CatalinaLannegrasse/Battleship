import Ship from '../src/ship.js';

describe('Ship', () => {
  test('stores its length', () => {
    expect(Ship(3).length).toBe(3);
  });

  test('starts with zero hits', () => {
    expect(Ship(3).hits).toBe(0);
  });

  test('hit() increases the number of hits', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test('hits cannot exceed the ship length', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test('is not sunk when it has fewer hits than its length', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test('is sunk when hits equal its length', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('stores its name', () => {
    expect(Ship(3, 'Cruiser').name).toBe('Cruiser');
  });
});