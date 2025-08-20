// Celebrity salary configuration
const celebrities = {
    timCook: {
        name: "Tim Cook",
        salary: 76400000,
        elementId: "cookCounter"
    },
    joshAllen: {
        name: "Josh Allen",
        salary: 55000000,
        elementId: "allenCounter"
    }
};

// Track start time
const startTime = Date.now();

// Create counter for a specific celebrity
function createCounter(celebrityKey) {
    const celebrity = celebrities[celebrityKey];
    const perSecondRate = celebrity.salary / (365 * 24 * 60 * 60);
    const counterElement = document.getElementById(celebrity.elementId);
    
    function updateCounter() {
        const elapsedSeconds = (Date.now() - startTime) / 1000;
        const currentAmount = elapsedSeconds * perSecondRate;
        counterElement.textContent = '$' + currentAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    }
    
    setInterval(updateCounter, 100);
    updateCounter();
}

// Initialize counters
createCounter('timCook');
createCounter('joshAllen');