export const fetchSearchUsers = (searchStr) => {
  // return fetch('localhost:3000/api/users?searchStr=' + searchStr, {
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
