let counter = 0;
while (counter <= 10) {
  console.log("counter: ", counter);
  counter += 1;
}

const number = 20;
for (let i = 1; i < number; i += 1) {
  if (i % 2 === 1) {
    continue;
  }
  console.log("парне i: ", i);
}

const numberTwo = 70;
for (let ii = 7; ii <= numberTwo; ii += 7) {
    console.log("таблиця множення на 7: ", ii);
}

const clients = [1];
while (clients <= 5) {
    console.log("масив: ", clients[0]);
    console.log("масив: ", clients[1] = 2)
    console.log("масив: ", clients[2] = 3)
    console.log("масив: ", clients[3] = 4)
    console.log("масив: ", clients[4] = 5)
}

for (let iii = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]; iii.length <= 11;) {
    console.log("iii: ",iii[0]);
    console.log("iii: ",iii[1]);
    console.log("iii: ",iii[2]);
    console.log("iii: ",iii[3]);
    console.log("iii: ",iii[4]);
    console.log("iii: ",iii[5]);
    if (iii[6]) {
     break;
}
console.log("iii: ",iii[7]);
console.log("iii: ",iii[8]);
console.log("iii: ",iii[9]);
}

let n = 10;
for (let iiii = 0; iiii < n; iiii += 1) {
    console.log(iiii);
    if (iiii >= n) {
        break
    }
}

const numberThree = 20;

for (let iiiii = 0; iiiii < number; iiiii += 1) {
  if (iiiii % 3 === 0) {
    continue;
  }

  console.log("iiiii: ", iiiii);
}
