
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


function operate(a, b, operation){

  return operation(a, b)

}



const power = function(number, exponent) {
  return number ** exponent;
};


let currentresult = 0;

let operanda = "", operandb = "";

let display = document.querySelector("#display");


let numberpad = document.querySelector("#numberpad");


//numberpad.style.borderColor = "red";

//Creating the number buttons
for(let i=1;i<13;i++){

  let numsdiv = document.createElement('div');

  numsdiv.textContent = i;

  if(i === 10){
    numsdiv.textContent = "Del";
  }

  if(i === 11){
    numsdiv.textContent = 0;
  }

  if(i === 12){
    numsdiv.textContent = ".";
  }

  //numsdiv.setAttribute("style", "display:flex;justify-content:center;align-items:center;width:32%;height:24%;border:1px pink solid; color: blue; background: white;");
  numsdiv.setAttribute("class", "numbers");

  numsdiv.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);

    let numinput = e.target.innerHTML;

    if(numinput !== "Del"){

      if(numinput == "."){
          if(!operanda.includes(".")){
            operanda += numinput;
          }
      }else{
        operanda += numinput;
      }
      

    }else{
      operanda = operanda.slice(0, -1);
    }

    display.innerHTML = operanda;


  })

  numberpad.appendChild(numsdiv);

}

let operatorsdiv = document.querySelector("#operatorbtns");
let operations = [ "+", "-", "×", "÷", "=", "C"];

//Creating the operator buttons
for (oper of operations){

  let operdiv = document.createElement('div');
  
  operdiv.setAttribute("class", "operators");
  operdiv.textContent = oper;
  
  //console.log(oper);

  operdiv.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
  })

  operatorsdiv.appendChild(operdiv);

}


let c = operate(3, 8, multiply);
console.log(c);

