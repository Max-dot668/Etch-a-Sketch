//====================================================================================
// Program Name: Etch-a-Sketch
// Programmer: Max You
// Date: 12/26/2024
// Description: This program uses fundamentals of HTML, CSS, and Javascript to make an etch-a-sketch emulator in the browser.
//=====================================================================================

// function that creates the default 16x16 grid for the sketch
function etch_a_sketch(size) {
  const container = document.querySelector(".container");

  for (let i = 0; i < size; i++) {   // creates 16 columns
    let column = document.createElement("div");    
    column.classList.add("column");
    
    for (let j = 1; j <= size; j++) {   // for each column, create 16 rows
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);   // put each row inside its column
    }
    container.appendChild(column);   // put each column in the container
  }

  // add hovering sketch effect
    container.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "black";
    });

}


// Main Program 

// call the etch-a-sketch function
etch_a_sketch(16);
