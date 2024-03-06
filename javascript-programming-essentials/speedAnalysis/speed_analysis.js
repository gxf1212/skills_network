texts = ["The quick brown fox jumps over the lazy dog.",
    "The focus should instead be on ensuring that the environment where PyCharm and your script operate has the correct PATH settings.",
    "Welcome to Introduction to Math and Date Objects. After watching this video, you will be able to explain the significance of the math object and implement mathematical operations.",
    "This example shows the different ways to create date objects representing the current date and time."]
let testText;
let startTime, endTime;
function startTest() {
    // Use the random index to select a text
    let randomIndex = Math.floor(Math.random() * texts.length);
    let testText = texts[randomIndex];

    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("userInput").readOnly = false;
    document.getElementById("userInput").value = "";
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}
function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    var typedLength = userTypedText.length

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Characters Typed: " + typedLength + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}