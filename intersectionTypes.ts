type Person = {
  name: string;
};

type Jobber = {
  job: string;
};

type Employee = Person & Jobber;

const e1: Employee = {
  name: "Hùng",
  job: "dev",
};

// type AdminUser = {
//   name: string;
//   email: string;
//   role: "admin";
//   permissions: string[];
// };

type AdminRights = {
  role: "admin";
  permissions: string[];
};

type MemberRights = {
  role: "member";
  points: number;
};

type AdminUser = Person & AdminRights & {
  email: string;
};

type MemberUser = Person & MemberRights;
