let btn = document.getElementById("btn");
let input = document.getElementById("ip");
let output = document.getElementById("output");

btn.addEventListener("click", function () {
  // Retrieve input value and convert it to a number
  const inputValue = Number(input.value);

  // Step 1: Create the first promise that resolves after 2 seconds
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputValue); // Resolve with the input value
      output.textContent = `Result: ${inputValue}`;
    }, 2000);
  });

  // Step 2: Multiply the number by 2 and resolve after 1 second
  promise
    .then((result) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newResult = result * 2;
          output.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    // Step 3: Subtract 3 from the result
    .then((result) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newResult = result - 3;
          output.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    // Step 4: Divide the result by 2
    .then((result) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newResult = result / 2;
          output.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    // Step 5: Add 10 to the result
    .then((result) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newResult = result + 10;
          output.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    // Step 6: Show the final result
    .then((result) => {
      output.textContent = `Final Result: ${result}`;
    })
    .catch((error) => {
      console.error(error);
    });
});
