const RefreshList = (url) => {
  const getData = () => new Promise((resolve) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json));
  });

  const asyncCall = async () => {
    const recentList = document.querySelector('.recent-list');
    recentList.innerHTML = 'Preceding...';
    const json = await getData();
    recentList.innerHTML = '';
    for (let i = 0; i < json.result.length; i += 1) {
      recentList.innerHTML += `
    <li>${json.result[i].user}: ${json.result[i].score}</li>
    `;
    }
  };
  asyncCall();
};

const AddNewScore = (url) => {
  const msg = document.getElementById('msg');
  const sendData = () => new Promise((resolve) => {
    const myname = document.getElementById('name');
    const myscore = document.getElementById('score');
    if (myscore.value < 0 || myscore.value > 100) {
      msg.innerHTML = 'Score must be between 0 and 100.';
    } else {
      fetch(url, {
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
          resolve(json);
        });
    }
    myname.value = '';
    myscore.value = '';
  });

  const asyncCall = async () => {
    msg.innerHTML = 'Preceding...';
    const json = await sendData();
    if (json.result === 'Leaderboard score created correctly.') {
      msg.innerHTML = json.result;
    } else {
      msg.innerHTML = json.message;
    }
  };
  asyncCall();
};

export { AddNewScore, RefreshList };