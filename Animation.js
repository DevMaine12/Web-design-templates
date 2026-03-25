const box = document.getElementById("box");
let position = 0;

function animate() {
    if (position >= 350) {
        position = 0; // Reset position to loop the animation
    } else {
        position += 1;
    }
    box.style.left = position + "px";
    box.style.top = position + "px";
    requestAnimationFrame(animate); // Call animate again for the next frame
}

animate(); // Start the animation
