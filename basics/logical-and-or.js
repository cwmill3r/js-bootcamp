// logical and operator &&
// logical or operator ||
let temp = -15

if (temp >= 60 && temp <= 90) {
    console.log('it is pretty nice out')
}

if (temp <= 0 || temp >= 120) {
    console.log('it is dangerous to go outside')
}

let isGuest1Vegan = false
let isGuest2Vegan = false

// are both vegan - only offer vegan dishes
// at least 1 vegan - offer both
// no vegan - no vegan options.

if (isGuest1Vegan === true && isGuest2Vegan === true) {
    console.log('only vegan options')
} else if ((isGuest1Vegan === true && isGuest2Vegan === false) || ((isGuest1Vegan === false && isGuest2Vegan === true))) {
    console.log('some of both options')
} else if (isGuest1Vegan === false && isGuest2Vegan === false) {
    console.log('no vegan options necessary')
}

if (isGuest1Vegan && isGuest2Vegan) {
    console.log("only vegan options");
} else if (isGuest1Vegan || isGuest2Vegan) {
    console.log('offer some vegan options')
} else {
    console.log('offer anything on the menu')
}