
var typed = new Typed(".move-text",{
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

document.getElementById("bar-mdq").addEventListener("click",function(){
  var listmenu = document.querySelector(".full-menu-mqd");
    

  if(listmenu.style.display==="block"){
    listmenu.style.display="none";
  }
  else{
    listmenu.style.display="block";
  }
}) 

// js toggele menu 

