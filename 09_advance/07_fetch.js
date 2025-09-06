//XHR is event-based... track the progress and completion of the request.
// XMLHttpRequest object, open the request, and then send it, all while managing event listeners.

//----------------------------------------------

// Fetch is a built-in JavaScript API..promise-based
//fetch(url).then(response => response.json()).
//the fetch API returns a Promise onject


// fetch() returns a Promise, and that Promise resolves to a Response object. 

//  built-in property ok ---->property of Response object

//response.ok = true

fetch(`https://quotes.domiadi.com/api`)
.then((response) => {
    if (!response.ok){
        console.log("errorrr");
    }
    else{
       return response.json();
    }
})
.then((responsedata)=>{
 
     console.log(responsedata.quote);

 })
.catch((responsedata)=> 
{console.log("found error");

});