
const add = function(a, b) {

  return Number(a) + Number(b);
    
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
  
  
  const clear =function() {
  
    console.log("Clearing everything");
    operanda = "";
    operandb = "";
    setoperanda = true;
    operator = "";
    display.innerHTML = "";
    currentresult = 0;
  
  };


  const empty =function(a, b) {
      return a;
  };
  
  
  
  
  function operate(a, b, operation){
  
    return operation(a, b)
  
  }
  
  
  
  const power = function(number, exponent) {
    return number ** exponent;
  };
  
  
  let currentresult = "";
  
  
  let setoperanda = true;
  
  let currentnuminput = "", operator = "", displaystring = "", operanda = "", operandb = "";
  
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
  
  

      if(setoperanda){
        
        operanda = (operanda == "0")?"":operanda;//prevents numbers starting with 0
  
        if(numinput !== "Del"){

          //If a calculation has just been completed, reset
          if(currentresult !== ""){
            operanda = "";
            currentresult = "";
            operator = "";
          }
  
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
  
      }else{
  
        operandb = (operandb == "0")?"":operandb;//prevents numbers starting with 0
  
        if(numinput !== "Del"){
  
          if(numinput == "."){

              if(!operandb.includes(".")){
                operandb += numinput;
                
              }
          }else{
            operandb += numinput;
          }
          
    
        }else{
          operandb = operandb.slice(0, -1);
        }
      }
  
  
      display.textContent = operanda + " " + operator + " " + operandb;
  
      //currentnuminput = +displaystring;
      console.log("A: " + operanda)
      console.log("Operator: " + operator)
      console.log("B: " + operandb)
      //console.log("Current # input: " + currentnuminput)
    })
  
    numberpad.appendChild(numsdiv);
  
  }
  
  let operatorsdiv = document.querySelector("#operatorbtns");
  let operations = [ "+", "-", "×", "÷", "=", "C"];
  
  let actions = {
    "+":add,
    "-":subtract,
    "×":multiply,
    "÷":divide,
    "C":clear,
    "":empty  }
  
  //Creating the operator buttons
  for (oper of operations){
  
    let operdiv = document.createElement('div');
    
    operdiv.setAttribute("class", "operators");
    operdiv.textContent = oper;
    
    //console.log(oper);
  
    operdiv.addEventListener('click', (e) => {
  
      console.log(e.target.innerHTML);
  
      if(e.target.innerHTML == "="){
  
        if(operator == "÷" && Number(operandb) == 0){
  
          currentresult = 0;
          display.textContent = "Dividing by zero is not allowed!";
  
        }else{

          currentresult = operate(operanda, operandb, actions[operator]);
          display.textContent = currentresult;  
          
        }
          
  
          
  
          operanda = currentresult + "";//convert to string
          operator = "";
          operandb = "";
          setoperanda = true;
  
      }else if(e.target.innerHTML == "C"){
  
          clear();
      
      }else{
  
        setoperanda = false;
  
        if(operandb == ""){
  
          operator = e.target.innerHTML;
          display.textContent = operanda + " " + operator + " " + operandb;
         
    
        }else{
  
          if(operator == "÷" && Number(operandb) == 0){
            currentresult = 0;
            display.textContent = "Dividing by zero is not allowed!";
          }else{
            currentresult = operate(operanda, operandb, actions[operator]);
            display.textContent = currentresult;
          }
  
  
  
          operanda = currentresult + "";//convert to string
          operator = e.target.innerHTML;
          operandb = "";
  
        }
    
      }
  
      console.log("A: " + operanda)
      console.log("Operator: " + operator)
      console.log("B: " + operandb)
      
  
    })
  
    operatorsdiv.appendChild(operdiv);
  
  }
  
  
  
  