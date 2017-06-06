import ASYNC from './async_util.js';

export const login = user => {
  return fetch('http://localhost:3000/api/session', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => ASYNC.setItem('token', data.auth_token))
    .then( () => ASYNC.getItem('token'))
    .catch(error => console.log(error));
};

// export const fetchAllPosts = () => {
//   fetch('http://localhost:3000/api/posts', {
//     headers: {
//       'Accept': 'application/json'
//     }
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

export const signup = user => {
  return fetch('/api/user', {
    method: 'POST',
    data: user
  });
};

export const logout = () => {
  return fetch('/api/session', {
    method: 'POST'
  });
};
