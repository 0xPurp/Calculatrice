let body = document.body;
let section = document.createElement('section');
body.prepend(section);

let div;
for(let i = 0; i < 6; i++) {
    div = document.createElement('div');
    const divs = document.getElementsByTagName('div');
    section.append(div);
}


// Début div 1
let h1 = document.createElement('h1');
let h1txt = document.createTextNode("CalculatriceDOM")
h1.append(h1txt)
div[0].append(h1);

// ./div 1 
// Début div 2
let input = document.createElement('input');
input.setAttribute('type', 'number')
let clear = document.createElement('button');
divs[1].append(input,clear)

// ./div 2
// Début div 3
let bouton;
for (let i = 0; i < 4; i++){
    bouton = document.createElement('button')
    divs[2].append(bouton);
    const xBoutons = divs[2].getElementsByTagName('button');
}
// ./div 3