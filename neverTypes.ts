type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

function handleOrderStatus(status: OrderStatus) {
  if (status === "pending") {
    console.log("Đơn hàng đang chờ xử lý");
  } else if (status === "shipped") {
    console.log("Đơn hàng đã được gửi đi");
  } else if (status === "delivered") {
    console.log("Khách đã nhận hàng");
  } else {
    // Case that never happens
    // Never type is neccessary to ensure all cases are handled
    // If a new status is added to OrderStatus but not handled here,
    // TypeScript will raise an error
    // because 'status' can be of that new type, which is not covered
    // const check: never = status;
  }
}