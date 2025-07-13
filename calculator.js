
  
  let keyboard, numinput, setoperanda = true, currentresult = "", operator = "", displaystring = "", operanda = "", operandb = "";
  
  let numpadkeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", ".", "Delete"];

  let operatorkeys = [ "+", "-", "*", "x", "/", "=", "c", "Enter"];

  let operations = [ "+", "-", "×", "÷", "=", "C"];
  


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
  
  
  const clear =function(cleardisplay) {
  
    console.log("Clearing everything");
    operanda = "";
    operandb = "";
    setoperanda = true;
    operator = "";
    if(cleardisplay){
      display.innerHTML = "";
    }
    
    currentresult = 0;
  
  };

  //This is for when a number is pressed followed by press of = 
  //Prevents error message in console
  const empty =function(a, b) {
      return a;
  };
  
  
  
  
  function operate(a, b, operation){
  
    return operation(a, b)
  
  }
  
    
  const power = function(number, exponent) {
    return number ** exponent;
  };
  


  

  let actions = {
    "+":add,
    "-":subtract,
    "×":multiply,
    "*":multiply,
    "x":multiply,
    "X":multiply,
    "÷":divide,
    "/":divide,
    "C":clear,
    "":empty  }
    



  function numberinput(e, keyboard){

    if(keyboard){

      //Keyboard input
      console.log(e.key);
      numinput = e.key

    }else{

      //Mouse click input
      console.log(e.target.innerHTML);
      numinput = e.target.innerHTML;
    }
    

    if(setoperanda){

      
      operanda = (operanda == "0")?"":operanda;//prevents numbers starting with 0

      if(numinput !== "Del" && numinput !== "Delete" && numinput !== "Backspace"){

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

        //console.log("Del key pressed while setting operand a");
        operanda = operanda.slice(0, -1);

        //After user divides by zero, pressing Del will cause the operator to display with no operands
        if(operanda == ""){
          operator = "";
        }

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

        //console.log("Del key pressed while setting operand b");
        operandb = operandb.slice(0, -1);
        
      }
    }

    
    
    display.textContent = operanda + " " + operator + " " + operandb;
  
    console.log("A: " + operanda)
    console.log("Operator: " + operator)
    console.log("B: " + operandb)
  }
  

  function operatorinput(e, keyboard){    
    
    
    if(keyboard){

      //Keyboard input
      console.log(e.key);
      operinput = e.key

    }else{

      //Mouse click input
      console.log(e.target.innerHTML);
      operinput = e.target.innerHTML;

    }

    if(operanda !== ""){

      if(operinput == "=" || operinput == "Enter"){

        if((operator == "÷" || operator == "/") && Number(operandb) == 0){
  
          currentresult = 0;
          display.textContent = "Dividing by zero is not allowed!";
          clear(0);
  
        }else{
  
          currentresult = operate(operanda, operandb, actions[operator]);
          display.textContent = currentresult;  
          
        }
               
  
          operanda = currentresult + "";//convert to string
          operator = "";
          operandb = "";
          setoperanda = true;
  
      }else if(operinput == "C" || operinput == "c"){
  
          clear(1);
      
      }else{
  
        setoperanda = false;
  
        if(operandb == ""){
  
          operator = operinput;
          display.textContent = operanda + " " + operator + " " + operandb;
         
    
        }else{
  
          if(operator == "÷" && Number(operandb) == 0){
            currentresult = 0;
            display.textContent = "Dividing by zero is not allowed!";
            clear(0);
  
          }else{
            currentresult = operate(operanda, operandb, actions[operator]);
            display.textContent = currentresult;
          }
  
  
  
          operanda = currentresult + "";//convert to string
          operator = operinput;
          operandb = "";
        }
    
      }

    }


    console.log("A: " + operanda)
    console.log("Operator: " + operator)
    console.log("B: " + operandb)
  
  }


  

  
  document.addEventListener('keydown', (event) => {

    //console.log(`key=${event.key},code=${event.code}`);

    keyboard = 1;

    if(numpadkeys.indexOf(event.key) !== -1){
       console.log(`A number pad key was pressed. key=${event.key},code=${event.code}`);        
       numberinput(event, keyboard);
    }

    if(operatorkeys.indexOf(event.key) !== -1){
       console.log(`A operator key was pressed. key=${event.key},code=${event.code}`);
       operatorinput(event, keyboard);
    }

  });


  let display = document.querySelector("#display");
  
  
  let numberpad = document.querySelector("#numberpad");
  
    
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
  
    
    numsdiv.setAttribute("class", "numbers");
  
    numsdiv.addEventListener('click', (e) => {

        keyboard = 0;
        numberinput(e, keyboard);
      
    })
  
    numberpad.appendChild(numsdiv);
  
  }
  

  let operatorsdiv = document.querySelector("#operatorbtns");

  //Creating the operator buttons
  for (oper of operations){
  
    let operdiv = document.createElement('div');
    
    operdiv.setAttribute("class", "operators");
    operdiv.textContent = oper;
    
    //console.log(oper);
  
    operdiv.addEventListener('click', (e) => {
  
      keyboard = 0;
      operatorinput(e, keyboard);   
  
    })
  
    operatorsdiv.appendChild(operdiv);
  
  }
  
  
  
  