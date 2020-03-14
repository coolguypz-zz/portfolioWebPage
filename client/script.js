$(document).ready(initialized);

function initialized() {
  const cl = new Controller({
    projectLayer:".projectLayer",
    navbar:"#home",
    main:".main"    
  })
  cl.loadProject(projectData);
  cl.loadNav();
  cl.displayNavBar();
  cl.displayProject();
  cl.addEventListener();
  window.onscroll = scrollFunction;


}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementsByClassName("page-nav").style = "30px 10px";
    // document.getElementById("logo").style.fontSize = "25px";
    console.log("this is working");
  } else {
    // document.getElementsByClassName("page-nav").style = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
    console.log("this is also working");

  }
}