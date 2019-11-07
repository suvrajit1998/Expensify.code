//Object Dictructuring

// const persone = {
//   name: "suvra",
//   age: 21,
//   location: {
//     city: "kolkata",
//     temp: 23
//   }
// };

// const { name, age } = persone;

// console.log(`${name} is ${age}`);

// const { city, temp } = persone.location;

// if (city && temp) {
//   console.log(`lives in ${city} temrature is ${temp}`);
// }

// const book = {
//   Title: "Ego is the Enemy",
//   Author: "Ryan Holiday",
//   publisher: {
//     name: "penguin"
//   }
// };

// const { name } = book.publisher;

// console.log(`The book Publisher name is ${name}`);

// const { Title: bookname = "Annonymus", Author } = book;

// console.log(`${bookname} Author is ${Author}`);

//Array Distructuring

const coffee = ["Cold Coffee", "$3.00", "$3.50", "$3.75"];

const [Hotcoffe = "Hot Coffee", , midrange] = coffee;

console.log(`A mediam ${Hotcoffe} coust ${midrange}`);
