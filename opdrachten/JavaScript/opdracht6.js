// // // 6.1 A // // //
let pet1 = new Object();
pet1.soort = "Beer"
pet1.naam = "Poeh"
console.log(pet1)

let pet2 = {
    soort: "Varken",
    naam: "Knorrtje"
}
console.log(pet2)

function petInput(soort, naam) {
    this.soort = soort
    this.naam = naam
}
let pet3 = new petInput ("Kangoeroe", "Roe")
console.log(pet3)

let pet4 = new function () {
    this.soort = "Tijger"
    this.naam = "Tijgertje"
}
console.log(pet4)

class petClass {
    constructor(soort, naam) {
        this.soort = "Iejoor"
        this.naam = "Ezel"
    }
    writeBadCode() {
        console.log("Oeps!")
    }
}
let pet5 = new petClass("Konijn", "Konijn")
console.log(pet5)

// // // 6.1 B // // //
Object.create(pet1);
pet1.soort = "tekenfilmfiguur"
console.log(pet1)

Object.create(pet2);
pet2.soort = "tekenfilmfiguur"
console.log(pet2)

Object.create(pet3);
pet3.soort = "tekenfilmfiguur"
console.log(pet3)

Object.create(pet4);
pet4.soort = "tekenfilmfiguur"
console.log(pet4)

Object.create(pet5);
pet5.soort = "tekenfilmfiguur"
console.log(pet5)

// // // 6.1 C // // //


let person0 = {
    name: "Piet",
    age: 69
}

let person1 = {
    name: "Kees",
    age: 72
}

let person2 = {
    name: "Hans",
    age: 63
}

let person3 = {
    name: "Jan",
    age: 50
}

let person4 = {
    name: "Tom",
    age: 49
}

let person5 = {
    name: "Gerard",
    age: 41
}

let person6 = {
    name: "Eric",
    age: 58
}

let person7 = {
    name: "Bert",
    age: 52
}

let person8 = {
    name: "Alfons",
    age: 45
}

let person9 = {
    name: "Robbert",
    age: 46
}

let allPersons = [person0, person1, person2,
    person3, person4, person5, person6,
    person7, person8, person9];

allPersons.sort(function(a, b){return a.age - b.age});
console.log(allPersons)

// // // 6.2 A en B// // //

const club0 = {
    name: "Force Electro",
    type: "Frisbee",
    leden: 23,
    contactinfo: {
        adres : "Groteweg 1",
        telefoonnummer: "5552345555",
        contactpersoon: "Frits van Bee"
    }
}
console.log(club0)


// // // 6.2 C // // //

function clubInput(name, type, leden, adres, tel, contactpersoon) {
  this.name = name
  this.type = type
  this.leden = leden
  this.adres = adres
  this.tel = tel
  this.contactpersoon = contactpersoon
}


let club1 = new clubInput ("Force Electro II", "Frisbee", 23, "Wegisweg 1, Zutphen","555-121212", "F. van Bee");
let club2 = new clubInput ("Knit Knot","Breiclub", 12, "Melkweg 12, Amsterdam", "555-98765", "Mvr Schaap");
let club3 = new clubInput ("Kicken!", "Boksschool", 455, "Slagomarm 1, Den Haag", "555-000123", "M. Ali");
let club4 = new clubInput ("Toet noch Blazen", "Muziekschool", 2, "Prinsegracht 12, Den Haag", "555-234567", "Dhr C. Zuiderwijk");
let club5 = new clubInput ("Club Astra", "Technoclub", 7056, "Pr. Beatrixlaan 582", "555-23456", "Dhr Vacca");

let clubs = [club1, club2, club3, club4, club5]
clubs.forEach((log) => {
  console.log ([log.name], [log.tel], [log.contactpersoon])
});
