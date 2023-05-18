import './style.css';
import { AddNewScore, RefreshList } from './modules/util.js';
import getGameID from './modules/game-id.js';

const asyncCall = async () => {
  const msg = document.getElementById('msg');
  msg.innerHTML = 'Creating Game...';
  const myGameID = await getGameID();
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGameID}/scores/`;
  msg.innerHTML = '';

  document.getElementById('score-form').addEventListener('submit', (e) => {
    e.preventDefault();
    AddNewScore(url);
  });

  document.getElementById('refresh').addEventListener('click', () => {
    RefreshList(url);
  });
};
asyncCall();