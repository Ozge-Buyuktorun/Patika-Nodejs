// circle-area.js

// Get process arguments
// process.argv[0]: path to node command
// process.argv[1]: path to executed file
// process.argv[2]: first user parameter (radius)
const radius = parseFloat(process.argv[2]);

// Parameter validation
if (isNaN(radius)) {
  console.log("Please enter a valid number!");
  process.exit(1);
}

// Calculate the area of the circle (π × r²)
const area = Math.PI * Math.pow(radius, 2);

// Format the result and print to console
console.log(`R=${radius} Circle Area is -->  ${area.toFixed(2)}`);