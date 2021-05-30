function makeFriendsList(friends) {
  
  let list = document.createElement('ul');

  for (let i = 0; i < friends.length; i++) {
    
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(friends[i].firstName + ' ' + friends[i].lastName));
    list.appendChild(item);
    
  }
return list;
}
