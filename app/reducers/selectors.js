export const followedPosts = (posts, leaders) => {
  let leaderPosts = [];
  posts.forEach(post => {
    if (leaders.includes(post.author.id)) {
      leaderPosts.push(post)
    }
  })
  return leaderPosts
}
