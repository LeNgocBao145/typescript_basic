type UserType2 = {
  username: string;
  age: number;
  phone: string;
  theme: "dark" | "light";
};

const u2: UserType2 = {
  username: "Lan",
  age: 30,
  phone: "089-123-4455",
  theme: "dark",
  // Type '"lol"' is not assignable to type '"dark" | "light"'
  // theme: "lol",
};

type paymentMethods = "zalopay" | "momo" | "cod";
type APIMethods = "GET" | "PUT" | "POST" | "DELETE";