
// const imagePath = ["./images/carsh.png", "./images/kick.png", "./images/snare.png", "./images/tom1.png", "./images/tom2.png", "./images/tom3.png", "./images/tom4.png"];

const soundPath = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3",]



document.addEventListener("DOMContentLoaded", function () {

    var drums = document.querySelectorAll(".drum");      
    for (var i = 0; i < drums.length; i++) {
        drums[i].addEventListener('click', function () {
            var buttonText = this.innerHTML;
            console.log(buttonText);
            playSoundByKey(buttonText)
            buttonAnimation(buttonText)
        });
    }



    document.addEventListener("keydown", function (event) {
        var key = event.key;
        playSoundByKey(key);
        buttonAnimation(key)
    })

    function playSoundByKey(letter) {
        switch (letter) {
            case "w":
                var source = soundPath[0];
                playSound(source)
                break;
            case "a":
                var source = soundPath[1];
                playSound(source);
                break;
            case "s":
                var source = soundPath[2];
                playSound(source);
                break;
            case "d":
                var source = soundPath[3];
                playSound(source);
                break;
            case "j":
                var source = soundPath[4];
                playSound(source);
                break;
            case "k":
                var source = soundPath[5];
                playSound(source);
                break;
            case "l":
                var source = soundPath[6];
                playSound(source);
                break;
            default:
                break;
        }
    }

    function playSound(source) {
        var audio = new Audio(source)
        audio.play();
    }

    function buttonAnimation(letter){
        var activeBtn = document.querySelector("."+letter)
        activeBtn.classList.toggle("pressed")
    }
})
