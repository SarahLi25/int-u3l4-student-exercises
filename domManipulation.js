// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');

// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.


// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {

    myName.innerHTML="Sarah";


});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.


image1Button.addEventListener('click', function () {
    selector.src="https://img-new.cgtrader.com/items/2629650/0dea336301/large/happy-default-cube-green-funny-cartoon-style-lowpoly-3d-model-low-poly-obj-fbx-blend.jpg";

});


// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.

image2Button.addEventListener('click', function () {
    selector.src="https://img-new.cgtrader.com/items/2629662/4c2d6155f4/grid/happy-default-cube-orange-funny-cartoon-style-lowpoly-3d-model-low-poly-obj-fbx-blend.jpg";

});

// BONUS
// 7. Try using different event types for your buttons.
