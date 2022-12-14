// Get the div element where the images will be displayed
var imageDiv = document.getElementById("imageDiv");

// Set up an array with the filenames of the images
var imageFilenames = ["./content/asmenines/2.JPG", "./content/asmenines/3.JPG", "./content/asmenines/4.JPG"];

// Set the initial index to 0
var currentIndex = 0;

// Flag to keep track of whether the image change interval is running
var intervalRunning = true;

// Function to change the image
function changeImage() {
    // Check if the interval is running
    if (!intervalRunning) {
        return;
    }

    // Get the image element in the div
    const imageElement = document.querySelectorAll('img')[0];

    // Update the src attribute of the image to display the new image
    imageElement.src = imageFilenames[currentIndex];

    // Increment the index for the next time this function is called
    currentIndex = (currentIndex + 1) % imageFilenames.length;
}

// Function to start the image change interval
function startInterval() {
    intervalRunning = true;
}

// Function to stop the image change interval
function stopInterval() {
    intervalRunning = false;
}

// Call the changeImage function every 3 seconds
setInterval(changeImage, 3000);

// Add event listeners to start and stop the interval when the cursor
// is over and not over the image, respectively
imageDiv.addEventListener("mouseover", stopInterval);
imageDiv.addEventListener("mouseout", startInterval);



var fs = reqnpm ruuire('fs');

// The path to the folder containing the files
const folderPath = './content/asmenines';

// Read the contents of the folder
const files = fs.readdirSync(folderPath);

// Generate an array of values from the file names
const values = files.map((fileName) => {
    // Use the file name to generate the value
    return generateValueFromFileName(fileName);
});

console.log(values); // Output: [value1, value2, value3, ...]
