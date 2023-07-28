let counter = 0;
while (counter <= 10) {
  console.log("counter: ", counter);
  counter += 1;
}

const number = 20;
for (let i = 2; i < number; i += 1) {
  if (i % 2 === 1) {
    continue;
  }
  console.log("парне i: ", i);
}

const numberTwo = 7;
for (let ii = 1; ii <= 10; ii += 1) {
  res = numberTwo * ii;
  console.log("таблиця множення на 7: ", res);
}

const clients = [1, 2, 3, 4, 5];
let iiiiii = 0;
while (iiiiii < clients.length) {
    console.log("масив: ", clients[iiiiii]);
    iiiiii += 1
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (let iii = 0; numbers.length > iii; iii += 1) {
  if (iii === 7) {
    break;
}
    console.log("iii: ",numbers[iii]);
}

let n = 10;
for (let iiii = 0; iiii < n; iiii += 1) {
    console.log(iiii);
    if (iiii >= n) {
        break
    }
}

const numberThree = 20;
for (let iiiii = 0; iiiii <= numberThree; iiiii += 1) {
  if (iiiii % 3 === 0) {
    continue;
  }
  console.log("iiiii: ", iiiii);
}
