// Block direct AI Mode URLs
if (window.location.href.includes("udm=50")) {
    window.location.href = "https://www.google.com/";
}

// Function to remove AI Mode buttons
function removeAIMode() {

    document.querySelectorAll("a, button").forEach(el => {

        if (el.innerText && el.innerText.includes("AI Mode")) {
            el.remove();
        }

    });

}

// Watch for dynamic Google page changes
new MutationObserver(removeAIMode)
.observe(document.body, { childList: true, subtree: true });

// Run once immediately
removeAIMode();