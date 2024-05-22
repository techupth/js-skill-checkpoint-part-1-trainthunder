// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(promotionCode) {
  let tShirtsSummary = products[0].price * products[0].quantity;
  let jeansSummary = products[1].price * products[1].quantity;
  let shirtSummary = products[2].price * products[2].quantity;
  let totalSummary = tShirtsSummary + jeansSummary + shirtSummary;
  if (promotionCode === "SALE20") {
    return (totalSummary * (100 - 20)) / 100;
  } else if (promotionCode === "SALE50") {
    return (totalSummary * (100 - 50)) / 100;
  } else {
    return totalSummary;
  }
}
console.log(calculateTotalPrice(""));
console.log(calculateTotalPrice("SALE20"));
console.log(calculateTotalPrice("SALE50"));
