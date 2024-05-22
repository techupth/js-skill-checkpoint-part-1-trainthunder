// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });
let totalPriceApple = inventory[0].price * inventory[0].quantity;
let totalPriceBanana = inventory[1].price * inventory[1].quantity;
let totalPriceOrange = inventory[2].price * inventory[2].quantity;
let totalPriceOfFruits = totalPriceApple + totalPriceBanana + totalPriceOrange;
let result =
  "มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก" +
  " " +
  totalPriceOfFruits +
  " " +
  "บาท";

console.log(result);
