let homeCT = document.getElementById("home-ct")
let guestCT = document.getElementById("guest-ct")
let count = 0

function incrementOne() {
    count += 1
    homeCT.textContent = count
}

function incrementTwo() {
    count += 2
    homeCT.textContent = count
}

function incrementThree() {
    count += 3
    homeCT.textContent = count
}

function incrementOneGst() {
    count += 1
    guestCT.textContent = count
}

function incrementTwoGst() {
    count += 2
    guestCT.textContent = count
}

function incrementThreeGst() {
    count += 3
    guestCT.textContent = count
}