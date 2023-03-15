const mouseCursor = document.querySelector('.cursor');

window.addEventListener('scroll', cursor);
window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.left = `${e.pageX}px`;
  mouseCursor.style.top = `${e.pageY}px`;
}

const header = document.querySelector('header');
const mainText = document.querySelector('h2');
const subText = document.querySelector('.sub-text span');
const textContainer = document.querySelector('.text-container');
const bottomSection = document.querySelector('.bottom-section');

bottomSection.style.transition = "0.5s";

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10 ){
    console.log(scrollPosition);
    if(!header.classList.contains('scrolledDown')) {
      header.classList.add('scrolledDown');
    }
  } else {
    if (header.classList.contains('scrolledDown')) {
      !header.classList.remove('scrolledDown');
    }
  }
  if (scrollPosition<1300) {
    mainText.textContent = "Eyes rest from an afternoon in the sun. Smooth textures feel cool on bare feet and skin.";
    subText.textContent = "Kitsune sofa, armchair and I-O coffee table (steel base)";
  }
  if (scrollPosition >1300) {
    mainText.textContent = "A sip of cocktail brings back memories of the beach.";
    subText.textContent = "Portobello armchair and foot stool (wood base)";
  } 
  if (scrollPosition >2600) {
    mainText.textContent = "Sunset is a good time to gather. Evening light bathes the space in warm tones and colours.";
    subText.textContent = "Copal sofa and Fromage poufs";
  }
   if (scrollPosition >3900) {
    mainText.textContent = "The kitchen table is resplendent with local market treasures. Sit down together for a moment of escape.";
    subText.textContent = "Figura chairs and Itamae table";
  } 
   if (scrollPosition >5200) {
    mainText.textContent = "Morning coffee with a tropical twist. Unusual tastes surprise the senses.";
    subText.textContent = "Nuef daybed";
  }
  if( scrollPosition < 5600) {
    textContainer.style.position = "fixed";
  } else {
    textContainer.style.position = "static"
  }
  if( scrollPosition > 8300) {
    bottomSection.classList.remove('bottom-section');
    bottomSection.classList.add('setBgColor');
  } else {
    bottomSection.classList.add('bottom-section');
    bottomSection.classList.remove('setBgColor');
  }
};

document.addEventListener('scroll', onScroll);

