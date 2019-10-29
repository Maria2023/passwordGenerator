// this is where I write all the vars
var chosenLength;
var passwordValue;

// this is where I get all the elements into a var
var genButton = document.getElementById('genButton');
var passInput = document.getElementById('passInput');

// this is where I will write all the functions
function ask() {

    let number = prompt('What is the length of your password? (between 8 and 128)')

    if (number < 8) {
        alert('YOU MUST ENTER 8 OR ABOVE!!')
    } else if (number > 128) {
        alert('YOU MUST ENTER BELOW 128')
    } else {
        chosenLength = number;
        passwordMaker()
    }

}

function passwordMaker(length) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var specials = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]
    var allUserChoices = [];

    var numberUser = window.confirm('Use Numbers?');
    var uppersUser = window.confirm('Use Uppers?');
    var lowrUser = window.confirm('Use Lowers?');
    var specialUser = window.confirm('Use Specials?');
    var password = ''


    console.log("numberUser", numberUser);
    console.log("uppersUser", uppersUser);
    console.log("lowrUser", lowrUser);
    console.log("specialrUser", specialUser);


    // Guarantee one character in password for each user choice 
    if (numberUser) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
        allUserChoices = allUserChoices.concat(numbers);
    }
    if (uppersUser) {
        password += uppers[Math.floor(Math.random() * uppers.length)];
        allUserChoices = allUserChoices.concat(uppers);
    }
    if (lowrUser) {
        password += lowers[Math.floor(Math.random() * lowers.length)];
        allUserChoices = allUserChoices.concat(lowrUser);
    }
    if (specialUser) {
        password += specials[Math.floor(Math.random() * specials.length)];
        allUserChoices = allUserChoices.concat(specials);
    }

    console.log("allUserChoices arrray:", allUserChoices)


    // To complete my password I have to keep adding a random character (that the user chose) unill the 
    // password is the correct length.
    while (password.length < chosenLength) {

        password += allUserChoices[Math.floor(Math.random() * allUserChoices.length)];

    }

    // if (numberUser === true) {

    //     for (i = 0; i < chosenLength; i++) {
    //         password += numbers[Math.floor(Math.random() * numbers.length)];
    //     }
    // }

    // if (uppersUser) {
    //     for (i = 0; i < chosenLength; i++) {
    //         password += uppers[Math.floor(Math.random() * uppers.length)];
    //     }
    // }

    // if (lowrUser) {
    //     for (i = 0; i < chosenLength; i++) {
    //         password += lowers[Math.floor(Math.random() * lowers.length)];

    //     }
    // }

    // if (specialUser) {
    //     for (i = 0; i < chosenLength; i++) {
    //         password += specials[Math.floor(Math.random() * specials.length)];
    //     }
    // }

    password = password.split('').sort(function () { return Math.random() }).join('');
    console.log(password)
    // Document.getElementById("box").innerText(password)

    //alert(password)
    document.getElementById('box').innerHTML = password;

    // this is where I will add all the event listeners

}

genButton.addEventListener('click', ask);
