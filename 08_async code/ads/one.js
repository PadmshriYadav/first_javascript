//web api

//setTimeout----after a time display it,returns an ID
//setInterval--- repeat itself after fix time
//clearTimeout() cancel setTimeout() call before it runs



const button = document.querySelector("#button")


const title = document.querySelector("#title")

setInterval(() => {
    

    if (button.style.backgroundColor === 'red') {
        button.style.backgroundColor = 'blue';    //.style is for incline css
    } else {
        button.style.backgroundColor = 'red';
    }
}, 1000); 

closebox();


button.addEventListener("click",(e)=>{
         openbox();
  });


  function openbox(){
    title.innerHTML = '<br> Engineered for creators with a stunning high-resolution display, powerful processing, and a seamless workflow for editing, design, and rendering.';

    title.innerHTML +='<button id ="close"> close </button>';

    const close=document.getElementById("close");
      close.addEventListener("click",(e)=>{
        closebox()
  });

        
  };

  function closebox(){
    title.innerHTML="lets see whats there";


  };
