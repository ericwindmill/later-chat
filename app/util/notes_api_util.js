export const fetchAllNotes = (data) => {
  let locations = data.locations;
  let user_id = data.user_id;
  locations = locations.map(loc => loc.replace(/ /g, "%20")).join('&locations[]=');
  return fetch('https://later-chat.herokuapp.com/api/posts?type=note&recipient_id=' + user_id + '&locations[]=' + locations, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const updateNote = (noteId) => {
  return fetch('https://later-chat.herokuapp.com/api/posts?note_id=' + noteId, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
};
