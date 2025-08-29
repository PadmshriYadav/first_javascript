//web api

//setTimeout----after a time display it,returns an ID
//setInterval--- repeat itself after fix time
//clearTimeout() cancel setTimeout() call before it runs



const pop = document.querySelector("#pop")

const title = document.querySelector("#title")

setInterval(() => {

    if (pop.style.backgroundColor === 'red') {
        pop.style.backgroundColor = 'blue';    //.style is for incline css
    } else {
        pop.style.backgroundColor = 'red';
    }
    
    pop.addEventListener("click",(e){
        
    })

}, 1000); 


