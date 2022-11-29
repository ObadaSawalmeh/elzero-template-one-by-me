// menu functionality
const menu = document.querySelector(".burger__icon");
const links = document.querySelector(".menu");
menu.onclick=()=>{
    if(links.style.display==="block"){
        links.style.display="none";
    }
    else{
        links.style.display="block";
    }
}
