

const friends = ['tauhid', 'elias', 'imran tipu', 'abdur Rahman', 'ali ajgor', 'osman', 'nurul islam'];
let evenFriends = [];
for (let i = 0; i < friends.length; i++){
    const friend = friends[i];
    const evenFriend = friend.length;
    if (evenFriend % 2 === 0) {
        // console.log('this is even');
        evenFriends.push(friend);
        
    }
   
}
console.log(evenFriends);