let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let btn5 = document.querySelector(".btn-5");
let btn6 = document.querySelector(".btn-6");
let btn7 = document.querySelector(".btn-7");
let btn8 = document.querySelector(".btn-8");
let btn9 = document.querySelector(".btn-9");
let btn10 = document.querySelector(".btn-10");

let btnList = document.querySelectorAll(".btn-list");

btn1.addEventListener("mousemove", function(){
    console.log(btn1);

    for (let color = 0; color <= 255; color++) {
      let r = Math.floor(Math.random() * (color + 1));
      let g = Math.floor(Math.random() * (color + 1));
      let b = Math.floor(Math.random() * (color + 1));
      btn1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
});

btn2.addEventListener("wheel", function(){
    console.log(btn2);

    for (let color = 0; color <= 255; color++) {
      let r = Math.floor(Math.random() * (color + 1));
      let g = Math.floor(Math.random() * (color + 1));
      let b = Math.floor(Math.random() * (color + 1));
      btn2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
});

btn3.addEventListener("click", function(){
    console.log(btn3);

    let rndText = btnList[Math.floor(Math.random()*btnList.length)].textContent;
    console.log(rndText);
    btn3.textContent = rndText;
});

let btnPositionX = 0;
let btnPositionY = 0;

btn4.addEventListener("keydown", function(e){
  console.log(btn4);
  //left
  if (e.keyCode === 37) {
    btnPositionX -= 1;
		btn4.style.transform = "translate(" + (btnPositionX) + "em, " + (btnPositionY) + "em)";
  //up
	}else if (e.keyCode === 38){
    btnPositionY -= 1;
    btn4.style.transform = "translate(" + (btnPositionX) + "em, " + (btnPositionY) + "em)";
  }
  //right
	else if (e.keyCode === 39){
    btnPositionX += 1;
    btn4.style.transform = "translate(" + (btnPositionX) + "em, " + (btnPositionY) + "em)";
  }
  //down
	else if (e.keyCode === 40){
    btnPositionY += 1;
    btn4.style.transform = "translate(" + (btnPositionX) + "em, " + (btnPositionY) + "em)";
  }
});

btn5.addEventListener("dblclick", function(){
  console.log(btn5);
  btn5.classList.toggle("dblclick");
});

btn6.addEventListener("focus", function(){
  console.log(btn6);
  btn6.classList.toggle("focus");
});

btn7.addEventListener("mouseover", function(){
  console.log(btn7);
  btn7.classList.toggle("mouseover");
});

btn8.addEventListener("blur", function(){
  console.log(btn8);
  btn8.classList.toggle("blur");
});

btn9.addEventListener("contextmenu", function(e){
  console.log(btn9);
  e.preventDefault();
});

btn10.addEventListener("mouseout", function(){
  console.log(btn10);
  alert("Mouse out!");
});