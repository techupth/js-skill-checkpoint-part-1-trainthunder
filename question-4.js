// Question #4

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let result = inventory.reduce((acc, curr) => {
  if (curr.quantity < acc.quantity) {
    return curr;
  } else {
    return acc;
  }
});
let answer =
  "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ" +
  " " +
  result.name +
  " " +
  "ซึ่งมี" +
  " " +
  result.quantity +
  " " +
  "ชิ้น";
console.log(answer);
