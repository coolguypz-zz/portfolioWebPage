
class Controller {
  constructor(elementConfig) {
    this.projectLayer = $(elementConfig.projectLayer);
    this.ul = $(elementConfig.ul);


    this.addProject = this.addProject.bind(this);
    this.addNav = this.addNav.bind(this);
    this.projectHandler = this.projectHandler.bind(this);
    this.projects = [];
    this.navList = [];
  }
  addProject(project) {
    this.projects.push(new ProjectModel(project, {
      mouseOver: this.projectHandler
    }))
  }
  loadProject(projectData) {
    projectData.forEach(this.addProject);
  }
  renderProject(projectClass) {
    var projectRender = projectClass.map(v => { return v.renderProject() });
    this.projectLayer.empty().append(projectRender);
  }

  loadNav(navData) {
    navData.forEach(this.addNav);
  }
  addNav(nav) {
    this.navList.push(new NavModel(nav, {
      click: this.navhandler
    }))
  }
  render(navClass) {
    var navRender = navClass.map(v => { return v.renderNav() });
    this.ul.empty().append(navRender);
  }

  displayProject() {
    this.render(this.navList);
    this.renderProject(this.projects)
  }
  navhandler() {

  }

  projectHandler(project) {

  }

}