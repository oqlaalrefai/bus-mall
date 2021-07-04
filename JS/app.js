'use strict';
function product(name,img_src,time,see){
    this.name = name;
    this.img_src = img_src;
    this.time = 0;
    this.see = 0;
    product.productelement.push(this);
  }


product.productelement=[]
let counter = 0; 
const maxAttempts = 25 ;

new product('bag','img/bag.jpg'); 
new product('banana', 'img/banana.jpg'); 
new product('bathroom','img/bathroom.jpg');
new product('boots','img/boots.jpg');
new product('breakfast','img/breakfast.jpg');
new product('bubblegum','img/bubblegum.jpg');
new product('chair','img/chair.jpg');
new product('dog-duck','img/dog-duck.jpg')
new product('dragon','img/dragon.jpg')
new product('pen','img/pen.jpg')
new product('pet-sweep','img/pet-sweep.jpg')
new product('scissors','img/scissors.jpg')
new product('shark','img/shark.jpg')
new product('sweep','img/sweep.png')
new product('tautaun','img/tauntaun.jpg')
new product('unicorn','img/unicorn.jpg')
new product('water-can','img/water-can.jpg')
new product('wine-glass','img/wine-glass.jpg')


const leftImageElement = document.getElementById('left-image');
const centerImageElement = document.getElementById('center-image');
const rightImageElement = document.getElementById('right-image');


function generateRandomIndex(){
    return Math.floor(Math.random() * product.productelement.length);
}


let leftIndex;
let rightIndex;
let centerIndex;

function renderThreeImages(){
  leftIndex = generateRandomIndex(); 
  rightIndex = generateRandomIndex();  
  centerIndex = generateRandomIndex();

  while(leftIndex === rightIndex || centerIndex === leftIndex || rightIndex === centerIndex){
    leftIndex = generateRandomIndex();  
    centerIndex =generateRandomIndex();
    while(leftIndex === centerIndex){centerIndex =generateRandomIndex();}
  }

  product.productelement[leftIndex].see++;
  product.productelement[centerIndex].see++;
  product.productelement[rightIndex].see++;

  leftImageElement.src = product.productelement[leftIndex].img_src;
  centerImageElement.src = product.productelement[centerIndex].img_src;
  rightImageElement.src = product.productelement[rightIndex].img_src;
}
renderThreeImages();


leftImageElement.addEventListener('click',handleClick);
centerImageElement.addEventListener('click',handleClick);
rightImageElement.addEventListener('click',handleClick);



function handleClick(event){
    counter ++ ;

    if(maxAttempts >= counter){
            if(event.target.id === 'left-image'){
              product.productelement[leftIndex].time++;
            }else if(event.target.id ==='right-image'){
              product.productelement[rightIndex].time++;
            }
            else if(event.target.id ==='center-image'){
                product.productelement[centerIndex].time++;
            }
            renderThreeImages();
    }else{
        renderList();
    }
  }
  function renderList(){
    const ul = document.getElementById('unList');
    for(let i = 0 ; i < product.productelement.length; i++){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent =` ${product.productelement[i].name} had ${product.productelement[i].time} votes, and seen ${product.productelement[i].see} times.`
    }
    leftImageElement.removeEventListener('click',handleClick);
    centerImageElement.removeEventListener('click',handleClick)
    rightImageElement.removeEventListener('click',handleClick);
  }


  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }


