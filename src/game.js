import Player from './player';
import { FLEET, getShipCells } from './gameboard';
import {
  renderBoard,
  renderDock,
  setMessage,
  setStartEnabled,
  setStartLabel,
  setBoardTitles,
  setPassScreen,
  showView,
  showPlacementPreview,
  clearPlacementPreview,
  formatCoords,
} from './dom';

const READY_PROMPT =
  'Fleet ready! Confirm with the button below, or Reset to rearrange.';

export default function initGame() {
  let mode; // 'single' | 'two'
  let players; // [player1, player2]
  let names;
  let phase; // 'menu' | 'placement' | 'battle' | 'over'
  let current; // index of the player whose screen is showing
  let locked; // true once the active player has attacked this turn
  let computerTimeout;
  let afterPass = null; // what to do when the next player is ready
  let lastShot = ''; // text describing the most recent attack
  let dock = [];
  let direction = 'horizontal';
  let draggedShip = null;

  const playerBoardEl = document.querySelector('#player-board');
  const enemyBoardEl = document.querySelector('#enemy-board');
  const dockEl = document.querySelector('#dock');
  const singleBtn = document.querySelector('#play-single');
  const twoBtn = document.querySelector('#play-two');
  const passReadyBtn = document.querySelector('#pass-ready');
  const rotateBtn = document.querySelector('#rotate');
  const randomizeBtn = document.querySelector('#randomize');
  const resetBtn = document.querySelector('#reset');
  const startBtn = document.querySelector('#start');
  const endTurnBtn = document.querySelector('#end-turn');
  const newGameBtn = document.querySelector('#new-game');

  const activePlayer = () => players[current];
  const opponent = () => players[1 - current];

  // --- Rendering and text ---

  function render() {
    renderBoard(playerBoardEl, activePlayer().gameboard, { showShips: true });
    renderBoard(enemyBoardEl, opponent().gameboard, {
      showShips: phase === 'over', // reveal the enemy fleet at the end
    });
    enemyBoardEl.classList.toggle('active', phase === 'battle' && !locked);

    if (mode === 'single') {
      setBoardTitles('Your fleet', 'Enemy waters');
    } else {
      setBoardTitles(
        `${names[current]}'s fleet`,
        `${names[1 - current]}'s waters`
      );
    }
  }

  function renderDockArea() {
    renderDock(dockEl, dock, direction);
    setStartEnabled(dock.length === 0);
  }

  function placementPrompt() {
    return mode === 'single'
      ? 'Drag your ships onto your board, then start the game.'
      : `${names[current]}, drag your ships onto your board.`;
  }

  function startLabel() {
    if (mode === 'single') return 'Start game';
    return current === 0 ? `Done: pass to ${names[1]}` : 'Start battle';
  }

  function turnPrompt() {
    return mode === 'single'
      ? 'Your turn: click a square on the enemy board.'
      : `${names[current]}, click a square on ${names[1 - current]}'s board.`;
  }

  // What just happened, followed by what to do next
  function turnMessage() {
    return [lastShot, turnPrompt()].filter(Boolean).join(' ');
  }

  function shipOwner(attacker) {
    if (mode === 'two') return `${names[1 - attacker]}'s`;
    return attacker === 0 ? 'the enemy' : 'your';
  }

  function describeShot(attacker) {
    const report = players[1 - attacker].gameboard.getLastAttack();
    const spot = formatCoords(report.x, report.y);
    const shooter = names[attacker];

    if (report.sunk) {
      const ship = report.shipName.toLowerCase();
      return `${shooter} sank ${shipOwner(attacker)} ${ship} at ${spot}!`;
    }
    return `${shooter} fired at ${spot}: ${
      report.result === 'hit' ? 'hit!' : 'miss.'
    }`;
  }

  function resetDock() {
    dock = FLEET.map((ship, id) => ({ id, ...ship }));
  }

  function getCoords(event) {
    const cell = event.target.closest('.cell');
    if (!cell) return null;
    return { x: Number(cell.dataset.x), y: Number(cell.dataset.y) };
  }

  // --- Flow: menu, pass screen, placement, battle ---

  function passTo(index, callback) {
    setMessage('');
    setPassScreen(
      `Pass the device to ${names[index]}`,
      `I'm ${names[index]}: show my board`
    );
    showView('pass');
    afterPass = callback;
  }

  function showMenu() {
    clearTimeout(computerTimeout);
    afterPass = null;
    phase = 'menu';
    showView('menu');
    setMessage('Choose a game mode.');
  }

  function beginPlacement(index) {
    phase = 'placement';
    current = index;
    locked = false;
    resetDock();
    direction = 'horizontal';
    draggedShip = null;
    showView('placement');
    setStartLabel(startLabel());
    render();
    renderDockArea();
    setMessage(placementPrompt());
  }

  function beginBattle() {
    phase = 'battle';
    current = 0;
    locked = false;
    lastShot = '';
    showView('battle');
    render();
    setMessage(turnMessage());
  }

  function startGame(selectedMode) {
    mode = selectedMode;
    players = [Player('real'), Player(mode === 'single' ? 'computer' : 'real')];
    names = mode === 'single' ? ['You', 'Computer'] : ['Player 1', 'Player 2'];
    lastShot = '';
    if (mode === 'single') players[1].gameboard.placeShipsRandomly();
    beginPlacement(0);
  }

  function checkGameOver(attacker) {
    if (!players[1 - attacker].gameboard.allShipsSunk()) return false;

    phase = 'over';
    showView('battle');
    render();

    let outcome;
    if (mode === 'single') {
      outcome =
        attacker === 0
          ? 'You win! All enemy ships have been sunk.'
          : 'You lose. The computer sank your fleet.';
    } else {
      outcome = `${names[attacker]} wins! Every ship of ${names[1 - attacker]} has been sunk.`;
    }
    setMessage(`${lastShot} ${outcome}`);
    return true;
  }

  function computerTurn() {
    players[1].attack(players[0].gameboard);
    lastShot = describeShot(1);
    if (checkGameOver(1)) return;
    locked = false;
    render();
    setMessage(turnMessage());
  }

  function handleEnemyBoardClick(event) {
    const coords = getCoords(event);
    if (!coords || phase !== 'battle' || locked) return;

    const { x, y } = coords;
    if (opponent().gameboard.hasBeenAttacked(x, y)) return;

    activePlayer().attack(opponent().gameboard, x, y);
    locked = true;
    lastShot = describeShot(current);
    if (checkGameOver(current)) return;
    render();

    if (mode === 'single') {
      setMessage(`${lastShot} Computer is aiming...`);
      computerTimeout = setTimeout(computerTurn, 600);
    } else {
      setMessage(`${lastShot} Press End turn when you're done.`);
      showView('battle', { endTurn: true });
    }
  }

  // --- Drag and drop ---

  function handleDragStart(event) {
    const shipEl = event.target.closest('.dock-ship');
    if (!shipEl) return;
    draggedShip = dock.find((ship) => ship.id === Number(shipEl.dataset.id));
    event.dataTransfer.setData('text/plain', shipEl.dataset.id);
    event.dataTransfer.effectAllowed = 'move';
  }

  function handleDragEnd() {
    draggedShip = null;
    clearPlacementPreview(playerBoardEl);
  }

  function handleBoardDragOver(event) {
    const coords = getCoords(event);
    if (!draggedShip || !coords) return;

    const { x, y } = coords;
    const { length } = draggedShip;
    const valid = activePlayer().gameboard.canPlaceShip(x, y, length, direction);

    showPlacementPreview(
      playerBoardEl,
      getShipCells(x, y, length, direction),
      valid
    );
    if (valid) event.preventDefault();
  }

  function handleBoardDragLeave(event) {
    if (!playerBoardEl.contains(event.relatedTarget)) {
      clearPlacementPreview(playerBoardEl);
    }
  }

  function handleBoardDrop(event) {
    event.preventDefault();
    const coords = getCoords(event);
    if (!draggedShip || !coords) return;

    const { x, y } = coords;
    const { id, name, length } = draggedShip;
    if (!activePlayer().gameboard.canPlaceShip(x, y, length, direction)) return;

    activePlayer().gameboard.placeShip(x, y, length, direction, name);
    dock = dock.filter((ship) => ship.id !== id);
    draggedShip = null;

    render();
    renderDockArea();
    setMessage(dock.length === 0 ? READY_PROMPT : placementPrompt());
  }

  dockEl.addEventListener('dragstart', handleDragStart);
  dockEl.addEventListener('dragend', handleDragEnd);
  playerBoardEl.addEventListener('dragover', handleBoardDragOver);
  playerBoardEl.addEventListener('dragleave', handleBoardDragLeave);
  playerBoardEl.addEventListener('drop', handleBoardDrop);

  // --- Buttons ---

  singleBtn.addEventListener('click', () => startGame('single'));
  twoBtn.addEventListener('click', () => startGame('two'));

  passReadyBtn.addEventListener('click', () => {
    if (!afterPass) return;
    const callback = afterPass;
    afterPass = null;
    callback();
  });

  rotateBtn.addEventListener('click', () => {
    direction = direction === 'horizontal' ? 'vertical' : 'horizontal';
    renderDockArea();
  });

  randomizeBtn.addEventListener('click', () => {
    if (phase !== 'placement') return;
    activePlayer().gameboard.placeShipsRandomly();
    dock = [];
    render();
    renderDockArea();
    setMessage(READY_PROMPT);
  });

  resetBtn.addEventListener('click', () => {
    if (phase !== 'placement') return;
    activePlayer().gameboard.reset();
    resetDock();
    render();
    renderDockArea();
    setMessage(placementPrompt());
  });

  startBtn.addEventListener('click', () => {
    if (phase !== 'placement' || dock.length > 0) return;

    if (mode === 'single') {
      beginBattle();
    } else if (current === 0) {
      passTo(1, () => beginPlacement(1));
    } else {
      passTo(0, beginBattle);
    }
  });

  endTurnBtn.addEventListener('click', () => {
    if (phase !== 'battle' || mode !== 'two' || !locked) return;

    const next = 1 - current;
    passTo(next, () => {
      current = next;
      locked = false;
      showView('battle');
      render();
      setMessage(turnMessage());
    });
  });

  newGameBtn.addEventListener('click', showMenu);
  enemyBoardEl.addEventListener('click', handleEnemyBoardClick);

  showMenu();
}