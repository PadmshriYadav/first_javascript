# Projects related to DOM

## Project 1

```javascript
console.log("padmshri yadav")

<script>
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

```

## Project 2

```javascript


<script>
    const input = document.querySelector("#go")
    const inputheight = document.getElementById("height")
   
    const inputweight = document.getElementById("weight")
    
    const result =document.querySelector("#result")

        input.addEventListener("click",(e)=>{ 
            console.log(e);
             const height = parseFloat(inputheight.value)
             const weight = parseFloat(inputweight.value)
            const bmi = (weight / (height * height)).toFixed(2);
           
            result.innerHTML = `<span>Your BMI is: ${bmi}</span>`
            });
     

</script>

```