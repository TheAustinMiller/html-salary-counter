// Celebrity salary configuration
const celebrities = {
    timCook: {
        name: "Tim Cook",
        salary: 74600000,
        elementId: "cookCounter"
    },
    joshAllen: {
        name: "Josh Allen",
        salary: 55000000,
        elementId: "allenCounter"
    },
    yourDoctor: {
        name: "Your Doctor",
        salary: 239200,
        elementId: "doctorCounter"
    },
    leoDicap: {
        name: "Leonardo Dicaprio",
        salary: 30000000,
        elementId: "dicapCounter"
    },
    donaldTrump: {
        name: "Donald Trump",
        salary: 400000,
        elementId: "trumpCounter"
    },
    crisRonaldo: {
        name: "Cristiano Ronaldo",
        salary: 260000000,
        elementId: "crisCounter"
    },
    mrBeast: {
        name: "Mr. Beast",
        salary: 85000000,
        elementId: "beastCounter"
    },
    loganPaul: {
        name: "Logan Paul",
        salary: 8500000,
        elementId: "paulCounter"
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
createCounter('leoDicap');
createCounter('yourDoctor');
createCounter('donaldTrump');
createCounter('crisRonaldo');
createCounter('mrBeast');
createCounter('loganPaul');