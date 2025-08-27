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
    const inputbutton = document.querySelector("#go")
    const inputheight = document.getElementById("height")
   
    const inputweight = document.getElementById("weight")
    
    const result =document.querySelector("#result")

        inputbutton.addEventListener("click",(e)=>{ 
            // console.log(e);
             const height = parseFloat(inputheight.value)
             const weight = parseFloat(inputweight.value)

             if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            result.innerHTML = `<span>Please enter a valid height and weight.</span>`;}             
            else{
            const bmi = (weight / (height * height)).toFixed(2);
           
            result.innerHTML = `<span>Your BMI is: ${bmi}</span>`}
            });
     
</script>

```

## Project 3

```javascript
<script>

    let clock= document.querySelector("#clock");
    
    setInterval( function () {
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
        
    },1000)
    
</script>
```