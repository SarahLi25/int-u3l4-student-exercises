let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// - What do you think .src does?


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener('click', function() {
    header.innerHTML = "🤯 wow cool neeto Sarah";
    img.src = "https://img-new.cgtrader.com/items/2632665/73d12ea1ec/large/happy-default-cube-funny-cartoon-style-lowpoly-3d-model-73d12ea1ec.jpg";
});


