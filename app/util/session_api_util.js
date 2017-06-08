export const login = user => {
  return fetch('https://localhost:3000/api/session', {
  // return fetch('https://later-chat.herokuapp.com/api/session', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const signup = user => {
  return fetch('https://localhost:3000/api/users', {
  // return fetch('https://later-chat.herokuapp.com/api/users', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json());
};

export const logout = user => {
  return fetch('https://localhost:3000/api/session', {
  // return fetch('https://later-chat.herokuapp.com/api/session', {
    method: 'DELETE',
  });
};
