window.addEventListener("scroll",function(){
    const navBar = document.getElementById("sopra");
    const bBar = document.getElementById("mio-collegamento");
    if(window.scrollY > 400){
        navBar.classList.add("scroll");
        bBar.classList.add("verde");

    }
    else{
        navBar.classList.remove("scroll");
        bBar.classList.remove("verde");

    }
})