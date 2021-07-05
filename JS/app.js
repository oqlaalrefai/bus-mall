'use strict';
function product(name, img_src, votes, see) {
  this.name = name;
  this.img_src = img_src;
  this.votes = 0;
  this.see = 0;
  product.productelement.push(this);
  arrOfNames.push(this.name);
}
let images=[];
let arrOfVotes = [];
let arrOfNames = [];
product.productelement = []
let counter = 0;
const maxAttempts = 25;

new product('bag', 'img/bag.jpg');
new product('banana', 'img/banana.jpg');
new product('bathroom', 'img/bathroom.jpg');
new product('boots', 'img/boots.jpg');
new product('breakfast', 'img/breakfast.jpg');
new product('bubblegum', 'img/bubblegum.jpg');
new product('chair', 'img/chair.jpg');
new product('dog-duck', 'img/dog-duck.jpg')
new product('dragon', 'img/dragon.jpg')
new product('pen', 'img/pen.jpg')
new product('pet-sweep', 'img/pet-sweep.jpg')
new product('scissors', 'img/scissors.jpg')
new product('shark', 'img/shark.jpg')
new product('sweep', 'img/sweep.png')
new product('tautaun', 'img/tauntaun.jpg')
new product('unicorn', 'img/unicorn.jpg')
new product('water-can', 'img/water-can.jpg')
new product('wine-glass', 'img/wine-glass.jpg')


const leftImageElement = document.getElementById('left-image');
const centerImageElement = document.getElementById('center-image');
const rightImageElement = document.getElementById('right-image');


function generateRandomIndex() {
  return Math.floor(Math.random() * product.productelement.length);
}


let leftIndex;
let rightIndex;
let centerIndex;

function renderThreeImages() {
  leftIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();
  centerIndex = generateRandomIndex();

  while (leftIndex === rightIndex || centerIndex === leftIndex || rightIndex === centerIndex|| images.includes(leftIndex) ||
  images.includes(centerIndex) || images.includes(rightIndex)) {
    leftIndex = generateRandomIndex();
    centerIndex = generateRandomIndex();
    while (leftIndex === centerIndex) { centerIndex = generateRandomIndex(); }
  }
  

  leftImageElement.src = product.productelement[leftIndex].img_src;
  centerImageElement.src = product.productelement[centerIndex].img_src;
  rightImageElement.src = product.productelement[rightIndex].img_src;

  images=[];
  images.push(leftIndex);
  images.push(centerIndex);
  images.push(rightIndex);
  leftImageElement.addEventListener('click', handleClick);
  product.productelement[leftIndex].see++;
  centerImageElement.addEventListener('click', handleClick);
  product.productelement[centerIndex].see++;
  rightImageElement.addEventListener('click', handleClick);
  product.productelement[rightIndex].see++;
}
renderThreeImages();
const section = document.getElementById('sec-one');

let btnEl;
function handleClick(event) {
  counter++;

  if (maxAttempts >= counter) {
    if (event.target.id === 'left-image') {
      product.productelement[leftIndex].votes++;
    } else if (event.target.id === 'right-image') {
      product.productelement[rightIndex].votes++;
    }
    else if (event.target.id === 'center-image') {
      product.productelement[centerIndex].votes++;
    }
  
  
    renderThreeImages();

  } 
  else {
    btnEl = document.getElementById('btn');
    btnEl.addEventListener('click', handleShow);
    leftImageElement.removeEventListener('click', handleClick);
    centerImageElement.removeEventListener('click', handleClick);
    rightImageElement.removeEventListener('click', handleClick);
    section.removeEventListener('click', handleClick)
  }
}
let arrOfshown = [];

function renderList() {
  const ul = document.getElementById('unList');
  for (let i = 0; i < product.productelement.length; i++) {
    console.log(product.productelement[i]);
    arrOfVotes.push(product.productelement[i].votes)
    console.log('#votes', arrOfVotes);
    arrOfshown.push(product.productelement[i].see);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = ` ${product.productelement[i].name} had ${product.productelement[i].votes} votes, and seen ${product.productelement[i].see} times.`
  }

}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
console.log(arrOfVotes);
function gettingChart() {
  let ctx = document.getElementById('myChart')
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arrOfNames,
      datasets: [{
        label: '# of Votes',
        data: arrOfVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }, {
        label: '# of Shown',
        data: arrOfshown,
        backgroundColor: [
          'rgb(54, 162, 235)'
        ]
      }]
    },
  })
}

function handleShow() {
  renderList();
  gettingChart();
  btnEl.removeEventListener('click', handleShow);
}
