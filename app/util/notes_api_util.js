export const fetchAllNotes = (user_id, locations) => {
  locations = locations.map(loc => loc.replace(" ", "%20")).join('&locations[]=')
  fetch('http://localhost:3000/api/posts?type=note&recipient_id=' + user_id + '&locations[]=' + locations, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
