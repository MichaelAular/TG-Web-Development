let inputData = []


function input() {
    const naam = document.querySelector('.naam').value;
    const displayNaam = document.querySelector('.displayNaam');
    displayNaam.innerText = naam;

    const telefoonnummer = document.querySelector('.tel').value;
    const displayTel = document.querySelector('.displayTel');

    const straatnaam = document.querySelector('.straat').value;
    const displayStraat = document.querySelector('.displayStraat');
    displayStraat.innerText = straatnaam;

    const huisnummer = document.querySelector('.huisnummer').value;
    const displayHuisNummer = document.querySelector('.displayHuisNummer');
    displayHuisNummer.innerText = huisnummer + ',';

    const postcode = document.querySelector('.postcode').value;
    const displayPostcode = document.querySelector('.displayPostcode');
    displayPostcode.innerText = postcode + ',';

    const stad = document.querySelector('.stad').value;
    const displayStad = document.querySelector('.displayStad');
    displayStad.innerText = stad;

    const email = document.querySelector('.email').value;
    const displayEmail = document.querySelector('.displayEmail');
    displayEmail.innerText = email;

    inputData.push(naam, telefoonnummer, straatnaam, huisnummer, postcode, stad, email)
    console.log(inputData)

    if (inputData[1].length === 10) {
        let char1 = inputData[1].charAt(0)
        console.log(char1)

        if (char1 == 0)
        displayTel.innerText = telefoonnummer.replace('0', '+31');
    } 
    else {
        incorrectTel();
    }
    inputData = [];
}

function incorrectTel() {
    console.log('incorrectTel')
}