


window.addEventListener("scroll",function(){
    const navBar = document.getElementById("sopra");
    const bBar = document.getElementById("mio-collegamento");
    if(window.scrollY > 470){
        navBar.classList.add("scroll");
        bBar.classList.add("verde");

    }
    else{
        navBar.classList.remove("scroll");
        bBar.classList.remove("verde");

    }
})




const arrayNumeri = (elemento, qtty, array) => {
    let arrayNew = [];
    for (let i = 0; i < qtty; i++) {
    let random = Math.floor(Math.random() * elemento.length);
    arrayNew. push(elemento[random] ) ;
    }
    return arrayNew;
};
    
    window. addEventListener("load", function (e) {
    
    const elementi = document.querySelectorAll("g[stroke-Linecap=butt]");
    setInterval(() => {
    let random = Math.floor(Math.random() * elementi.length);
    if (elementi[random] .getAttribute("opacity") === "1") {
    elementi[random].setAttribute("opacity", "0");
    } else {
     elementi[random].setAttribute("opacity", "1");
    }
    }, 10);
    
    });