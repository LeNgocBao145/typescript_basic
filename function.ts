function sayHi(): string {
  return "Xin chào, chúc bạn học lập trình vui vẻ!";
  // console.log("Xin chào, chúc bạn học lập trình vui vẻ!");
}

function double(num: number): number {
  return num * 2;
}

// ?. emphasize that the parameter is optional
function greet(name: string, title?: string) {
  if (title) {
    return `Xin chào ${title} ${name}`;
  }
  return `Xin chào ${name}`;
}

console.log(greet("An", "Binh"));

// ... is rest parameter which allows passing multiple arguments 
// as an array
function gatherFriends(groupName: string, ...members: string[]) {
  console.log(`Nhóm: ${groupName}`);
  console.log(`Thành viên: ${members.join(", ")}`);
}

gatherFriends("Đi biển", "Bình", "Chi");