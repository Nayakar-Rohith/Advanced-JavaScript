function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (called) {
            return result; // Return the result of the first call
        }
        called = true;
        result = fn.apply(this, args); // Call the original function
        return result; // Return the result of the first call
    };
}

function init() {
    console.log("Initialized!");
    return "Setup complete";
  }
  
  const initializeOnce = once(init);
  
  console.log(initializeOnce()); // "Initialized!" + "Setup complete"
  console.log(initializeOnce()); // Just returns "Setup complete" (no log)
  console.log(initializeOnce()); // Still silent
  