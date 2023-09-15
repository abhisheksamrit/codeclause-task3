
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("plagiarism-form");
    const textInput = document.getElementById("text-input");
    const resultsDiv = document.getElementById("plagiarism-results");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const text = textInput.value;

        const plagiarismPercentage = Math.random()* 100;

        // Display the result
        resultsDiv.innerHTML = `<p>Plagiarism Percentage:${plagiarismPercentage.toFixed(2)}%</p>`;
    });
});
