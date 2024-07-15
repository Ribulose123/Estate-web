document.addEventListener('DOMContentLoaded', () => {
    const ideaLeft = document.getElementById('idea-left');
    const ideaRight = document.getElementById('idea-right');
    const ideaLeftDisplay = document.getElementById('idea-left-display');
    const ideaRightDisplay = document.getElementById('idea-right-display');

    ideaLeft.addEventListener('change', () => {
        ideaLeftDisplay.textContent = ideaLeft.value;
    });

    ideaRight.addEventListener('change', () => {
        ideaRightDisplay.textContent = ideaRight.value;
    });
});
