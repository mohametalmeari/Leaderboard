const getGameID = async () => {
  if (!localStorage.getItem('myGameID')) {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      body: JSON.stringify({
        name: 'almeari games',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    const myGameID = JSON.stringify(json).match(/Game with ID: (\w+)/)[1];
    localStorage.setItem('myGameID', myGameID);
    return myGameID;
  }
  return localStorage.getItem('myGameID');
};

export default getGameID;