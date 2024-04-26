function MainButtons(target){
    const targetElement = document.getElementById(target);
    targetElement.scrollIntoView({behavior: "smooth"})
}
function OpenWebsite(){
    window.open("HauptFile_4.4.c");
}
function ChangeTheme(){
    var rootElement = document.querySelector(":root");
    rootElement.style.setProperty("--light_button","#75858b");
}

function LoadTheme(){

}

window.onload = LoadTheme();