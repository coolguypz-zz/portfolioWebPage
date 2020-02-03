
class NavModel{
  constructor(data,callbacks){
    this.data = data;
    this.callbacks = callbacks;
  }

  renderNav(){
    var navItem = $("<li>",{
      class:`${this.data.className}`
    })
    var navLink = $("<a>",{
      class:`${this.data.aTagClassName}`,
      href:`${this.data.href}`,
      text:`${this.data.text}`
    })
    navItem.append(navLink);
    return navItem;
  }
}

// <li class="nav-item">
// <a class="nav-link" href="#page2">My project</a>
// </li>

