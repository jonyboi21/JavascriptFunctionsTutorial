
const calcArea = (radius) => 3.14 * radius **2;

const speak = function (name = 'luigi', time = 'night'){
  console.log(`good ${time} ${name}`);
};

speak('shaun')

// const  calcArea = function (radius){
//   return  3.14 * radius **2;
//     ;
// }
const area = calcArea(5);

const calcVol = function (area){

};
calcVol(area);

console.log('area is: ', area);



const greet = function (){
  return 'hello, world';
}
const greet1 = () => {
  return 'hello, world';
}
const greet2 = () => 'hello, world';
const result = greet();
console.log(result);

// var bill = function (products, tax){
//   let total = 0;
//   for (let i=0; i<products.length; i++){
//     total+= products[i] + products[i] + tax;
//   }return total
// }

let bill = (products, tax) => {
  let total =0;
  for (let i =0; i< products.length; i++){
    total += products[i] + products[i] * tax;
  }return total;
}

let name = 'shaun'
let result2 = name.toUpperCase();
console.log(result2);

console.log(bill([10,15,20,30,75,85],.02))

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

people.forEach ((person, index) =>{
  console.log(index, person)
})

const logPerson = (person, index) => {
  console.log(`${index} - heelo ${person}`)
}

people.forEach(logPerson)

const ul = document.querySelector('.people');

let html = ``;

people.forEach(function (person){
  html += `<li style="color: purple">${person}</li>`;
})
console.log(html)

ul.innerHTML = html
