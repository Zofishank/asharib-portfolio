const Scroller = document.querySelector(".images");




Scroller.addEventListener("wheel", (e)=>{
    e.preventDefault();
    Scroller.scrollLeft += e.deltaY;
    
})

next_btn.addEventListener("click", ()=>{
    Scroller.style.scrollBehavior = "smooth";
    Scroller.scrollLeft += 1550;
})
back_btn.addEventListener("click", ()=>{
    Scroller.style.scrollBehavior = "smooth";
    Scroller.scrollLeft += -1550;
})
