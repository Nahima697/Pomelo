showImageAll = () => {
       
    var x =document.getElementsByClassName('item');
    for (var i=0; i<x.length;i++){
        
        x[i].style.display ='block';


}}



button.addEventListener("click",function() {


  })

showImage2 = () => {
var x = document.getElementById("sites web");
if (x.style.display === 'none') {
x.style.display = 'block';
} else {
x.style.display = 'none';
}

}

showImage3 = () => {
var x = document.getElementById("app");
if (x.style.display === 'none') {
x.style.display = 'block';
} else {
x.style.display = 'none';
}
}
showImage4 = () => {
var x = document.getElementById("formation");
if (x.style.display === 'none') {
x.style.display = 'block';
} else {
x.style.display = 'none';
}
}




function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}


