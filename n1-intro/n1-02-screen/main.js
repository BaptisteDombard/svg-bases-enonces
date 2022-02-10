document.querySelector("svg").addEventListener("mouseenter",(event)=>{
    event.currentTarget.querySelector("rect:first-child").classList.add("colred");
    event.currentTarget.querySelector("rect:last-child").classList.add("colred");
})
