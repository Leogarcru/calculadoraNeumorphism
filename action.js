let display = "";
let display_number;

document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("seven").addEventListener("click", function(){
    if(display.length < 9){
      display += "7";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("eight").addEventListener("click", function(){
    if(display.length < 9){
      display += "8";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("nine").addEventListener("click", function(){
    if(display.length < 9){
      display += "9";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("four").addEventListener("click", function(){
    if(display.length < 9){
      display += "4";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("five").addEventListener("click", function(){
    if(display.length < 9){
      display += "5";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("six").addEventListener("click", function(){
    if(display.length < 9){
      display += "6";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("three").addEventListener("click", function(){
    if(display.length < 9){
      display += "3";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("two").addEventListener("click", function(){
    if(display.length < 9){
      display += "2";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("one").addEventListener("click", function(){
    if(display.length < 9){
      display += "1";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("zero").addEventListener("click", function(){
    if(display.length < 9){
      display += "0";
    }
    document.getElementById("bd-display").innerText = display;
  });

  document.getElementById("dot").addEventListener("click", function(){
    let puntoPresente = false;
    if(display.length < 9){
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
      display = display.substring(0, display.length - 1);
      document.getElementById("bd-display").innerText = display;
    })

    document.getElementById("cp-button").addEventListener("click", function(){
      navigator.clipboard.writeText(document.getElementById("bd-display").innerText)
    })
})