const RefreshList = async (url) => {
  const recentList = document.querySelector('.recent-list');
  recentList.innerHTML = 'Preceding...';
  const response = await fetch(url);
  const json = await response.json();
  recentList.innerHTML = '';
  for (let i = 0; i < json.result.length; i += 1) {
    recentList.innerHTML += `
        <li>${json.result[i].user}: ${json.result[i].score}</li>
      `;
  }
};

const AddNewScore = async (url) => {
  const msg = document.getElementById('msg');
  msg.innerHTML = 'Preceding...';
  const myname = document.getElementById('name');
  const myscore = document.getElementById('score');

  if (myscore.value < 0 || myscore.value > 100) {
    msg.innerHTML = 'Score must be between 0 and 100.';
  } else {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: myname.value,
        score: myscore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    if (json.result === 'Leaderboard score created correctly.') {
      msg.innerHTML = json.result;
    } else {
      msg.innerHTML = json.message;
    }
    myname.value = '';
    myscore.value = '';
  }
};

export { AddNewScore, RefreshList };