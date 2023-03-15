const numbers = document.querySelectorAll('.number');

const imageList = [
  "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
  "https://images.unsplash.com/photo-1447433693259-c8549e937d62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://media.istockphoto.com/id/1402951572/ko/%EC%82%AC%EC%A7%84/%EB%B9%A8%EA%B0%84%EC%83%89-%ED%9D%B0%EC%83%89-%EB%B0%8F-%ED%8C%8C%EB%9E%80%EC%83%89%EC%9D%98-%EC%B6%94%EC%83%81%EC%A0%81-%EC%9D%B8-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EB%B0%98%EC%A7%9D%EC%9D%B4%EB%8A%94-%EB%B3%84-7-%EC%9B%94-4-%EC%9D%BC-%ED%98%84%EC%B6%A9%EC%9D%BC-%EC%9E%AC%ED%96%A5-%EA%B5%B0%EC%9D%B8%EC%9D%98-%EB%82%A0-%EB%98%90%EB%8A%94-%EA%B8%B0%ED%83%80-%EC%95%A0%EA%B5%AD%EC%A0%81%EC%9D%B8-%EC%B6%95%ED%95%98%EB%A5%BC%EC%9C%84%ED%95%9C-%EB%AF%B8%EA%B5%AD-%EB%B0%B0%EA%B2%BD-%EB%B2%BD%EC%A7%80.jpg?s=612x612&w=is&k=20&c=luRXi8TO2w0t2Eva62dgHOP84RDyY6SDEbDjL6KVs4E=",
  "https://media.istockphoto.com/id/1347283792/ko/%EC%82%AC%EC%A7%84/%EA%B0%A4%EB%9F%AD%EC%8B%9C-%EC%9A%B0%EC%A3%BC-%EB%B3%84%EC%9D%B4-%EB%B9%9B%EB%82%98%EB%8A%94-%ED%95%98%EB%8A%98-%EB%B3%B4%EB%9D%BC%EC%83%89-%EB%B9%A8%EA%B0%84-%EC%B6%94%EC%83%81%EB%B3%84-%ED%8C%A8%ED%84%B4-%EB%AF%B8%EB%9E%98%EC%84%B1%EC%9A%B4-%EC%84%B1%EC%9A%B4-%EB%B0%B0%EA%B2%BD-%EC%9D%80%ED%95%98%EC%88%98-%EC%8A%A4%ED%83%80-%EB%B2%84%EC%8A%A4%ED%8A%B8-%ED%85%8D%EC%8A%A4%EC%B2%98-%EB%94%94%EC%A7%80%ED%84%B8-%EC%83%9D%EC%84%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%94%84%EB%9E%99%ED%83%88-%ED%8C%8C%EC%9D%B8-%EC%95%84%ED%8A%B8.jpg?s=612x612&w=is&k=20&c=5rotc4yDgBXdWZAKvPypyDkhNBxjnslqe6EvUP81hyw="
];      
const imageContainer = document.querySelector('.image-container');
let count = 0; 

numbers.forEach( number => {
  number.addEventListener('mouseover', () => {
  const timer = setInterval( () => {
      imageContainer.style.backgroundImage = `url(${imageList[count]})`;
      count++; 
      if ( count >= imageList.length ) {
        count = 0;
      }
    },500);
    number.addEventListener('mouseleave', () => {
      clearInterval(timer);
    })
  })

});