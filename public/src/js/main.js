let body = document.body;
let section = document.createElement('section');
body.prepend(section);
let div;
for (let i = 0; i < 6; i++) {
    div = document.createElement('div');
    var divs = document.getElementsByTagName('div');
    section.append(div);
};

// Début div 1
let h1 = document.createElement('h1');
let h1Text = document.createTextNode("Calculatrice");
h1.append(h1Text);
divs[0].append(h1);
// ./div 1

// Début div 2 
let input = document.createElement('input');
input.setAttribute('type', "text");
input.setAttribute('disabled', "");
let clearButton = document.createElement('button');

divs[1].append(input, clearButton)
// ./div 2

// Début div 3
let bouton;
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[2].append(bouton);
    var r1Boutons = divs[2].getElementsByTagName('button');
}
// ./div 3

// Début div 4 
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[3].append(bouton);
    var r2Boutons = divs[3].getElementsByTagName('button');
}
// ./div 4

// Début div 5 
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[4].append(bouton);
    var r3Boutons = divs[4].getElementsByTagName('button');
}
// ./div 5

// Début div 6
for (let i = 0; i < 4; i++) {
    bouton = document.createElement('button');
    divs[5].append(bouton);
    var r4Boutons = divs[5].getElementsByTagName('button');
}
// ./div 6

// Boutons
let boutons = document.getElementsByTagName('button');

for (let i = 0; i < boutons.length; i++) {
    switch (i) {
        case 0:
            boutons[0].setAttribute('id', "clear");
            boutons[0].innerHTML = "C";
            break;
        case 1:
            boutons[1].setAttribute('class', "chiffres");
            boutons[1].innerHTML = "7";
            break;
        case 2:
            boutons[2].setAttribute('class', "chiffres");
            boutons[2].innerHTML = "8";
            break;
        case 3:
            boutons[3].setAttribute('class', "chiffres");
            boutons[3].innerHTML = "9";
            break;
        case 4:
            boutons[4].setAttribute('class', "operations");
            boutons[4].innerHTML = "/";
            break;
        case 5:
            boutons[5].setAttribute('class', "chiffres");
            boutons[5].innerHTML = "4";
            break;
        case 6:
            boutons[6].setAttribute('class', "chiffres");
            boutons[6].innerHTML = "5";
            break;
        case 7:
            boutons[7].setAttribute('class', "chiffres");
            boutons[7].innerHTML = "6";
            break;
        case 8:
            boutons[8].setAttribute('class', "operations");
            boutons[8].innerHTML = "*";
            break;
        case 9:
            boutons[9].setAttribute('class', "chiffres");
            boutons[9].innerHTML = "1";
            break;
        case 10:
            boutons[10].setAttribute('class', "chiffres");
            boutons[10].innerHTML = "2";
            break;
        case 11:
            boutons[11].setAttribute('class', "chiffres");
            boutons[11].innerHTML = "3";
            break;
        case 12:
            boutons[12].setAttribute('class', "operations");
            boutons[12].innerHTML = "-";
            break;
        case 13:
            boutons[13].setAttribute('class', "chiffres");
            boutons[13].innerHTML = "0";
            break;
        case 14:
            boutons[14].setAttribute('class', "chiffres");
            boutons[14].innerHTML = ".";
            break;
        case 15:
            boutons[15].setAttribute('id', "egal");
            boutons[15].innerHTML = "=";
            break;
        case 16:
            boutons[16].setAttribute('class', "operations");
            boutons[16].innerHTML = "+";
            break;
    }
}
// ./bouttons
