const container = document.querySelector('#drawing-container');

let resolution =128;

function changeTemplate(num){
    container.style.gridTemplateRows='repeat('+num+',1fr)';
    container.style.gridTemplateColumns='repeat('+num+',1fr)';
}

changeTemplate(resolution);

function buildDrawingPage(num){
    let boxSum=Math.pow(num,2);
    for(let i = 0;i<boxSum;i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        container.appendChild(newDiv);
    }
}
buildDrawingPage(resolution);

//event listener to change the color of pixel
//~ When the mouse hovers over it
const pixel = document.querySelectorAll('.newDiv');
pixel.forEach(newDiv => {
    newDiv.addEventListener('mouseover',()=>{
        newDiv.classList.add('black');
    });
});

function clearAll(){
    pixel.forEach(newDiv => {
        newDiv.classList.remove('black');
    });
}

function changeResolution(){
    clearAll();
    let num = +prompt('Insert resolution (2 for 2x2, 4 for 4x4,... etc');
    changeTemplate(num);
    buildDrawingPage(num);
}

document.getElementById('clear').addEventListener('click',clearAll);

document.getElementById('resolution').addEventListener('click',changeResolution);