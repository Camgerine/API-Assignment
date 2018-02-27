var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(JSON.parse(this.responseText));
    }
});

xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/bulbasaur/");

xhr.send(data);