// nested desrtructuring
const users = [
    {userId:1,firstName: "misbha",gender:"male"},
    {userId:2,firstName: "kayes",gender:"male"},
    {userId:3,firstName: "jakarea",gender:"male"},
]
// const [user1,user2,user3] = users;
// const [{firstName}, ,{gender}] = users;
const [{firstName:user1firstName, userId}, ,{gender:user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
