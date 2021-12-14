window.addEventListener('load', ()=>{
    let accordions = document.getElementsByClassName("accordion-content");
    for(let acc of accordions){
        let prevSibiling = acc.previousElementSibling;
        if(prevSibiling == null){
            continue;
        }

        if(prevSibiling.classList.contains("accordion-button")){
            // Setup callback
            prevSibiling.addEventListener('click', ()=>{
                acc.classList.toggle("active");
                prevSibiling.classList.toggle("active");
            });
        }
    }
});