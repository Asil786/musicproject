
var ButtonClick = document.querySelectorAll(".drum").length;

for (var i = 0; i < ButtonClick; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        function () {    // Anonymous Function
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            ButtonAnimation(buttonInnerHTML)
        }
    );
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
     ButtonAnimation(event.key)
}
);


function makeSound(key) {
    switch (key) {
        case "s":
            var tom1 = new Audio('Sounds/snare.mp3');
            tom1.play();
            break;
        case "r":
            var tom2 = new Audio('Sounds/2.wav');
            tom2.play();
            break;
        case "g":
            var tom3 = new Audio('Sounds/d2.wav');
            tom3.play();
            break;
        case "m":
            var tom4 = new Audio('Sounds/d4.wav');
            tom4.play();
            break;
        case "p":
            var snare = new Audio('Sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var crash = new Audio('Sounds/3.wav');
            crash.play();
            break;
        case "n":
            var kick = new Audio('Sounds/d7.wav');
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function ButtonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(
        function () {
            activeButton.classList.remove("pressed");
        },
        10
    )
}