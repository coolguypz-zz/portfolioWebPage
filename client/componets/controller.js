
class Controller {
  constructor(elementConfig) {
    this.addProject = this.addProject.bind(this);
    this.projectHandler = this.projectHandler.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);

    this.dom = {
      area: {
        ul: $(elementConfig.ul),
        projectLayer: $(elementConfig.projectLayer),
        nav: $(elementConfig.navbar),
        main: $(elementConfig.main),
      }
    }

    this.navBar = new NavBar({
      click: this.handleNavClick
    })

    this.projects = [];
    this.navList = [];
  }
  handleNavClick(navbar, nav) {
    this.navBar.callbacksChangePages(navbar, nav);
  }
  loadNav() {
    this.navBar.loadNav();
  }
  loadNavBar() {
    return this.navBar.renderNavBar();
  }
  displayNavBar() {
    this.dom.area.nav.prepend(this.loadNavBar());
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
    this.dom.area.projectLayer.empty().append(projectRender);
  }

  displayProject() {
    this.renderProject(this.projects)
  }
  navhandler() {

  }

  projectHandler(project) {

  }
  addEventListener() {
    this.dom.area.main.scroll( this.handlePageScroll);
    window.addEventListener('scroll',this.handlePageScroll);
     document.addEventListener("keydown",this.handlePageScroll)
    // window.addEventListener("resize",this.handlePageScroll);
  }
  handlePageScroll() {
     var scrollY = window.scrollY;
     var content = window.content;
     var offset = window.offset;
     var winH = window.innerHeight;

     console.log(scrollY,content,offset,winH);
    }
}