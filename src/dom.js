import { BOARD_SIZE } from './gameboard';

const COLUMN_LETTERS = 'ABCDEFGHIJ';

export function formatCoords(x, y) {
  return `${COLUMN_LETTERS[x]}${y + 1}`;
}

function createLabel(text, className) {
  const label = document.createElement('div');
  label.classList.add('label', className);
  label.textContent = text;
  label.setAttribute('aria-hidden', 'true');
  return label;
}

export function renderBoard(container, board, { showShips }) {
  container.replaceChildren();

  // Top row: an empty corner, then the column letters
  container.appendChild(createLabel('', 'corner'));
  for (let x = 0; x < BOARD_SIZE; x += 1) {
    container.appendChild(createLabel(COLUMN_LETTERS[x], 'col-label'));
  }

  for (let y = 0; y < BOARD_SIZE; y += 1) {
    // Each row starts with its number, then the 10 cells
    container.appendChild(createLabel(y + 1, 'row-label'));

    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const cell = document.createElement('div');
      const state = board.getCellState(x, y);

      // Hide enemy ships until they've been hit
      const visible = state === 'ship' && !showShips ? 'empty' : state;
      cell.classList.add('cell', visible);
      cell.dataset.x = x;
      cell.dataset.y = y;

      // Draw the full hull only where the whole ship is meant to be visible:
      // your own ships, and enemy ships that have been sunk. A plain hit on an
      // enemy ship stays a neutral marker so it can't reveal the ship's direction.
      const isShipCell = ['ship', 'hit', 'sunk'].includes(state);
      if (isShipCell && (showShips || state === 'sunk')) {
        const { direction, index, length } = board.getShipPlacement(x, y);
        cell.classList.add('hull', direction);
        if (index === 0) cell.classList.add('bow');
        if (index === length - 1) cell.classList.add('stern');
      }

      container.appendChild(cell);
    }
  }
}

export function setMessage(text) {
  document.querySelector('#message').textContent = text;
}

export function renderDock(container, dock, direction) {
  container.replaceChildren();

  dock.forEach(({ id, name, length }) => {
    const shipEl = document.createElement('div');
    shipEl.classList.add('dock-ship', direction);
    shipEl.draggable = true;
    shipEl.dataset.id = id;
    shipEl.title = name;

    for (let i = 0; i < length; i += 1) {
      const segment = document.createElement('div');
      segment.classList.add('dock-segment');
      shipEl.appendChild(segment);
    }
    container.appendChild(shipEl);
  });
}

export function setStartEnabled(enabled) {
  document.querySelector('#start').disabled = !enabled;
}

export function clearPlacementPreview(container) {
  container
    .querySelectorAll('.preview-valid, .preview-invalid')
    .forEach((cell) => cell.classList.remove('preview-valid', 'preview-invalid'));
}

export function showPlacementPreview(container, cells, valid) {
  clearPlacementPreview(container);
  cells.forEach(([x, y]) => {
    const cell = container.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (cell) {
      cell.classList.add(valid ? 'preview-valid' : 'preview-invalid');
    }
  });
}

export function setStartLabel(text) {
  document.querySelector('#start').textContent = text;
}

export function setBoardTitles(ownTitle, enemyTitle) {
  document.querySelector('#player-title').textContent = ownTitle;
  document.querySelector('#enemy-title').textContent = enemyTitle;
}

export function setPassScreen(title, buttonText) {
  document.querySelector('#pass-title').textContent = title;
  document.querySelector('#pass-ready').textContent = buttonText;
}

const ALL_SECTIONS = [
  'menu',
  'pass-screen',
  'placement-panel',
  'game-area',
  'enemy-section',
  'end-turn',
];

const VIEWS = {
  menu: ['menu'],
  pass: ['pass-screen'],
  placement: ['placement-panel', 'game-area'],
  battle: ['game-area', 'enemy-section'],
};

export function showView(view, { endTurn = false } = {}) {
  const visible = new Set(VIEWS[view]);
  if (endTurn) visible.add('end-turn');

  ALL_SECTIONS.forEach((id) => {
    document.querySelector(`#${id}`).hidden = !visible.has(id);
  });
}