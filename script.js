

let val1 = document.getElementById('value1')
let val2 = document.getElementById('value2')
let val3 = document.getElementById('value3')
let inpSpeed = document.getElementById('inpSpeed')
let stopButton = document.getElementById('stopButton')
let spinButton = document.getElementById('SpinButton')
let value = document.getElementsByClassName('value')
let values = [
    '😍', '🥰', '🥳', '🤩', '🤯', '👿', '👻'
]

function getRandomValue() {
    return values[parseInt(Math.random() * 7)]
}
window.confirm("Enter Speed")
// setInterval(() => { 
//     val1.innerText = getRandomValue()
//     val2.innerText = getRandomValue()
//     val3.innerText = getRandomValue()
// }, 500)

let animationId;
function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {
        val1.innerText = getRandomValue();
        val2.innerText = getRandomValue();
        val3.innerText = getRandomValue();
        // val1.innerText = values[1]
        // val2.innerText = values[1]
        // val3.innerText = values[1]
    }, 1000 / newSpeed)
}

$(document).ready(function () {
    $("#stopButton").click(function () {
        clearInterval(animationId)
        $(".value").css("animation-play-state", "paused");
        let slot1 = $('#value1').text()
        let slot2 = $('#value2').text()
        let slot3 = $('#value3').text()
        if ((slot1 == slot2) && (slot2 == slot2) && (slot1 == slot3)) {
            alert("Congrats you won!!!!")
        } else {
            alert("Sorry, Try again!!!")
        }
    });
    $("#SpinButton").click(function () {
        $(".value").css("animation-play-state", "running");

        // inpSpeed.val() = function (ev) {
        //     document.documentElement.style.setProperty('--speed', ev.target.value)
        //     updateAnimation(ev.target.value)
        // }
        // alert("Ready to Start!!")
        document.documentElement.style.setProperty('--speed', speedseed)
        updateAnimation(speedseed);
    });
});

// stopButton.onclick = function () {
//     // document.documentElement.style.setProperty('--speed', 0)
//     // clearInterval(animationId)
//     let slot1 = $('#value1').text()
//     let slot2 = $('#value3').text()
//     let slot3 = $('#value3').text()
//     // console.log(slot1)
//     // console.log(slot3)
//     // console.log(slot2)
//     if ((slot1 == slot2) && (slot2 == slot2) && (slot1 == slot3)) {
//         alert("Congrats you won!!!!")
//     } else {
//         alert("Sorry, Try again!!!")
//     }
// }
// alert("Enter Speed between 1 to 10.")
let speedseed;
inpSpeed.onchange = function (ev) {
    speedseed = ev.target.value;
    // document.documentElement.style.setProperty('--speed', ev.target.value)
    // updateAnimation(ev.target.value)
}