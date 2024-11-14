// Function to generate Pascal's Triangle recursively
function pascalRecursive(n, a) {
    // Base case: if n < 2, return the current array
    if (n < 2) return a;

    // Get the previous row
    var prevRow = a[a.length-1];
    var curRow = [1];

    // Calculate current row values
    for (var i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i-1];
    }
    curRow.push(1);
    a.push(curRow);

    return pascalRecursive(n-1, a); // Call the function recursively
}

// Initialize numRows with a value
const numRows = 5; // You can change this value as needed

// Generate Pascal's Triangle
var triangle = pascalRecursive(numRows, [[1]]);

// Print the triangle
for(var i = 0; i < triangle.length; i++) {
    console.log(triangle[i].join(' ') + "\n");
}