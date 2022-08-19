const body = document.querySelector("#body");
const square_divs = document.querySelector("#square-divs");
const sizeSlider = document.querySelector('#sizeSlider');
const clearBoutton = document.querySelector('#clearBoutton');
const carre = document.querySelector;
const sizeValue = document.querySelector('#sizeValue');
const default_click_color = 'white';
const default_color = "rgb(73, 100, 122)";

const reinitialiser_case = document.querySelector("#clearBoutton");

let default_size = 16;
let tableau_de_divs = [];


function initialise(entry_number){
    square_divs.replaceChildren();
    var square_numbers = entry_number**2; 
    var square_size = 480/entry_number;
    for ( let j = 0 ; j < square_numbers ; j++ ){
      tableau_de_divs[j] = document.createElement("div");

      tableau_de_divs[j].classList.add( 'carre' );

      tableau_de_divs[j].style['height'] = `${square_size}px`;
      tableau_de_divs[j].style['width'] = `${square_size}px`;
      square_divs.appendChild(tableau_de_divs[ j ]);
      
    }
    
    sizeValue.textContent  = `${sizeSlider.value}x${sizeSlider.value}`;
}

function color_cases(color){
  tableau_de_divs.forEach(element => {
  element.addEventListener(
    'click',() =>{
      element.style.removeProperty('background-color');
      }
                          )})
}

initialise(default_size);
color_cases(default_click_color);

clearBoutton.addEventListener('click',() => {
sizeSlider.value = 16;
initialise(default_size);

});
sizeSlider.addEventListener('input', () => {
  initialise(sizeSlider.value);
}) ;




