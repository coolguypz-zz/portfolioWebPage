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
}

