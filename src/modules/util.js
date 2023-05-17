const RefreshList = (myGameID) => {
  const recentList = document.querySelector('.recent-list');
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGameID}/scores/`)
    .then((response) => response.json())
    .then((json) => {
      recentList.innerHTML = '';
      for (let i = 0; i < json.result.length; i += 1) {
        recentList.innerHTML += `
      <li>${json.result[i].user}: ${json.result[i].score}</li>
      `;
      }
    });
};

const AddNewScore = (myGameID) => {
  const myname = document.getElementById('name');
  const myscore = document.getElementById('score');
  const msg = document.getElementById('msg');
  if (myscore.value < 0 || myscore.value > 100) {
    msg.innerHTML = 'Score must be between 0 and 100.';
  } else {
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: myname.value,
        score: myscore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.result === 'Leaderboard score created correctly.') {
          msg.innerHTML = json.result;
        } else {
          msg.innerHTML = json.message;
        }
      });
  }
  myname.value = '';
  myscore.value = '';
};

export { AddNewScore, RefreshList };