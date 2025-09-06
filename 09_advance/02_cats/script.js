
    const buttonstart = document.getElementById("start");
    const buttonclose = document.getElementById("close");
    const div =document.querySelector("#box");

    buttonstart.addEventListener("click" ,()=>{
            addPictures();
    })

     buttonclose.addEventListener("click" ,()=>{
            close();
    })


    function addPictures(){
        // const apiURL= 'https://http.cat/[status_code]'
        //const xhr = new XMLHttpRequest();//used for json object
        // xhr.onreadystatechange = function(){
        // console.log(xhr.readyState);
        // if (xhr.readyState === 4) {
            const remo = div.querySelector('img');
            if (remo){
                 div.removeChild(remo);;
            }
        
             const numbers = [100,101,102,103,200,201,202,203,204,205];
             const index = numbers[ Math.floor(Math.random()*10)];
        
             const pic = document.createElement('img');
             pic.setAttribute('src', `https://http.cat/${index}`);
             pic.setAttribute('alt', 'A vat');
             pic.setAttribute('width',"300");
             div.append(pic)
             
            //  pic.src = 'https://http.cat/[status_code]';

            //   pic.alt = 'A beautiful landscape';

            //   pic.width = 300;              
        }
    

    function close(){
        const remo = div.querySelector('img');
        div.removeChild(remo);

    }
