// for fetching all posts
export const fetchAllPosts = (locations) => {
  locations = locations.map(loc => loc.replace(" ", "%20")).join('&locations[]=')
  return fetch('http://66.162.144.78/api/posts?type=post&locations[]=' + locations, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: null
  })
    .then(res => console.log(res))
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
}
