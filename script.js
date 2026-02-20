const listlinks=document.querySelectorAll(".sidebar-link");
listlinks.forEach(link=>{
    link.addEventListener("click",()=>{
        alert(link.classList[1]);
    })
})