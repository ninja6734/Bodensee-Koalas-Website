function MainButtons(target){
    const targetElement = document.getElementById(target);
    targetElement.scrollIntoView({behavior: "smooth"})
}
function OpenWebsite(){
    window.open("HauptFile_4.4.c");
}
function ChangeTheme(){
    let theme = localStorage.getItem("theme");
    if(theme == "light"){
        theme = "dark";
    }
    else{
        theme = "light";
    }
    localStorage.setItem("theme",theme);
    LoadTheme(theme);
}

function LoadTheme(selTheme){
    let rootElement = document.querySelector(":root");
    let button = document.getElementById("ThemeButton");
    if(selTheme == "light"){
        button.innerText = "Dark Mode";
        rootElement.style.setProperty("--light_button","#aab5ba");
        rootElement.style.setProperty("--light_button_hover","#6c7b80");
        rootElement.style.setProperty("--light_navigation_background","#c3cfd2");
        rootElement.style.setProperty("--light_container_background","#9dafb5");
        rootElement.style.setProperty("--light_container_background_hover","#75858b");
        rootElement.style.setProperty("--light_body_background","#d9dfeb");
        rootElement.style.setProperty("--light_text","#000000");
    }
    else{
        button.innerHTML = "Light Mode";
        rootElement.style.setProperty("--light_button","#333F44");
        rootElement.style.setProperty("--light_button_hover","#4E5D64");
        rootElement.style.setProperty("--light_navigation_background","#1D2427");
        rootElement.style.setProperty("--light_container_background","#3B4A51");
        rootElement.style.setProperty("--light_container_background_hover","#47555B");
        rootElement.style.setProperty("--light_body_background","#20272A");
        rootElement.style.setProperty("--light_text","#7E9099");
    }
}

window.onload = function Setup(){
    let theme = localStorage.getItem("theme");
    if(theme){
        LoadTheme(theme);
    }
    else{
        LoadTheme("dark");
    }
};