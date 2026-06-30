import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/+esm';

function setupDynamicCard() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const imageType = urlParams.get('type');
    const triggerImage = document.getElementById('trigger-image');
    if (imageType === 'gift') {
        triggerImage.src = './images/twirl-gift.apng';
    } else {
        triggerImage.src = './images/envelope-svgrepo-com.svg'; // The default fallback
    }

    const personName = urlParams.get('name');
    const titleElement = document.getElementById('birthday-title');
    if (personName) {
        // Capitalize the first letter just in case it was typed in lowercase
        const formattedName = personName.charAt(0).toUpperCase() + personName.slice(1);
        titleElement.textContent = `Happy Birthday, ${formattedName}!`;
    } else {
        titleElement.textContent = "Happy Birthday!";
    }
}

function fireConfetti() {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff6b81', '#2ed573', '#1e90ff', '#ffa502', '#ffffff']
    });
}

function revealSurprise() {
    const instructionArrow = document.getElementById('instruction-arrow');
    const triggerContainer = document.getElementById('trigger-container');
    const cakeContainer = document.getElementById('cake-container');

    instructionArrow.classList.add('hidden');
    triggerContainer.classList.add('hidden');
    cakeContainer.classList.remove('hidden');
    cakeContainer.classList.add('fade-in');
}

function handleTriggerClick() {
    fireConfetti();
    revealSurprise();
}

function init() {
    // 1. Set the correct image before the user sees it
    setupDynamicCard();

    // 2. Wait for the user to click
    const triggerContainer = document.getElementById('trigger-container');
    triggerContainer.addEventListener('click', handleTriggerClick);
}

init();