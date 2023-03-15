const navList = document.querySelectorAll('.nav-list');
const logo = document.querySelector('#logo');
const img = document.querySelector('.find img');
const articles = document.querySelectorAll('.bottom-section article');
const productInfos = document.querySelectorAll('.product-info');
const lis = document.querySelectorAll('nav ul li');

mouseCursor.style.transition = "backgroundColor,transform  0.4s";
navList.forEach( (list) => {
  list.addEventListener( 'mouseenter', () => {
    mouseCursor.style.backgroundColor = "#ff642bcd";
    mouseCursor.style.transform = "scale(1.2)";
  })
  list.addEventListener( 'mouseleave', () => {
    mouseCursor.style.backgroundColor = "#fad874b9";
    mouseCursor.style.transform = "scale(1)";
  })
});

logo.addEventListener('mouseenter', () => {
  mouseCursor.style.backgroundColor = "#ff642bcd";
  mouseCursor.style.transform = "scale(1.2)";
})
logo.addEventListener('mouseleave', () => {
  mouseCursor.style.backgroundColor = "#fad874b9";
  mouseCursor.style.transform = "scale(1)";
})

img.addEventListener('mouseenter', () => {
  mouseCursor.style.backgroundColor = "#ff642bcd";
  mouseCursor.style.transform = "scale(1.2)";
})
img.addEventListener('mouseleave', () => {
  mouseCursor.style.backgroundColor = "#fad874b9";
  mouseCursor.style.transform = "scale(1)";
})

articles.forEach( (article) => {
  article.addEventListener( 'mouseenter', (e) => {
    mouseCursor.style.backgroundColor = "#ff642bcd";
    mouseCursor.style.transform = "scale(1.2)";
    e.target.children[0].classList.add('product-info-effect');
    e.target.children[0].classList.remove('product-info');
  })
  article.addEventListener( 'mouseleave', (e) => {
    mouseCursor.style.backgroundColor = "#fad874b9";
    mouseCursor.style.transform = "scale(1)";
    e.target.children[0].classList.add('product-info');
    e.target.children[0].classList.remove('product-info-effect');
  })
});

lis.forEach((li) => {
  li.addEventListener('mouseenter', () => {
    mouseCursor.style.backgroundColor = "#ff642bcd";
    mouseCursor.style.transform = "scale(1.2)";
  })
  li.addEventListener('mouseleave', () => {
    mouseCursor.style.backgroundColor = "#fad874b9";
    mouseCursor.style.transform = "scale(1)";
  })
})