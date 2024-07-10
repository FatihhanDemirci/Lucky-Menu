const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const result4 = document.querySelector(".result4");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const count1 = document.querySelector(".count1");
const count2 = document.querySelector(".count2");
const count3 = document.querySelector(".count3");
const count4 = document.querySelector(".count4");
const total = document.querySelector(".total");

const starter = [
  { names: "Spinach Artichoke Dip", price: "25" },
  { names: "Deviled Eggs", price: "18" },
  { names: "Stuffed Mushrooms", price: "29" },
  { names: "Avocado Salsa", price: "30" },
  { names: "Tortilla Roll Ups", price: "15" },
  { names: "Hummus", price: "20" },
  { names: "Chicken Wings", price: "27" },
  { names: "French Onion Dip", price: "23" },
];

const hotAppetizer = [
  { names: "Cheese Fondue", price: "30" },
  { names: "Meatballs", price: "32" },
  { names: "French Bread Pizza", price: "29" },
  { names: "Lahmacun", price: "30" },
  { names: "Nachos", price: "15" },
  { names: "Fried Mozzarella", price: "20" },
  { names: "Big Mac Egg Rolls", price: "27" },
  { names: "Glazed Chicken Wings", price: "23" },
];

const mainDishes = [
  { names: "Burger", price: "25" },
  { names: "Mussakka", price: "30" },
  { names: "Sushi", price: "35" },
  { names: "Beef stew", price: "40" },
  { names: "Beef Bourguignon", price: "45" },
  { names: "Turkey Sandwich", price: "50" },
  { names: "Ramen", price: "55" },
  { names: "Lasagna", price: "60" },
  { names: "Kebab", price: "60" },
];

const drinks = [
  { names: "Iced Tea", price: "5" },
  { names: "Lemonade", price: "3" },
  { names: "Strawberry Lemonade", price: "7" },
  { names: "Watermelon Lemonade", price: "8" },
  { names: "Coke", price: "2" },
  { names: "Orange Juice", price: "2" },
  { names: "Water", price: "1" },
  { names: "fruit Juice", price: "4" },
];
const dessert = [
  { names: "Crème Brûlée", price: "11" },
  { names: "Classic Tiramisu", price: "12" },
  { names: "Gulab Jamun", price: "18" },
  { names: "Baklava", price: "19" },
  { names: "Mochi", price: "13" },
  { names: "Cheesecake", price: "10" },
  { names: "Crème Caramel", price: "17" },
  { names: "Nanaimo Bar", price: "13" },
];
const run = () => {
  let check = 0;
  btn1.addEventListener("click", () => {
    const random = Math.floor(Math.random() * starter.length);
    result1.textContent = `${starter[random].names}`;
    count1.textContent = `Starter: ${starter[random].price} $`;
    btn1.classList.remove("active");
    check += parseFloat(starter[random].price);
    totalCheck();
  });
  btn2.addEventListener("click", () => {
    const random = Math.floor(Math.random() * hotAppetizer.length);
    result2.textContent = `${hotAppetizer[random].names}`;
    count2.textContent = `Hot Appetizer: ${hotAppetizer[random].price} $`;
    btn2.classList.remove("active");
    check += parseFloat(hotAppetizer[random].price);
    totalCheck();
  });
  btn3.addEventListener("click", () => {
    const random = Math.floor(Math.random() * drinks.length);
    result3.textContent = `${drinks[random].names}`;
    count3.textContent = `Drink: ${drinks[random].price} $`;
    btn3.classList.remove("active");
    check += parseFloat(drinks[random].price);
    totalCheck();
  });

  btn4.addEventListener("click", () => {
    const random = Math.floor(Math.random() * dessert.length);
    result4.textContent = `${dessert[random].names}`;
    count4.textContent = `Dessert: ${dessert[random].price} $`;
    btn4.classList.remove("active");
    check += parseFloat(dessert[random].price);
    totalCheck();
  });

  const totalCheck = () => {
    total.textContent = `Total: ${check} $`;
  };
};

run();
