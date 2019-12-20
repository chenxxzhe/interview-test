import "./style.scss";
import { flux } from "./test/flux";
import { anagram } from "./test/anagram";
import { animate } from "./test/animate";

/**
 * Test 1
 * please feel free to modify the code below
 */
const runButton1 = document.getElementById("runButton1");
runButton1.addEventListener("click", () => {
  
  generateOutput1(
    // call flux function here
    flux(getInputValue("test1"))
  );
});


/**
 * Test 2
 * please feel free to modify the code below
 */
const runButton2 = document.getElementById("runButton2");
runButton2.addEventListener("click", () => {
  generateOutput2(
    // call anagram function here
    anagram(getInputValue("test2a"), getInputValue("test2b"))
  );
});

/**
 * Test 3
 * please feel free to modify the code below
 */
const ele = document.getElementById("box");
const runButton3 = document.getElementById("runButton3");

runButton3.addEventListener("click", () => {
  setTimeout(function() {
    ele.style.left = 0;
  },350);
  
  // call animate function here
  // animate(...)
})


function getInputValue(input_id) {
  const inputVal = document.getElementById(input_id).value;
  return inputVal;
}

function generateOutput1(input) {
  const outputContent = document.getElementById("output1");
  let newInput = input.reverse();
  let iteration = newInput.length;

  // clean out the result board
  outputContent.textContent = "";

  if (newInput instanceof Array) {
    let newElement = document.createElement("ul");

    for (let i = 1; i <= iteration; i++) {
      let newListItem = document.createElement("li");
      let newContext = document.createTextNode(newInput.pop());
      newElement.appendChild(newListItem).appendChild(newContext);
    }
    outputContent.appendChild(newElement);
  }
}

function generateOutput2(input) {
  const outputContent = document.getElementById("output2");
  // clean out the result board
  outputContent.textContent = "";

  let newElement = document.createElement("p");
  let newContext = document.createTextNode(input);
  newElement.appendChild(newContext);
  outputContent.appendChild(newElement);
}
