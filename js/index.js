let btns = document.querySelectorAll(".btn")
let sections = document.querySelectorAll("section")
let about = document.querySelector(".about")
about.addEventListener("click", e => {
    let id = e.target.dataset.id
    if(id){
        btns.forEach(btn => {
            btn.classList.remove("active")
        })
    
        e.target.classList.add("active")
        sections.forEach(section => {
            if (section.classList.contains(id)) { section.style.display = "block" }
            else { section.style.display = "none" }
        })
    }
})