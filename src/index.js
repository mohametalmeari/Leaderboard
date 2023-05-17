import './style.css';
import { AddNewScore, RefreshList } from './modules/util.js';
import getGameID from './modules/game-id.js';

const myGameID = getGameID();

document.getElementById('score-form').addEventListener('submit', (e) => {
  e.preventDefault();
  AddNewScore(myGameID);
});

document.getElementById('refresh').addEventListener('click', () => {
  RefreshList(myGameID);
});
