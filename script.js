const listlinks=document.querySelectorAll('.sidebar-link');
    const sidebar=document.querySelector("sidebar");
listlinks.forEach(link=>{
    link.addEventListener("click",()=>{
        alert(link.classList[1]);
    })
})
const main = document.querySelector("main");
const btnsidebar=document.getElementById("sidebar-button");
const btnsidebarhidden=document.getElementById("sidebar-button-hidden");
btnsidebar.addEventListener("click",()=>{
    if (sidebar.classList.contains("hidden")){
        sidebar.classList.remove("hidden");
        btnsidebar.style.transform="rotate(0deg)";
        main.style.width="calc(100vw - 200px)";
        main.style.marginLeft="200px";
    }else{
        sidebar.classList.add("hidden");
        btnsidebar.style.transform="rotate(180deg)";
        main.style.width="100vw";
        main.style.marginLeft="0";
    }
})
const menu=document.querySelector("menu");
document.getElementById("menu").addEventListener("click",()=>{
    if (menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
});