// test2.js
// This script has an intentional linting issue and a potential security risk
const unusedVariable = 42;

const unsafeFunction = () => {
  eval("console.log('This is unsafe')");
};

unsafeFunction(); // Test unsafe code
