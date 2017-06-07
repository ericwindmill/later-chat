// for fetching all posts
export const fetchAllPosts = (locations) => {
  locations = locations.map(loc => loc.replace(" ", "%20")).join('&locations[]=')
  return fetch('http://localhost:3000/api/posts?type=post&locations[]=' + locations, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error))
}
