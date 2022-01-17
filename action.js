let display = "";
let display_number;
let operationInCurse = false;
let currentOperation = "";

document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("seven").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "7";
    }
    if(operationInCurse){
      display = "7";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("eight").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "8";
    }
    if(operationInCurse){
      display = "8";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("nine").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "9";
    }
    if(operationInCurse){
      display = "9";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("four").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "4";
    }
    if(operationInCurse){
      display = "4";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("five").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "5";
    }
    if(operationInCurse){
      display = "5";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("six").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "6";
    }
    if(operationInCurse){
      display = "6";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("three").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "3";
    }
    if(operationInCurse){
      display = "3";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("two").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "2";
    }
    if(operationInCurse){
      display = "2";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("one").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "1";
    }
    if(operationInCurse){
      display = "1";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("zero").addEventListener("click", function(){
    if(display.length < 10 && !operationInCurse){
      display += "0";
    }
    if(operationInCurse){
      display = "0";
      operationInCurse = false;
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("dot").addEventListener("click", function(){
    let puntoPresente = false;
    if(display.length < 10 && !operationInCurse){
      for ( let i = 0; i <= display.length; i++){
        if (display[i] == ".")
          puntoPresente = true;
          // break;
      }
      if (!puntoPresente){
        display += ".";
      }
    }
    document.getElementById("bd-display").innerText = display;
  });

    document.getElementById("allClear").addEventListener("click", function(){
    display="";
    document.getElementById("bd-display").innerText = "0";
    })

    document.getElementById("return").addEventListener("click", function(){
      while (document.getElementById("bd-display").innerText != "0"){
        display = display.substring(0, display.length - 1);
        document.getElementById("bd-display").innerText = display;
        break;
      }
      if (document.getElementById("bd-display").innerText === ""){
        document.getElementById("bd-display").innerText = "0";
      }
    })

    document.getElementById("cp-button").addEventListener("click", function(){
      navigator.clipboard.writeText(document.getElementById("bd-display").innerText)
    })

    document.getElementById("add").addEventListener("click",function(){
      operationInCurse = true;
      currentOperation = "Addition";
      display_number = Number(display);
    })

    document.getElementById("equal").addEventListener("click",function(){
      if (currentOperation == "Addition"){
        display_number += Number(display);
        display = String(display_number);
      }
      document.getElementById("bd-display").innerText = display;
    })
})