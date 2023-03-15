const itemBox1 = document.querySelector('.item-box1');
const itemBox2 = document.querySelector('.item-box2');
const itemBox3 = document.querySelector('.item-box3');

const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');


itemBox1.addEventListener('mouseenter', () =>{
  price1.innerHTML = "VIEW DETALES";
  price1.style.borderBottom = "1px solid black";
});
itemBox1.addEventListener('mouseleave', () =>{
  price1.innerHTML = "$ 22.00";
  price1.style.borderBottom = "none";
});

itemBox2.addEventListener('mouseenter', () =>{
  price2.innerHTML = "VIEW DETALES";
  price2.style.borderBottom = "1px solid black";
});
itemBox2.addEventListener('mouseleave', () =>{
  price2.innerHTML = "$ 40.00";
  price2.style.borderBottom = "none";
});

itemBox3.addEventListener('mouseenter', () =>{
  price3.innerHTML = "VIEW DETALES";
  price3.style.borderBottom = "1px solid black";
});
itemBox3.addEventListener('mouseleave', () =>{
  price3.innerHTML = "$ 40.00";
  price3.style.borderBottom = "none";
});

