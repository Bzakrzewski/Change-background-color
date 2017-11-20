var bckColor = [
     "#D79938", '#C73A3C', '#0A96D6', '#B6D749', '#D7CD16'
];

document.querySelector('.btn-change').addEventListener('click', changeColor);
var nmb;

function changeColor(){ 
   var dbl = nmb;
    nmb = Math.floor(Math.random() * 5);
    while(nmb==dbl){
        nmb = Math.floor(Math.random() * 5);
        console.log(nmb);
    }
    document.querySelector(".bck").style.backgroundColor = bckColor[nmb];
} 




