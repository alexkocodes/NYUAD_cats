
let meow = new Howl({
  src: ['./sounds/meow.wav']
});
let meow2 = new Howl({
  src: ['./sounds/meow2.wav']
});
let meow3 = new Howl({
  src: ['./sounds/meow3.wav']
});

all_meows = [meow, meow2, meow3];
let cats = document.getElementsByClassName("cat");
for (let i=0; i<cats.length; i++){
    cats[i].addEventListener("click", function(event){
        all_meows[i].play();
    })
}