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

    document.getElementById("allClear").addEventListener("click", function(){
    display="";
    document.getElementById("bd-display").innerText = "0";
    })

    document.getElementById("return").addEventListener("click", function(){
      display = display.substring(0, display.length - 1);
      document.getElementById("bd-display").innerText = display;
    })
  }
)