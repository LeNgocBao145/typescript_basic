interface IUser {
  username: string;
  email: string;
  age: number;
}

type User = {
  username: string;
  email: string;
  age: number;
};

// interface and type are similar in most cases
// but interface can be extended and implemented
// while type cannot be implemented and extended only via 
// intersection types

// const user: IUser = {
//   username: "hung",
//   email: "@gmail.com",
//   age: 22,
// };

const user: User = {
  username: "hung",
  email: "@gmail.com",
  age: 22,
};

// Using interface inheritance

// In compile time, Interface is usually faster than type aliases
// because type aliases may require more complex resolution
// especially with union and intersection types

interface IUser {
  name: string;
  age: number;
}

// Declaration merging is possible with interfaces that share 
// the same name. This is not possible with type aliases.
// This will merge with the previous IUser interface
// interface IUser {
//   username: string;
//   email: string;
// }

interface IEmployee {
  job: string;
  salary: number;
}

interface IStaff extends IUser, IEmployee {
  department: string;
}


const staff1: IStaff = {
  name: "Lan",
  age: 24,
  job: "Tester",
  salary: 900,
  department: "QA",
  username: "lan123",
  email: "lan123@gmail.com",
};

