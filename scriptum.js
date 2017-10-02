var pics = document.getElementById("imgContainer").children;
window.onload = function () {
    pics[0].style.opacity = 1;
};
function foo(int) {
    for(var i = 0; i < pics.length;i++){
        pics[i].style.opacity = 0;
    }
    pics[int].style.opacity = 1;
}

function boo(id) {
    var changeable = document.getElementById(id);
    changeable.style.transition = "height .5s ease, font-size .5s ease, background .5s ease";
    changeable.classList.toggle("nice");    
}
