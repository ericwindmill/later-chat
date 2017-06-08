// for fetching all posts
export const fetchSearchUsers = (searchStr) => {
  return fetch('https://later-chat.herokuapp.com/api/users?searchStr=' + searchStr, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error));
};
