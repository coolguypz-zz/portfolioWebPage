
class NavBar {
  constructor(callbacks) {
    this.addToNavbar = this.addToNavbar.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);

    this.navList = [
      {
        link: "HOME",
        href: "#"
      },
      {
        link: "MY PROJECT",
        href: "#myproject"
      },
      {
        link: "INTRODUCE",
        href: "#coverletter"
      },
      {
        link: "MY SKILLS",
        href: "#skills"
      },
      {
        link: "CONTACT",
        href: "#contact"
      },
    ]

    this.dom = {
    }

    this.callbacks = callbacks;
    this.navBars = [];
  }
  addToNavbar(nav) {
    this.navBars.push(new Nav(nav, {
      click: this.handleChangePage,
    }));
  }
  loadNav() {
    this.navList.forEach(this.addToNavbar);
  }
  renderNavBar() {
    var nav = $("<nav>", {
      class: "page-nav",
    })

    var navBrand = $("<a>", {
      href: "#home",
    });
    var title = $("<img>", {
      class: "logo",
      src:"./componets/source/logo.svg",
    });
    navBrand.append(title);

    var lable = $("<label>", {
      for: "hamburger",
      text:`☰`
    });
    var span = $("<input>", {
      id: "hamburger",
      type:"checkbox",
    })

    var li = this.navBars.map(v => { return v.renderNav()});

    var ul = $("<ul>")

    ul.append(li);

    nav.append(navBrand, lable, span,ul);

    return nav;
  }

  handleChangePage(nav) {
    this.callbacks.click(this, nav);
  }
  callbacksChangePages(navbar, nav) {
    self.location = `index.html${nav.data.href}`
  }
}
