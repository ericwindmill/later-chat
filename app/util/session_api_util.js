export const login = user => {
  console.log("inside API util");
  return fetch('http://localhost:3000/api/session', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json());
};

export const signup = user => {
  return fetch('http://localhost:3000/api/users', {
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
  return fetch('http://localhost:3000/api/session', {
    method: 'DELETE',
  });
};
