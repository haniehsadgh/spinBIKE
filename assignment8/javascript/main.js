// let name = 'John'
// console.log(`my name is ${name} `);
// console.log(`my name is ${name.substring(0, 2)} `);
// handling slider
let slider = document.querySelector(".slider");
slider.src = 'product-images/bike-1.jpg'; // set default image for slider
console.log(slider);

let request;
let isRunning = false;
let i = 1;
let showPopup = true;
let timer;
const maxImageNo = 34;

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

const performAnimation = () =>{
    if (i > maxImageNo)
    {
        // isRunning = false;
        i = 1;
        slider.src = `product-images/bike-${i}.jpg`;
        cancelAnimationFrame(request);
    }

    slider.src = `product-images/bike-${i}.jpg`;
    i++;
    timer = setTimeout(function () {
        request = requestAnimationFrame(performAnimation);
    }, 100);
}

startBtn.addEventListener("click", function (){
    if(isRunning === false)
    {
        console.log('clicked');
        request = requestAnimationFrame(performAnimation);
    }
    isRunning = true;
    showPopup = false;

})

stopBtn.addEventListener("click", function (){
    // clearInterval(request);
    cancelAnimationFrame(request);
    clearTimeout(timer);
    isRunning = false;
    showPopup = false;
})



// pop up handling
// let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

// modalBtn.onclick = function () {
//     modal.style.display = "block"
// }
closeBtn.onclick = function () {
    modal.style.display = "none"
}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

setTimeout(function () {
    if (showPopup === true)
    {
        modal.style.display = "block"
    }

}, 3000)
