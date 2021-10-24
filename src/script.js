(async () => {
    const body = document.querySelector('#body');

    const changesSize = () => body.style.height = `${window.innerHeight - 20}px`

    addEventListener("DOMContentLoaded", changesSize);
    addEventListener("resize", changesSize);
    const fragment = new DocumentFragment();

    const wait = () => {
        const content = document.createElement("div")
        content.textContent="esperando tus cuadritos..."
        
        fragment.appendChild(content)
        return fragment
    }

    const creationMatriz = (
        boxSize=60, //tamaño por cubo
        amountBoxWidth=10, // ancho de matriz
        amountBoxHeight=10,// altura de matriz
        color=true,
    ) => {
        const content = document.createElement("div")
        if(amountBoxWidth <= 1000 && amountBoxHeight <= 1000) {
            
            content.style.width= `${boxSize * amountBoxWidth}px`;
            content.style.display="grid";
            content.style.gridTemplateColumns=`repeat(${amountBoxWidth}, ${boxSize}px)`;
            content.style.gridAutoRows=`${boxSize}px`;

            for(let i = 1; i <= amountBoxHeight; i++){
                
                for(let j = 1; j <= amountBoxWidth; j++) {
                    console.log(`${i} - ${j}`)
                    
                    const box = document.createElement("div");
                    box.className=`box box-${i}-${j}`
                    if(boxSize >= 60 ) {
                        box.textContent=`${i} - ${j}`
                    }
                    
                    box.classList.add("box-green")
                    
                    content.appendChild(box);
                    fragment.appendChild(content);
                }

            }
            
            return fragment
        }
        content.textContent="Como maximo esta permitido hasta 1000 cubos de ancho y alto"
        return fragment.appendChild(content)
    }
    
    body.appendChild(wait())
    setTimeout(() => {
        body.replaceChild(creationMatriz(),body.querySelector('div'))
    },100)

})()