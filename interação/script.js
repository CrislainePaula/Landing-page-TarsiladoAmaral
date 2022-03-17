var menuBnt = document.getElementById("menuBnt");
var menuNave = document.getElementById("menuNave");

menuNave.style.right = "-250px";
menuBnt.onclick = function(){
    if(menuNave.style.right == "-250px"){
        menuNave.style.right = "0";
    }else{
        menuNave.style.right = "-250px";
    }
}

window.sr = ScrollReveal({ reset: true});

sr.reveal('.header-texto', { duration: 3000 });

sr.reveal('.sobre-left-col', { duration: 2000 });

sr.reveal('.sobre-right-col', { duration: 2000 });

sr.reveal('.equipe-col', { duration: 2000 });
