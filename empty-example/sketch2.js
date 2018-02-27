let typeNormal;
let typeFighting;
let typeFlying;
let typePoison;
let typeGround;
let typeRock;
let typeBug;
let typeGhost;
let typeSteel;
let typeFire;
let typeWater;
let typeGrass;
let typeElectric;
let typePsychic;
let typeIce;
let typeDragon;
let typeDark;
let typeFairy;
let pokeBall;
let p;
let whichPokemon;

function preload() {
    p = loadJSON("pokemon.json");
    typeNormal = loadImage('Pokemon Type Normal.png');
    typeFighting = loadImage('Pokemon Type Fighting.png');
    typeFlying = loadImage('Pokemon Type Flying.png');
    typePoison = loadImage('Pokemon Type Poison.png');
    typeGround = loadImage('Pokemon Type Ground.png');
    typeRock = loadImage('Pokemon Type Rock.png');
    typeBug = loadImage('Pokemon Type Bug.png');
    typeGhost = loadImage('Pokemon Type Ghost.png');
    typeSteel = loadImage('Pokemon Type Steel.png');
    typeFire = loadImage('Pokemon Type Fire.png');
    typeWater = loadImage('Pokemon Type Water.png');
    typeGrass = loadImage('Pokemon Type Grass.png');
    typeElectric = loadImage('Pokemon Type Electric.png');
    typePsychic = loadImage('Pokemon Type Psychic.png');
    typeIce = loadImage('Pokemon Type Ice.png');
    typeDragon = loadImage('Pokemon Type Dragon.png');
    typeDark = loadImage('Pokemon Type Dark.png');
    typeFairy = loadImage('Pokemon Type Fairy.png');
    pokeBall = loadImage('Poke Ball.png');
}

function setup() {
    whichPokemon = floor(random(p.pokemon.length-1));
    createCanvas(1000, 1000);
    background(42, 74, 124);
    image(pokeBall, 0, 0, 1000, 1000);
    stroke(0);
    strokeWeight(7);
    fill(244, 203, 66);
    textSize(72);
    textAlign(CENTER);
    text(p.pokemon[whichPokemon].name, width/2, (height/2)+25);
}

function draw() {
    
    textSize(47);
    
    if(p.pokemon[whichPokemon].type1_id == "1"){
        image(typeNormal, 435, 215);
        fill(242, 242, 242);
        text("Normal", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "2"){
        image(typeFighting, 435, 215);
        fill(255, 164, 45);
        text("Fighting", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "3"){
        image(typeFlying, 435, 215);
        fill(61, 225, 255);
        text("Flying", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "4"){
        image(typePoison, 435, 215);
        fill(212, 170, 247);
        text("Poison", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "5"){
        image(typeGround, 435, 215);
        fill(221, 163, 113);
        text("Ground", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "6"){
        image(typeRock, 435, 215);
        fill(114, 77, 44);
        text("Rock", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "7"){
        image(typeBug, 435, 215);
        fill(77, 114, 47);
        text("Bug", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "8"){
        image(typeGhost, 435, 215);
        fill(114, 47, 71);
        text("Ghost", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "9"){
        image(typeSteel, 435, 215);
        fill(173, 173, 173);
        text("Steel", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "10"){
        image(typeFire, 435, 215);
        fill(209, 67, 35);
        text("Fire", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "11"){
        image(typeWater, 435, 215);
        fill(33, 79, 186);
        text("Water", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "12"){
        image(typeGrass, 435, 215);
        fill(33, 183, 35);
        text("Grass", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "13"){
        image(typeElectric, 435, 215);
        fill(255, 241, 124);
        text("Electric", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "14"){
        image(typePsychic, 435, 215);
        fill(220, 125, 242);
        text("Psychic", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "15"){
        image(typeIce, 435, 215);
        fill(178, 243, 255);
        text("Ice", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "16"){
        image(typeDragon, 435, 215);
        fill(237, 180, 23);
        text("Dragon", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "17"){
        image(typeDark, 435, 215);
        fill(71, 44, 114);
        text("Dark", width/2, 200);
    }
    else if(p.pokemon[whichPokemon].type1_id == "18"){
        image(typeFairy, 435, 215);
        fill(255, 193, 250);
        text("Fairy", width/2, 200);
    }
    
    if(p.pokemon[whichPokemon].type2_id == "1"){
        image(typeNormal, 435, 660);
        fill(242, 242, 242);
        text("Normal", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "2"){
        image(typeFighting, 435, 660);
        fill(255, 164, 45);
        text("Fighting", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "3"){
        image(typeFlying, 435, 660);
        fill(61, 225, 255);
        text("Flying", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "4"){
        image(typePoison, 435, 660);
        fill(212, 170, 247);
        text("Poison", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "5"){
        image(typeGround, 435, 660);
        fill(221, 163, 113);
        text("Ground", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "6"){
        image(typeRock, 435, 660);
        fill(114, 77, 44);
        text("Rock", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "7"){
        image(typeBug, 435, 660);
        fill(77, 114, 47);
        text("Bug", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "8"){
        image(typeGhost, 435, 660);
        fill(114, 47, 71);
        text("Ghost", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "9"){
        image(typeSteel, 435, 660);
        fill(173, 173, 173);
        text("Steel", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "10"){
        image(typeFire, 435, 660);
        fill(209, 67, 35);
        text("Fire", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "11"){
        image(typeWater, 435, 660);
        fill(33, 79, 186);
        text("Water", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "12"){
        image(typeGrass, 435, 660);
        fill(33, 183, 35);
        text("Grass", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "13"){
        image(typeElectric, 435, 660);
        fill(255, 241, 124);
        text("Electric", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "14"){
        image(typePsychic, 435, 660);
        fill(220, 125, 242);
        text("Psychic", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "15"){
        image(typeIce, 435, 660);
        fill(178, 243, 255);
        text("Ice", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "16"){
        image(typeDragon, 435, 660);
        fill(237, 180, 23);
        text("Dragon", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "17"){
        image(typeDark, 435, 660);
        fill(71, 44, 114);
        text("Dark", width/2, 830);
    }
    else if(p.pokemon[whichPokemon].type2_id == "18"){
        image(typeFairy, 435, 660);
        fill(255, 193, 250);
        text("Fairy", width/2, 830);
    }
}