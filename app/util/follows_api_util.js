export const fetchFollow = (follow) => {
  return fetch('https://later-chat.herokuapp.com/api/follows', {
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

export const fetchUnfollow = (follow) => {
  //we're sending follower / leader data in the 'follow' regardless
  //if we are creating an entry in the follow table or destroying one
  //however, the follows#destroy method only recognizes a url ...api/follows/:wildcard
  //so it's just some random number. the number doesn't matter, because it destroys the follow
  //based on the follower and leader
  return fetch('https://later-chat.herokuapp.com/api/follows/1', {
    method: 'DELETE',
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
