const input = 5;

// function Triangle(input) {
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= i; j++) {
//       process.stdout.write("*");
//     }
//     console.log("");
//   }
// }

// function reverseTriangle(input) {
//   for (let i = input; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       process.stdout.write("*");
//     }
//     console.log("");
//   }
// }

// function flippedTriangle(input) {
//   for (let i = 1; i <= input; i++) {
//     for (let e = 1; e <= input - i; e++) {
//       process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//       process.stdout.write("*");
//     }
//     console.log("");
//   }
// }

// flippedTriangle(input);
// function flippedReverceTriangle(input) {
//   for (let i = input; i >= 1; i--) {
//     for (let e = 1; e <= input - i; e++) {
//       process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//       process.stdout.write("*");
//     }
//     console.log("");
//   }
// }

// flippedReverceTriangle(input);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }

arr.forEach((element) => {
  console.log(element);
});
