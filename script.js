const body = document.querySelector("#body");
const square_divs = document.querySelector("#square-divs");
const sizeSlider = document.querySelector('#sizeSlider');
const clearBoutton = document.querySelector('#clearBoutton');
const carre = document.querySelector;
const sizeValue = document.querySelector('#sizeValue');

let default_size = 16;
let tableau = [];


function initialise(entry_number){
    square_divs.replaceChildren();
    let square_numbers = entry_number**2; 
    let square_size = 480/entry_number;
    for ( let j = 0 ; j < square_numbers ; j++ ){
      tableau[j] = document.createElement("div");

      tableau[j].classList.add( 'carre' );

      tableau[j].style['height'] = `${square_size}px`;
      tableau[j].style['width'] = `${square_size}px`;

      square_divs.appendChild(tableau[ j ]);

    tableau[j].addEventListener(
        'click',() => tableau[j].style['background-color'] = 'black');
    }
    sizeValue.textContent  = `${sizeSlider.value}x${sizeSlider.value}`;
}
initialise(default_size);
clearBoutton.addEventListener('click',() => {
sizeSlider.value = 16;
initialise(default_size);

});
sizeSlider.addEventListener('input', () => {
  initialise(sizeSlider.value);
}) ;




