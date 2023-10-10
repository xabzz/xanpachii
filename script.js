// Function to animate typing
function typeText(element, text, speed) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i <= text.length) {
            element.innerHTML = text.substring(0, i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}

// Play custom music when the page is clicked
let musicPlayed = false;
document.body.addEventListener("click", function () {
    if (!musicPlayed) {
        const audio = new Audio("gang.mp3");
        audio.play();
        musicPlayed = true;
    }
});
// Set the array of titles for animation
const animatedTitles = [
    "@xanpachi - still in dev",
    "Click for music.",
    // Add more titles as needed
];

const titleElement = document.getElementById("animated-title");

// Function to update the tab title with animation
function updateTabTitle() {
    let index = 0;

    // Update the title periodically
    setInterval(() => {
        titleElement.innerText = animatedTitles[index];
        index = (index + 1) % animatedTitles.length;
    }, 2000); // Change title every 2 seconds (adjust as needed)
}

// Start the animation when the page loads
updateTabTitle();

