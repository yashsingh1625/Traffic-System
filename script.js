let currentInterval = null;
let activeLight = null;

const meanings = {
    red: "STOP!",
    yellow: "READY TO GO",
    green: "GO!"
};

document.querySelectorAll('.light').forEach(light => {
    light.addEventListener('click', function() {
        const color = Array.from(this.classList).find(c => c === 'red' || c === 'yellow' || c === 'green');
        if (color) toggleLight(color);
    });
});

function toggleLight(color) {
    // Clear previous interval and reset previous light
    if (currentInterval) {
        clearInterval(currentInterval);
        activeLight.classList.remove('active');
    }

    // Get new light element
    activeLight = document.querySelector(`.${color}`);
    const infoDiv = document.getElementById('info');

    // Toggle active state and start blinking
    activeLight.classList.add('active');
    infoDiv.textContent = meanings[color];

    // Create blinking effect
    let isVisible = true;
    currentInterval = setInterval(() => {
        activeLight.style.opacity = isVisible ? 0.3 : 1;
        isVisible = !isVisible;
    }, 500);
}