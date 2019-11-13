/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendList = friends.map((item) => (`<li>${item.firstName} ${item.lastName}</li>`)).join('');
  let ul = document.createElement('ul');
  ul.innerHTML = friendList;
  return ul;
}
