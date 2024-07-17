let imgHolder= document.querySelector("#imgHolder"); //select elements to work on
let img=document.querySelector("#img");
let text=document.querySelector("input");

function QR(){
    if (text.value.length > 0) { //if the given text value is not null
        
        img.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value; //concatinate the api qr link with the given text value to generate qr
        imgHolder.classList.add("showImg");  //show the image after pressing generate qr
    }
    else{
        text.classList.add("err"); //this is for error class where the user input is null but generate qr is pressed
        setTimeout(()=> { 
            text.classList.remove("err"); //stopping condition for set animation
        }, 1000);

    }
    
}

