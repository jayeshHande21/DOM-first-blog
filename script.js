const button = document.querySelector("#btn");

const more = document.querySelector("#more");

const dots = document.querySelector("#dots");

function ReadMore(){
    // console.log("clicked Me")
    if(dots.display === "none"){
        dots.display = "inline";
        btn.innerText = "Read More";
        more.display = "none";
    }else{
        dots.display = "none";
        button.innerText = "Read Less";
        more.display = "inline";
    }

}


button.addEventListener("click" , ReadMore);