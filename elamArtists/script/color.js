   // 배너 배경색 랜덤
   const colors = [ '#83bdf490', '#42d3fb98', '#00e5e98b',  '#5bf3c391', '#aafa9494', '#f9f97194', '#ffafc8ac','#b595ff8f','#e4f7d280','#fdd785ac','#f9aa80b7'];
    
   const LENGTH = colors.length;

   // setInterval(callback, delay); 지연시간동안 callback을 호출   
   const timer = setInterval(randomColor,3000);

   
   function randomColor(){
       let num1 = Math.floor(Math.random()*LENGTH);
       let num2 = Math.floor(Math.random()*LENGTH);
       let num3 = Math.floor(Math.random()*LENGTH);
       let num4 = Math.floor(Math.random()*LENGTH);
       let num5 = Math.floor(Math.random()*LENGTH);
       //document.body.style.backgroundColor = colors[num];
       let container = document.querySelectorAll(".image-container");
       
       for (let i in container){
 
        container[i].style.background = "linear-gradient(45deg,"+colors[num1]+"," + colors[num2]+"," + colors[num3] + ","+ colors[num4] + "," + colors[num5] + ")";
      }
      }

   randomColor();
   //맨 처음부터 배경색 지정