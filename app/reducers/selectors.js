import { values } from 'lodash';

export const selectSearchResults = ({ searchUsersResults }) => {
  return values(searchUsersResults) || [];
};

export const followedPosts = (posts, leader_ids) => {
  let leaderPosts = {};
  Object.keys(posts).forEach(location => {
    leaderPosts[location] = [];
    posts[location].forEach(post => {
      if (leader_ids.includes(post.author.id)) {
        leaderPosts[location].push(post)
      }
    })})
  return leaderPosts
}