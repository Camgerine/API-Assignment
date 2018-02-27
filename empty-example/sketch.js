let p;
let rattata;
let whichPokemon;

function preload() {
    p = loadJSON("pokemon.json");
    rattata = loadImage('Rattata.png');
}

function setup() {
    whichPokemon = floor(random(p.pokemon.length-1));
    createCanvas(400,400);
    background(255);
    fill(0,0,0);
    text("Youngster Joey sent out "+ p.pokemon[whichPokemon].name + "!", 45, 350);
}

function draw() {
    if(p.pokemon[whichPokemon].name == "Rattata"){
        image(rattata, 175, 200);
    }
}