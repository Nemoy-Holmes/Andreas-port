
var closeNav = true;
$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        if (closeNav === true){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        closeNav = false;
        }
        else {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            document.body.style.backgroundColor = "white";
            closeNav = true;
        }
    });
});