"use strict";

const form = document.querySelector("form");
const resPlace = document.querySelector("div");

form.addEventListener("mouseout",(e) => {
 
  const num1 = document.querySelectorAll("input")[0].value;
  const num2 = document.querySelectorAll("input")[1].value;
  
  e.preventDefault();
  document.querySelectorAll("button")[0].addEventListener("click", () => {
    resPlace.innerHTML = parseFloat(num1) + parseFloat(num2);
  });
  document.querySelectorAll("button")[1].addEventListener("click", () => {
    resPlace.innerHTML = parseFloat(num1) - parseFloat(num2);
  });
  document.querySelectorAll("button")[2].addEventListener("click", () => {
    resPlace.innerHTML = parseFloat(num1) * parseFloat(num2);
  });
  document.querySelectorAll("button")[3].addEventListener("click", () => {
    resPlace.innerHTML = parseFloat(num1) / parseFloat(num2);
  });
});
