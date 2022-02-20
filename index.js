let click = 0;
document.getElementById("cat1").addEventListener("click", function(e){
    document.body.style.backgroundColor = "#87d6e5";
    click += 1;
    //console.log(click);
    if(click >= 5){
        alert("Don't play with us too much...");
        click = 0;
    }
});
document.getElementById("cat2").addEventListener("click", function(e){
    document.body.style.backgroundColor = "#fad788";
    click += 1;
    if(click >= 5){
        alert("Don't play with us too much...");
        click = 0;
    }
});
document.getElementById("cat3").addEventListener("click", function(e){
    document.body.style.backgroundColor = "#ffc4c4";
    click += 1;
    //console.log(click);
    if(click >= 5){
        alert("Don't play with us too much...");
        click = 0;
    }
});


let meow = new Audio('./sounds/meow.wav');
let meow2 = new Audio('./sounds/meow2.wav');
let meow3 = new Audio('./sounds/meow3.wav');
all_meows = [meow, meow2, meow3];
let cats = document.getElementsByClassName("cat");
for (let i=0; i<cats.length; i++){
    cats[i].addEventListener("click", function(event){
        all_meows[i].play();
    })
}


let elements = document.querySelectorAll('.rolling-text');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';
  
  let textContainer = document.createElement('div');
  textContainer.classList.add('block');
  
  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0': letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }
  
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});


setTimeout(() => {
  elements.forEach(element => {
    element.classList.add('play');
  })
}, 600);

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.remove('play');
  });
});




