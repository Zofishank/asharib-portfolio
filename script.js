const Scroller = document.querySelector(".serviceScroller");
const back_btn = document.querySelector(".back_btn");
const next_btn = document.querySelector(".next_btn");
const c_number= document.querySelector(".c_no");
const il_number= document.querySelector(".il_no");
const ps_number= document.querySelector(".ps_no");
const cor_number= document.querySelector(".cor_no");


let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

setInterval(()=>{
    if(counter1 === 80){
        clearInterval();
    }else{
        counter1 += 1;
        c_number.innerHTML = counter1 + "%";
    }
}, 23);

setInterval(()=>{
    if(counter2 === 60){
        clearInterval();
    }else{
        counter2 += 1;
        il_number.innerHTML = counter2 + "%";
    }
}, 35);

setInterval(()=>{
    if(counter3 === 40){
        clearInterval();
    }else{
        counter3 += 1;
        ps_number.innerHTML = counter3 + "%";
    }
}, 50);

setInterval(()=>{
    if(counter4 === 50){
        clearInterval();
    }else{
        counter4 += 1;
        cor_number.innerHTML = counter4 + "%";
    }
}, 40);


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
