let obj = { name: "John", age: 30 };

// Store the object in local storage
localStorage.setItem("user", JSON.stringify(obj));

// Retrieve the object from local storage
let user = JSON.parse(localStorage.getItem("user"));
