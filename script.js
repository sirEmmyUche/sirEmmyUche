const menuBar = () => {
    let x = document.getElementById("burger");
    let y = document.querySelectorAll(".nav-links");
    x.addEventListener("click",() => {
        // loop over since its a node collections of an array
        for(let i =0; i < y.length; i++) {
             y[i].classList.toggle('responsive');
        }
    })

}


menuBar()