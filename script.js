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
    },
    bigX: {
        name: "BigXThaPlug",
        salary: 1400000,
        elementId: "xCounter"
    }
};

// Track start time
const startTime = Date.now();

// Store interval IDs for cleanup
const intervalIds = {};

// Create counter for a specific celebrity
function createCounter(celebrityKey) {
    const celebrity = celebrities[celebrityKey];
    const perSecondRate = celebrity.salary / (365 * 24 * 60 * 60);
    const counterElement = document.getElementById(celebrity.elementId);

    function updateCounter() {
        const elapsedSeconds = (Date.now() - startTime) / 1000;
        const currentAmount = elapsedSeconds * perSecondRate;
        counterElement.textContent = '$' + currentAmount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    // Clear existing interval if it exists
    if (intervalIds[celebrityKey]) {
        clearInterval(intervalIds[celebrityKey]);
    }

    // Set new interval
    intervalIds[celebrityKey] = setInterval(updateCounter, 100);
    updateCounter();
}

// Initialize all counters
Object.keys(celebrities).forEach(key => createCounter(key));

// Function to update user's salary
function updateYourSalary() {
    const salaryInput = document.getElementById('salaryInput');
    const newSalary = parseFloat(salaryInput.value) || 0;

    // Ensure the 'you' object exists in celebrities
    if (!celebrities.you) {
        celebrities.you = {
            name: "You",
            salary: 0,
            elementId: "youCounter"
        };
    }

    // Update the salary in the celebrities object
    celebrities.you.salary = newSalary;

    // Recreate the counter with the new salary
    createCounter('you');
}