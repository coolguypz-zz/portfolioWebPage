
class Controller {
  constructor(elementConfig) {
    this.addProject = this.addProject.bind(this);
    this.projectHandler = this.projectHandler.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.loadNav = this.loadNav.bind(this);

    this.dom = {
      area: {
        ul: $(elementConfig.ul),
        projectLayer: $(elementConfig.projectLayer),
        nav: $(elementConfig.navbar),
        main: $(elementConfig.main),
        mainNav: $(elementConfig.mainNav),
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
    // this.dom.area.main.scroll(this.handlePageScroll);
    window.addEventListener('scroll', this.handlePageScroll);
    // document.addEventListener("keydown", this.handlePageScroll);
    window.addEventListener("resize", this.handlePageScroll);

  }
  handlePageScroll() {

    var winH = window.innerHeight;
    var scroTop = document.body.scrollTop || document.documentElement.scrollTop;
    var logo = $(".logo");
    var pageNav = this.dom.area.nav.find(".page-nav");
    var nav = $(".page-nav");
    var x = window.matchMedia("(max-width:768px)");


    if ((scroTop / winH) >= 1) {
      pageNav.removeClass("nav-animation")
      if(x.matches){
        pageNav.css({
          "background": "rgba(211, 211, 211,0.1)",
          "z-index": "none"});
      }else{
      pageNav.css({ "position": "fixed", "background": "#141425" });
      logo.css("width", "3vw");
      } 
    }

    if ((scroTop / winH) < 1) {
      if (x.matches) {
        pageNav.css("background", "none");
      }else{
        
      }
      if ((scroTop / winH) >= 0.5 && (scroTop / winH) <= 1) {
        pageNav.addClass("nav-animation");
      }
      else if ((scroTop / winH) >= 0 && (scroTop / winH) <= 0.5) {
        pageNav.removeClass("nav-animation").css("background", "none");
        logo.css("width", "5vw");
        nav.css("z-index", "none");
      }
    }


    console.log(winH, scroTop, (scroTop / winH));
    return;
  }
}