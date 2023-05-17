const getGameID = () => new Promise((resolve) => {
  if (!localStorage.getItem('myGameID')) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      body: JSON.stringify({
        name: 'almeari games',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const myGameID = JSON.stringify(json).match(/Game with ID: (\w+)/)[1];
        localStorage.setItem('myGameID', myGameID);
        resolve(myGameID);
      });
  } else {
    resolve(localStorage.getItem('myGameID'));
  }
});

export default getGameID;