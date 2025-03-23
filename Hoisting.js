
// Hoisting is a JavaScript mechanism where variables and function declarations 
// are moved to the top of their containing scope during the compile phase.
// This means that you can use functions and variables before they are declared.
// However, only the declarations are hoisted, not the initializations.

hoistingExample(); // Calling the function before its declaration
function hoistingExample() {
    console.log(myVar); // undefined, because myVar is hoisted but not initialized
    var myVar = 5; //hoisting happens here as it is uses var keyword
    console.log(myVar); // 5, now myVar is initialized
}

hoistingExample();

// output:
// undefined    
// 5
// undefined    
// 5
