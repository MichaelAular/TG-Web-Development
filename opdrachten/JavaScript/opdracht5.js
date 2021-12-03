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
const dutchSports = ["Voetbal⚽", "Hockey🏑", "Schaatsen⛸"];
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

// // // 5.2D - E - F
for (let i=1; i < 4; i++) {

  console.log("5.2: for loop draait: " + i + " keer");
  for (let i1 = 0; i1 < 11; i1++) {
    console.log("5.2 D: for loop van 1 logt: " + i1);
  }
  for (let i2 = 0; i2 < 21; i2++, i2++) {
    console.log("5.2 E: for loop van 2 logt: " + i2);
  }
  for (let i3 = 0; i3 < 31; i3++, i3++, i3++) {
    console.log("5.2 F: for loop van 3 logt: " + i3);
  }
}

// // // 5.2G
let array52g = [0,1];

for (let i=0; i <= 50; i++) {
    let eennaLaatstGetal = array52g.slice((array52g.length - 2), (array52g.length - 1));
    let laatstGetal = array52g.slice((array52g.length - 1));
    let nieuwGetal = +laatstGetal + +eennaLaatstGetal;
    array52g.push(nieuwGetal)
}
console.log("5.2 G: "+ array52g);

// // // 5.2H
const array52h = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];

for (let loop = array52h.length - 1; loop > 0; loop--) {
    let c1 = 0;
    let c2 = 1;

  for (let i = 0; i < loop; i++) {

    if (array52h[c1] > array52h[c2]) {

         b = array52h[c1];
        array52h[c1] = array52h[c2];
        array52h[c2] = b;
        c1++, c2++;

    } else {
        c1++, c2++;
    }
  }
}

console.log("5.2 H: " + array52h);

// // // 5.3A
dutchSports.push("Zeilen⛵", "Zwemmen🏊‍♂️");
console.log("5.3 A: " + dutchSports);

// // // 5.3B
dutchSports.unshift("Volleybal🏐");
console.log("5.3 B: " + dutchSports);

// // // 5.3C
const ballSports = ["Voetbal⚽", "Hockey🏑", "Volleybal🏐"];
console.log("5.3 C: " + ballSports);

// // // 5.3D
dutchSports.splice(0, 3);
console.log("5.3 D: " + dutchSports);

// // // 5.3E
dutchSports.sort();
console.log("5.3 E: " + dutchSports);

// // // 5.3F
for (const item_dS of dutchSports) {
  console.log("5.3 F: " + item_dS)
}
for (const item_bS of ballSports) {
  console.log("5.3 F: " +item_bS)
}

// // // 5.3G
const sportsLenght = dutchSports.map(x => x.length);
console.log("5.3 G: " +sportsLenght);

// // // 5.4
let arrayLike = document.querySelectorAll('div')

// // // 5.4A
const antw54a = Array.from(arrayLike);
console.log(antw54a)

// // // 5.4B
function drempelVijf(array52h) {
  return array52h > 5;
}
console.log("5.4 B: " + array52h.filter(drempelVijf))
// Alles boven de 5

// // // 5.4C
console.log("5.4 C: " + array52h.find(drempelVijf))
// eerste waarde die voldoet aan deze eis (in dit geval groteer dan 5)

// // // 5.4D
console.log("5.4 D: " + array52h.some(drempelVijf))
// checkt of er een waarde (uit een functie!) in de array zit die voldoet aan de eis (er zit iets tussen groter dan 5 dus true)

// // // 5.4E
console.log("5.4 E: " + array52h.every(drempelVijf))
// checkt of alle waardes die in de array zittenvoldoen aan de eis (niet alles is groter dan 5 dus false)

// // // 5.4F
console.log("5.4 F: " + array52h.includes(4))
// checkt of er een waarde in de array zit die voldoet aan de eis (er zit iets tussen groter dan 5 dus true)