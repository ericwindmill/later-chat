export const fetchCreateFollow = (follow) => {
  return fetch('https://later-chat.herokuapp.com/api/followedPosts' {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      follow
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error))
}
