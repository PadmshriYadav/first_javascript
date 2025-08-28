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


    
