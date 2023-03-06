const body = document.querySelector("#body");
const square_divs = document.querySelector("#square-divs");
const sizeSlider = document.querySelector('#sizeSlider');
const reinitialiser_tableau = document.querySelector('#reinitialiserTableau');
const carre = document.querySelector;
const sizeValue = document.querySelector('#sizeValue');
const default_click_color = 'white';
const default_color = "rgb(73, 100, 122)";

const mode_normal = document.querySelector('#mode_normal');
const mode_rainbow = document.querySelector('#mode_rainbow');
const mode_disco = document.querySelector('#mode_disco');

const delete_couleur = document.querySelector("#deleteColor");

let default_size = 16;
let tableau_de_divs = [];


function initialise(entry_number){
    square_divs.replaceChildren();

    var count_click_disco =0;
    var count_click_normal=0;
    var count_click_rainbow=0;

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

let couleur_random = rgb_generator;

function color_cases(color){

  tableau_de_divs.forEach(element => {
  element.addEventListener(
    'click',() =>{
      element.style['background-color'] = color;}
                          )})
}

function rainbow_cases(){

  tableau_de_divs.forEach(element => {
  element.addEventListener(
    'click',() =>{
      element.style['background-color'] = rgb_generator();}
                          )})
}


initialise(default_size);
color_cases(default_click_color);

reinitialiser_tableau.addEventListener('click',() => {
sizeSlider.value = 16;
initialise(16);
color_cases(default_click_color);

});
sizeSlider.addEventListener('input', () => {
  initialise(sizeSlider.value);
  color_cases(default_click_color);
}) ;

delete_couleur.addEventListener('click',
() => color_cases( default_color ) );

function rgb_generator() {
  let value_1= Math.floor(Math.random() * 255);
  let value_2= Math.floor(Math.random() * 255);
  let value_3= Math.floor(Math.random() * 255);

  return `rgb(${value_1},${value_2},${value_3})`
}

mode_rainbow.addEventListener('click',() => {
color_cases(rainbow_cases());})

mode_normal.addEventListener('click',() =>{
  color_cases('white');})

 


mode_disco.addEventListener('click', ()=>{
  mode_disco.classList.toggle('bouttonOnClick');
  
  
    tableau_de_divs.forEach(element =>{
    
      let couleur = rgb_generator();
        element.style['background-color'] =couleur; 
      
  })
  
})


