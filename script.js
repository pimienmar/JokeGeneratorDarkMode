let joke1 = "Witz 1: Lorem Ipsum";
let joke2 = "Witz 2: Lorem Ipsum";
let joke3 = "Witz 3: Lorem Ipsum";
let joke4 = "Witz 4: Lorem Ipsum";
let joke5 = "Witz 5: Lorem Ipsum";


function generateJoke() {

    let randomNumber = Math.floor(Math.random() * 5);

    switch (randomNumber) {
        case 0:
            document.getElementById("test1").innerHTML = joke1;
            console.log(randomNumber); //test
            break;
        case 1:
            document.getElementById("test1").innerHTML = joke2;
            break;
        case 2:
            document.getElementById("test1").innerHTML = joke3;
            break;
        case 3:
            document.getElementById("test1").innerHTML = joke4;
            break;
        case 4:
            document.getElementById("test1").innerHTML = joke5;
            break;

        default:
            document.getElementById("test1").innerHTML = "No Joke found";
            break;
    }
    //console.log("Result: " + randomNumber);
    //document.getElementById("test1").innerHTML = joke1;
}

let toggle = false;

function darkModeOn() {
    if (toggle == false) {
        toggle = true;
        document.getElementById("jokeoutput").style.backgroundColor = "black";
        document.getElementById("jokeoutput").style.color = "white";
        document.querySelector('header').style.backgroundColor = "black";
    } else {
        toggle = false;
        document.getElementById("jokeoutput").style.backgroundColor = "azure";
        document.getElementById("jokeoutput").style.color = "black";
        document.querySelector('header').style.backgroundColor = "brown";
    }
}



// 1. random zahl als variable speichern
// 2. random zahl verweist auf switch case witz
// 3. getelement string überschreiben/ausgeben
// 4. Clear button
// 5. Witze als datenbank speichern


