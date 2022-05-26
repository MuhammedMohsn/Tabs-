let btns=document.querySelectorAll(".btn")

let history_details=document.querySelector(".history_details")
let Vision_details=document.querySelector(".Vision_details")
let Goals_details=document.querySelector(".Goals_details")

btns.forEach(btn=>{
    
    btn.addEventListener("click",(e)=>{
        
        e.target.classList.add("active")
    if(e.target.classList.contains("history_btn")){
          
           history_details.style.display="block"
           Vision_details.style.display="none"
           Goals_details.style.display="none"
        
        }
    if(e.target.classList.contains("visions_btn")){
        history_details.style.display="none"
        Vision_details.style.display="block"
        Goals_details.style.display="none"
    }
    if(e.target.classList.contains("goals_btn")) {
    
            history_details.style.display="none"
            Vision_details.style.display="none"
            Goals_details.style.display="block"
        
    }
    

    })

    
})