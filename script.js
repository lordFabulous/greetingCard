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
    const formattedName = personName ? personName.charAt(0).toUpperCase() + personName.slice(1) : "";
    titleElement.textContent = `Happy Birthday ${formattedName}!`;
    return formattedName;
}

function fireConfetti() {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff6b81', '#2ed573', '#1e90ff', '#ffa502', '#ffffff']
    });
}

function revealSurprise(name) {
    const instructionArrow = document.getElementById('instruction-arrow');
    const triggerContainer = document.getElementById('trigger-container');
    instructionArrow.classList.add('hidden');
    triggerContainer.classList.add('hidden');

    const giftContainer = name == "Miki" ? document.getElementById('present-for-miki') : document.getElementById('cake-container');
    giftContainer.classList.remove('hidden');
    giftContainer.classList.add('fade-in');
}

function handleTriggerClick(name) {
    fireConfetti();
    revealSurprise(name);
}

function init() {
    // 1. Set the correct image before the user sees it
    const name = setupDynamicCard();

    // 2. Wait for the user to click
    const triggerContainer = document.getElementById('trigger-container');
    triggerContainer.addEventListener('click', () => { handleTriggerClick(name) });
}

init();