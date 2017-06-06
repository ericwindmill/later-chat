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
    .then(data => console.log(data))
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
