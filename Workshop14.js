let username = "admin";
let password = "1234";
let age = 20;
if (username === "admin" && password === "1234" && age >= 18) {
  console.log("เข้าสู่ระบบสำเร็จ");
} 
else if (age < 18) {
  console.log("อายุไม่ถึงเกณฑ์");
} 
else {
  console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
}

console.log("\n--- ทดสอบกรณีอื่น ๆ ---");

let testUsername = "user";
let testPassword = "0000";
let testAge = 20;
if (testUsername === "admin" && testPassword === "1234" && testAge >= 18) {
  console.log("เข้าสู่ระบบสำเร็จ");
}
else if (testAge < 18) {
  console.log("อายุไม่ถึงเกณฑ์");
}
else {
  console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
}

testUsername = "admin";
testPassword = "1234";
testAge = 15;
if (testUsername === "admin" && testPassword === "1234" && testAge >= 18) {
  console.log("เข้าสู่ระบบสำเร็จ");
}
else if (testAge < 18) {
  console.log("อายุไม่ถึงเกณฑ์");
}
else {
  console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
}