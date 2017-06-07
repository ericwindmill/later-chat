
export const fetchAllPostsFromLocation = location => {
  fetch(`https://later-chat.herokuapp.com/api/posts?type=post&locations[]=${location}`, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
