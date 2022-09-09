


function update() {
    let superheros = getSuperHeros();
    let htmlstr=superheros.map((superhero)=>{return `<div class="box"><img src="${superhero.images.md}" alt="">
    <caption>${superhero.name}</caption></div>`}).join("")
    document.getElementById("root").innerHTML = htmlstr; 
}

function increase() {
    
    document.querySelectorAll("#root")[0].innerHTML = +(document.getElementById("root").innerHTML)+1;
}

function decrease() {
    
    document.querySelectorAll("#root")[0].innerHTML = (document.getElementById("root").innerHTML)-1;
}