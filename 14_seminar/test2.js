function authenticateUserDetailed(users, username, password) {
    var foundUser = users.find(function (user) { return user.username === username && user.password === password; });
    return foundUser || null;
}
var users = [
    { username: "alice", password: "1234", isAdmin: true },
    { username: "bob", password: "5678", isAdmin: false }
];
console.log(authenticateUserDetailed(users, "alice", "1234")); // true
console.log(authenticateUserDetailed(users, "bob", "wrong")); // false
var authenticatedUser = authenticateUserDetailed(users, "alice", "1234");
console.log(authenticatedUser); // { username: "alice", password: "1234", isAdmin: true }
var failedUser = authenticateUserDetailed(users, "bob", "wrong");
console.log(failedUser); // null
