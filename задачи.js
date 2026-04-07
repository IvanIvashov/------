// // распределить по ролям
// Ответ должен быть
// {
//   admin: [
//     { name: "Alice", role: "admin" },
//     { name: "David", role: "admin" }
//   ],
//   user: [
//     { name: "Bob", role: "user" },
//     { name: "Charlie", role: "user" }
//   ]
// }

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "user" },
  { name: "David", role: "admin" },
];

// можно решить так:
// const grouped = users.reduce((acc, user) => {
//   const key = user.role;
//   if (!acc[key]) acc[key] = [];
//   acc[key].push(user);
//   return acc;
// }, {});

// Либо так
// const grouped = Object.groupBy(users, ({ role }) => role);
// console.log(grouped);
