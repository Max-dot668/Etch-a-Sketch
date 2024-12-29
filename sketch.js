//====================================================================================
// Program Name: Etch-a-Sketch
// Programmer: Max You
// Date: 12/26/2024
// Description: This program uses fundamentals of HTML, CSS, and Javascript to make an etch-a-sketch emulator in the browser.
//=====================================================================================

// Global variables that improve readability
const size = 16;

//============================================================================

// function that randomizes the RGB values when cursor hovers to screen
function random_rgb(e) {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  let color = 'rgb(' + x + ',' + y + ',' + z + ')';
  e.target.style.backgroundColor = color;
}

// function that creates the grid for the sketch
function grid(size) {
    const container = document.querySelector(".container");

  for (let i = 0; i < size; i++) {   // creates n size columns
    let column = document.createElement("div");    
    column.classList.add("column");
    
    for (let j = 1; j <= size; j++) {   // for each column, create n-size  rows
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);   // put each row inside its column
    }
    container.appendChild(column);   // put each column in the container
  }

  // add hovering sketch effect with randomized RGB
  container.addEventListener("mouseover", (e) => {
    random_rgb(e);
    });
}

// function that handles the reset button logic
function reset(input) {
  // logic that removes the current grid
  document.querySelectorAll(".column").forEach((e) => e.parentNode.removeChild(e));
  // create a new grid with user input
  grid(input);
}

// Etch-a-Sketch function
function etch_a_sketch() {
  // default grid
  grid(size);

  // logic that deals with an event when user clicks on reset button
  const resetButton = document.querySelector('button');

  resetButton.addEventListener('click', () => {
    let userInput = Number(prompt("Enter amount of squares per side to make the new grid"));
    if (userInput > 100) {
      alert("The new grid size exceeds the limit of 100, default size will be added instead");
      reset(size);
    }
    else {
      reset(userInput);
    }
  });
}

//============================================================================
// Main Program

// call the etch-a-sketch function
etch_a_sketch();
