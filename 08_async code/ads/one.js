//web api

//setTimeout----after a time display it,returns an ID
//setInterval--- repeat itself after fix time
//clearTimeout() cancel setTimeout() call before it runs



const button = document.querySelector("#button")


const title = document.querySelector("#title")

 function colorChng() {
    

    if (button.style.backgroundColor === 'red') {
        button.style.backgroundColor = 'blue';    //.style is for incline css
    } else {
        button.style.backgroundColor = 'red';
    }

 }

const chngeColor = setInterval( colorChng  , 1000);


button.addEventListener("click",(e)=>{
             openbox();
         
  });


  function openbox(){
    clearInterval(chngeColor)
     
    title.innerHTML = 'iRIS Tabs <br> Engineered for creators with a stunning high-resolution display, powerful processing, and a seamless workflow for editing, design, and rendering.';

    title.innerHTML +='<br><button id ="close"> close </button>';

    const close=document.getElementById("close");
      close.addEventListener("click",(e)=>{
      
        closebox()
        
  });

        
  };

  function closebox(){
    title.innerHTML=" ";
   chngeColor = setInterval( colorChng  , 1000); 
    


  };
