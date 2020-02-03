$(document).ready(initialized);

function initialized() {
  const controller = new Controller({
    projectLayer:".projectLayer",
    ul:"#navUl"
  })
  controller.loadProject(projectData);
  controller.loadNav(navData);
  controller.displayProject();
}

