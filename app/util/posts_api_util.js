
export const fetchAllPosts = () => {
  fetch('http://localhost:3000/api/posts', {
    headers: {
      // 'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    // .catch(error => console.log(error))
}
