
const add = function(a, b) {

return a + b;
  
};

const subtract = function(a, b) {

return Number(a) - Number(b);
  
};


const multiply =function(a, b) {

return Number(a) * Number(b);
  
};



const divide =function(a, b) {

return Number(a) / Number(b);
  
};



const power = function(number, exponent) {
  return number ** exponent;
};

const factorial = function(number) {
     
if(number == 0) return 1;

let factorial = number;

for (let i = number - 1; i > 0; i--){
    console.log(i);
    factorial *= i;
}

console.log("Final: " + factorial);
return factorial;

};


let numberpad = document.querySelector("#numberpad");

numberpad.style.borderColor = "red";


for(let i=0;i<10;i++){

  let numsdiv = document.createElement('div');
  numsdiv.textContent = i;
  numsdiv.setAttribute("style", "border: 1px black solid; color: blue; background: white;");

  numberpad.appendChild(numsdiv);
}

