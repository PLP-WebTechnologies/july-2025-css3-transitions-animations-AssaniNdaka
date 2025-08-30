/* 📚 Part 2: Functions, Scope & Return Values */

// Global variable
let counter = 0;

// Function with parameter and return value
function addNumbers(a, b) {
  return a + b;
}

// Local scope demonstration
function incrementCounter() {
  let localMessage = "Counter increased!";
  counter++;
  console.log(localMessage, "Current counter:", counter);
}

// Test the function
console.log("Sum of 2 + 3 =", addNumbers(2, 3));

/* 🎬 Part 3: Combining CSS + JavaScript */

// Select elements
const box = document.getElementById("box");
const triggerBtn = document.getElementById("triggerBtn");

// Function to trigger CSS animation
function triggerAnimation() {
  incrementCounter();
  box.classList.add("animate");

  // Remove class after animation to allow reuse
  setTimeout(() => {
    box.classList.remove("animate");
  }, 2000);
}

// Attach event listener
triggerBtn.addEventListener("click", triggerAnimation);
