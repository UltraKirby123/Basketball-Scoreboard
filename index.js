let homeCT = document.getElementById("home-ct")
let guestCT = document.getElementById("guest-ct")
let count = 0
let countGst = 0

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
    countGst += 1
    guestCT.textContent = countGst
}

function incrementTwoGst() {
    countGst += 2
    guestCT.textContent = countGst
}

function incrementThreeGst() {
    countGst += 3
    guestCT.textContent = countGst
}