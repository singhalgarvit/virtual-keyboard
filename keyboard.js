//fuction to enter the input value in input field using keyboard
function clicked(val) {
  if (document.getElementById("capslock").classList.contains("capslock") == true) { //agar capslock class true hogi to uppercase m input hoga
    let inputVal = document.getElementById("input").value;
    document.getElementById("input").value = inputVal + val.value.toUpperCase();
  }
  else{
    let inputVal = document.getElementById("input").value;
    document.getElementById("input").value = inputVal + val.value.toLowerCase();
  }
}

//function to toggle the 3d effect in keyboard
function effect(){
let check =document.getElementById("effect");
if(check.checked==true){
    document.getElementById("main").classList.add("main3d");
    document.getElementById("input").classList.add("input3d");
    document.getElementById("keyboard").classList.add("keyboard3d");
}
else{
    document.getElementById("main").classList.remove("main3d");
    document.getElementById("input").classList.remove("input3d");
    document.getElementById("keyboard").classList.remove("keyboard3d");
}
}

//function for backspace button 
function backspace() {
  let inputVal = document.getElementById("input").value;
  document.getElementById("input").value = inputVal.slice(0, -1);
}

//function to toggle the capslock class in order to uppercase the keyboard
function capslock() {
  let checkclass = document.getElementById("capslock");
  let buttonList=document.querySelectorAll(".buttons");
  if (checkclass.classList.contains("capslock") == true) {  //if uppercase class has then remove it and if not then add it
    checkclass.classList.remove("capslock");
    for (let i = 0; i < buttonList.length; i++) {
      buttonList[i].style.textTransform = "lowercase";
    }
  } else {
    checkclass.classList.add("capslock");
    for (let i = 0; i < buttonList.length; i++) {
      buttonList[i].style.textTransform = "uppercase";
    }
  }
}

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key == "CapsLock") capslock();
});


