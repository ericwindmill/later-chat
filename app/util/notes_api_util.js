export const fetchAllNotes = (user_id, locations) => {
  locations = locations.map(loc => loc.replace(/ /g, "%20")).join('&locations[]=');
  fetch('https://later-chat.herokuapp.com/api/posts?type=note&recipient_id=' + user_id + '&locations[]=' + locations, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error));
};
