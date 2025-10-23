// Notice these types aliases only exist at compile time
// Can't use typeof or instanceof to check these types at runtime

export type Customer = {
  id: number;
  name: string;
};

export type UserResponse = {
  success: boolean;
  message: string;
};

function greetCustomer(customer: Customer): UserResponse {
  return {
    success: true,
    message: `Xin chào ${customer.name}, cảm ơn bạn đã đến với cửa hàng!`,
  };
}

export type SupportFunction = (customer: Customer) => UserResponse;

const greetCustomer2: SupportFunction = (customer) => {
  return {
    success: true,
    message: `Xin chào ${customer.name}, cảm ơn bạn đã đến với cửa hàng!`,
  };
};

const farewellCustomer: SupportFunction = (customer) => {
  return {
    success: true,
    message: `Hẹn gặp lại ${customer.name}, chúc bạn một ngày vui vẻ!`,
  };
};