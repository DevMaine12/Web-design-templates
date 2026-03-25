// Define the type for the animated element
const box = document.getElementById("box") as HTMLElement | null;

if (box) {
    let position: number = 0;
    const speed: number = 1;
    const maxPos: number = 350;

    function animate(): void {
        if (position >= maxPos) {
            position = 0; // Reset position
        } else {
            position += speed;
        }

        // Type assertion to ensure style properties are accessible
        (box.style.left as string) = `${position}px`;
        (box.style.top as string) = `${position}px`;

        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(animate);
    }

    animate(); // Start the animation
} else {
    console.error("The element with ID 'box' was not found.");
}
