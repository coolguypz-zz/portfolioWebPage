
class RenderPage{
  constructor(data,Module,appendParent,renderFunction){
    this.data = data;
    this.Module = Module;
    this.appendParent = appendParent;
    this.renderFunction = renderFunction;
  }
  addToClass(data){
    this.projects.push(new Module(data,{
      click:this.navhandler
    }))
  }
  loadData(datas){
    datas.forEach(this.addToClass);
  }
  renderData(dataClass){
    var render = dataClass.map(v => {return v.renderModule()});
    this.appendParent.empty().append(render);
  }
  renderModule(){
    this.renderFunction;
  }
}

