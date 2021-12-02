// // // 5.1A
let array51a = [7, 4, 3, 9, 1, 6, 2, 8, 10, 5]
console.log("5.1 A: " + array51a)

// // // 5.1B
let array51b = ["appel🍎", "aardbei🍓", "kiwi🥝", "banaan🍌", "perzik🍑"]
console.log("5.1 B: " + array51b)

// // // 5.1C
console.log("5.1 C: " + array51b.slice(0, 2))

// // // 5.1D
const randomNumber = array51a[Math.floor(Math.random() * array51a.length)]

console.log("5.1 D: randomNumber = " + randomNumber)
console.log("5.1 D: " + array51b[randomNumber])

// // // 5.1E
console.log("5.1 E: " + array51b.length)

// // // 5.1F
let random51F = array51a.length % randomNumber;
console.log("5.1 F: " + array51b[random51F]);

// // // 5.1G
array51b.splice(0, 1, "peer🍐");
console.log("5.1 G: " + array51b);

// // // 5.1H
array51b.shift();
array51b.shift();
array51b.unshift("peer🍐");
array51b.unshift("aardbei🍓")
console.log("5.1 H: " + array51b)

// // // 5.2A
const dutchSports = ["voetbal", "Hockey", "Schaatsen"]
    console.log("5.1 A: " + dutchSports[0])
    console.log("5.1 A: " + dutchSports[1])
    console.log("5.1 A: " + dutchSports[2])

// // // 5.2B
for (const index in dutchSports) {
    console.log("5.2 B: " + index)
}

for (const item of dutchSports) {
    console.log("5.2 B: " + item)
}

// // // 5.2C
for (let i=0; i < 21; i++, i++) {
    console.log("5.2 C: even is: " + i)
}

// // // 5.2D i = 1
for (let i=1; i < 4; i++) {

  console.log("5.2: for loop draait: " + i + " keer");
  for (let i1 = 0; i1 < 11; i1++) {
    console.log("5.2 D: for loop van 1 logt: " + i1);
  }
  for (let i2 = 0; i2 < 21; i2++, i2++) {
    console.log("5.2 E: for loop van 2 logt: " + i2);
  }
  for (let i3 = 0; i3 < 31; i3++, i3++, i3++) {
    console.log("5.2 E: for loop van 3 logt: " + i3);
  }

}
