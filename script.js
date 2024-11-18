// Tack 3 and 4
function calculateSumAndAverage(numbers) {
    

    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / numbers.length;
    return { sum, average };
}

function processNumbers() {
    const input = document.getElementById("numbersInput").value;

    const numbers = input
        .split(",")
        .map(num => parseFloat(num.trim()));


    const result = calculateSumAndAverage(numbers);

    document.getElementById("sum").textContent = `The Total: ${result.sum}`;
    document.getElementById("average").textContent = `The Average: ${result.average}`;
}
