
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

//Creating the number buttons
for(let i=1;i<13;i++){

  let numsdiv = document.createElement('div');

  numsdiv.textContent = i;

  if(i === 11){
    numsdiv.textContent = 0;
  }

  if(i === 12){
    numsdiv.textContent = ".";
  }

  if(i === 10){
    numsdiv.textContent = "%";
  }


  //numsdiv.setAttribute("style", "display:flex;justify-content:center;align-items:center;width:32%;height:24%;border:1px pink solid; color: blue; background: white;");
  numsdiv.setAttribute("class", "numbers");

  numsdiv.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
  })

  numberpad.appendChild(numsdiv);

}

