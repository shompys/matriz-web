((  
    boxSize=60, //tamaño por cubo
    amountBoxWidth=5, // ancho de matriz
    amountBoxHeight=5 // altura de matriz
) => {

const body = document.querySelector('#body');

const changesSize = () => body.style.height = `${window.innerHeight}px`

addEventListener("DOMContentLoaded", changesSize);
addEventListener("resize", changesSize);

const content = document.createElement("div")

content.style.minWidth= `${boxSize * amountBoxWidth}px`;
content.style.display="grid";
content.style.gridTemplateColumns=`repeat(auto-fill, minmax(${boxSize}px, 1fr))`;
content.style.gridAutoRows=`minmax(${boxSize}px, auto)`;

const fragment = document.createDocumentFragment();

for(let i = 0; i < amountBoxHeight; i++){
    console.log('hola')
    for(let j = 0; j < amountBoxWidth; j++) {

        const box = document.createElement("div");
    
        box.className=`box box-${i + 1}-${j + 1}`
        box.textContent=`${i + 1} - ${j + 1}`
        
        content.appendChild(box);
        fragment.appendChild(content);
    }

}



body.appendChild(fragment)

})()