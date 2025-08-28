
     let colors = document.querySelectorAll(".color")
     console.log(colors);

     colors.forEach( (color)=>{
         console.log(color);
         color.addEventListener("click",(e)=>{ 
            console.log(e);
            console.log(e.target)

            switch (e.target.id) {
                case "orange":
                    document.querySelector("body").style.backgroundColor =" orange"
                    break;

                 case "yellow":
                    document.querySelector("body").style.backgroundColor =" yellow"
                    break;    
                case "green":
                document.querySelector("body").style.backgroundColor =" green"
                break;

                 case "white":
                document.querySelector("body").style.backgroundColor ="white"
                break;

                default:
                     document.querySelector("body").style.backgroundColor ="white"

            }
         })
     });

     
