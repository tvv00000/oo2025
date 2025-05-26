type User = {
  username: string;
  password: string;
  isAdmin: boolean;
};

function authenticateUserDetailed(
  users: User[],
  username: string,
  password: string
): User | null {
  const foundUser = users.find(user => user.username === username && user.password === password);
  return foundUser || null;
}

const users: User[] = [
  { username: "alice", password: "1234", isAdmin: true },
  { username: "bob", password: "5678", isAdmin: false }
];

console.log(authenticateUserDetailed(users, "alice", "1234")); // true
console.log(authenticateUserDetailed(users, "bob", "wrong"));  // false

const authenticatedUser = authenticateUserDetailed(users, "alice", "1234");
console.log(authenticatedUser); // { username: "alice", password: "1234", isAdmin: true }

const failedUser = authenticateUserDetailed(users, "bob", "wrong");
console.log(failedUser); // null
