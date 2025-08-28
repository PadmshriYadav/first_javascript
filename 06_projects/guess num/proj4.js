
    //random generated number
    let random = parseInt((Math.random()*100)+1);

    //user imput
    const userinput = document.querySelector("#inputguess")

    //submitting gussed number 
    const submit=document.querySelector("#submit")



    //message
    const msg =document.querySelector(".result")
    

    // list of guessed numbers
    const gussedNumbers = document.querySelector("#previous")

    //remaning chnces to guesse
     const chances = document.querySelector("#chances")

     //new game button
     const newGame = document.querySelector('#newGame');
    
    let prevGuess =[]
    let numGuess =1
    

    chances.innerHTML = `${11 - numGuess}`;

    
    submit.addEventListener("click", function (e){
         e.preventDefault();

        //user guessed number 
        const input = userinput.value
        validateGuess(input)

         });
    


    

        function validateGuess(input){       
        if(isNaN(input) || input ==="" || input <0 || input >100){

            msg.innerHTML =`<span>invalid input</span>`
            endGame()

        }
        else {
            const inputNumber =parseInt(input);
             prevGuess.push(inputNumber)

              if(numGuess === 10){
                displayGuess(inputNumber)
                displayMessage(`game over.Random number was ${random}`)
                endGame()}
              else{
                displayGuess(inputNumber)
                checkGuess(inputNumber)
              } 
            } 
    }


    function checkGuess(inputNumber){
         if ( inputNumber===random){
                displayMessage(`you guessed it right`)
                endGame()
            }
        else if (inputNumber< random) {
            displayMessage(`Number is too low`)
        }
        else if (inputNumber> random) {
            displayMessage(`Number is too high`)  
        } 
    }
  
    function displayGuess(inputNumber){
        userinput.value = ""
         gussedNumbers.innerHTML +=`${inputNumber}, `
         numGuess ++;
         chances.innerHTML =`${11-numGuess}`
    }
 
    function displayMessage(messag){
        msg.innerHTML = `${messag}`
    }

    function endGame(){
        userinput.value = ''
        userinput.disabled = true;
        submit.disabled = true; 
        
    }
    
    newGame.addEventListener("click",( )=>{
             newGameStart( )
        
        
    });
function newGameStart(){
    userinput.value = ''
    numGuess =0
    displayGuess(`restarted game`)


}