// var numberOfButoon = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfButoon; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",handleClick)

// }
// function handleClick() {
//      alert(this.innerHTML);
// }

// var numberOfButoon = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfButoon; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",handleClick)
// function handleClick() {

//     var buttonInnerHTML = this.innerHTML;
//     switch (buttonInnerHTML) {
//         case "w":
//            var tom1 = new Audio("sounds/tom-1.mp3");
//            tom1.play();
//         break;

//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//         break;

//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//         break;

//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//         break;
//     }
// }
// }


// var audio = new Audio('sounds/crash.mp3');
//     audio.play();

//Detecting Button Press

var numberOfButoon = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfButoon; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",handleClick)
function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
}

// Detecting Key pressed
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
        break;
    default: console.log(buttonInnerHTML);
    }
}
// function buttonAnimation(){
//    var activeButton document.querySelector("." + current);
//    activeButton.classlist.add("pressed")
// }