const listlinks=document.querySelectorAll('.sidebar-link');
    const sidebar=document.querySelector("sidebar");
listlinks.forEach(link=>{
    link.addEventListener("click",()=>{
        alert(link.classList[1]);
    })
})
const btnsidebar=document.getElementById("sidebar-button");
const btnsidebarhidden=document.getElementById("sidebar-button-hidden");
btnsidebar.addEventListener("click",()=>{
    if (sidebar.classList.contains("hidden")){
        sidebar.classList.remove("hidden");
        btnsidebar.style.transform="rotate(0deg)";
    }else{
        sidebar.classList.add("hidden");
        btnsidebar.style.transform="rotate(180deg)";
    }
})