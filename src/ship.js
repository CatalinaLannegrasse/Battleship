export default function Ship(length, name = 'Ship') {
  let hits = 0;

  return {
    length,
    name,

    get hits() {
      return hits;
    },

    hit() {
      if (hits < length) {
        hits += 1;
      }
    },

    isSunk() {
      return hits >= length;
    },
  };
}