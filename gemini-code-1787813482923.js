document.addEventListener("DOMContentLoaded", () => {
    const gameButtons = document.querySelectorAll(".game-btn");
    const gameFrame = document.getElementById("game-frame");

    // Load the first game by default if buttons exist
    if (gameButtons.length > 0) {
        const firstGameUrl = gameButtons[0].getAttribute("data-url");
        gameFrame.src = firstGameUrl;
        gameButtons[0].classList.add("active");
    }

    // Add click event to all buttons
    gameButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            gameButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add active class to the clicked button
            this.classList.add("active");
            
            // Update the iframe source
            const url = this.getAttribute("data-url");
            gameFrame.src = url;
        });
    });
});