
class Nav {
  constructor(data, callbacks) {
    this.handlePageChange = this.handlePageChange.bind(this);

    this.data = data;
    this.callbacks = callbacks;
  }

  renderNav() {
    var li = $("<li>", {
      class: " h6 ",
      text: (this.data.link).toUpperCase(),
      click: this.handlePageChange,
    });
    // var a = $("<a>", {
    //   class: " h6 ", 
    //   text: (this.data.link).toUpperCase(),
    //   click: this.handlePageChange,
    // });
    // li.append(a);
    return li;
  }

  handlePageChange(e) {
    if (e) e.preventDefault();
    this.callbacks.click(this);
  }
}