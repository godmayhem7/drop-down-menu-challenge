let clicker = document.querySelectorAll(".dropdown-menu-clicker").length
for (let i=0;i<clicker;i++){
    document.querySelectorAll(".dropdown-menu-clicker")[i].addEventListener("click",function(){
        if (this===document.querySelectorAll(".dropdown-menu-clicker")[0]){
            document.querySelectorAll(".arrowdown")[0].classList.toggle("arrowdown-toggle")
            document.querySelector(".drop1").classList.toggle("drop1-toggle")
        }

        if(this===document.querySelectorAll(".dropdown-menu-clicker")[1]){
            document.querySelectorAll(".arrowdown")[1].classList.toggle("arrowdown-toggle")
            document.querySelector(".drop2").classList.toggle("drop2-toggle")
        }
    })
}


document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector("#hdr-art").classList.add("hdr-article-sub")
})

document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector("#hdr-art").classList.remove("hdr-article-sub")
})