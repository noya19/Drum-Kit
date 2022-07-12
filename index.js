// event listener for clicks on button

var b_list = document.querySelectorAll(".drum");
function handleclick(){
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
}

for(var i=0; i<b_list.length; i++){
    b_list[i].addEventListener("click", handleclick);
}


// console.log(this.classList.toggle("isselected"));       // fetches the current obj.

// event listener for keyboard clicks

document.addEventListener(
"keypress",
function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}

);

// main function for generating sound.
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snr = new Audio('sounds/snare.mp3');
            snr.play();
            break;
        case "k":
            var crs = new Audio('sounds/crash.mp3');
            crs.play();
            break;
        case "l":
            var kb = new Audio('sounds/kick-bass.mp3');
            kb.play();
            break;

        default:
            console.log(key+" "+"is not assigned any sound");
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
