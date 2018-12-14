var images = [
    '<img src="img/student300.jpeg">',
    '<img src="img/longafro300.jpeg">',
    '<img src="img/wild300.jpeg">',
    '<img src="img/redhead300.jpeg">',
    '<img src="img/bw300.jpeg">',
    '<img src="img/afro300.jpeg">',
    '<img src="img/corey300.jpeg">',
    '<img src="img/jade300.jpeg">',
    '<img src="img/billy300.jpeg">'
];

function shuffle(array){
    var c = array.length, t, r;
    while (0 !== c) {
        r = Math.floor(Math.random() * c);
        c -= 1;

        t = array[c];
        array[c] = array[r];
        array[r] = t;
    }
    return array;
}

function generate() {
    images = shuffle(images);
    for(let i = 0; i < images.length; i++){
        document.getElementById("images").innerHTML += images[i];
        console.log("HEUEHUE");
    }
}