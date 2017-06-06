export const login = user => {
  return fetch('/api/session', {
    method: 'POST',
    data: user
  });
};

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
