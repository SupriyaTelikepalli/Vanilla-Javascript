// Initially hide the output element
document.getElementById("output").style.visibility = "hidden";

// Get the input element for pounds
var textInput = document.getElementById('lbsInput');

// Add event listener for the 'input' event
textInput.addEventListener("input", function(e) {
    // Show the output once input starts
    document.getElementById("output").style.visibility = "visible";

    // Convert the input value (in pounds) to grams, kilograms, and ounces
    let gramsValue = (textInput.value) * 453.592;
    document.getElementById('gramsOutput').innerHTML = gramsValue;

    let kgsValue = (textInput.value) * 0.453592;
    document.getElementById('kgOutput').innerHTML = kgsValue;

    let ounceValue = (textInput.value) * 16;
    document.getElementById('ozOutput').innerHTML = ounceValue;
});
