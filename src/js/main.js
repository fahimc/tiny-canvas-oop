const Main = {
    init() {
      document.addEventListener('DOMContentLoaded',this.onLoaded.bind(this));
    },
    onLoaded(){
      console.log('loaded');
      let canvas = document.querySelector('canvas');
      let stage= new Stage(canvas);
     // stage.setSize(100,100);

     let parent = new CanvasObject();
     let obj = new CanvasObject();
     parent.appendChild(obj);
     stage.appendChild(parent);
     obj.set('x','10%');
     obj.set('y','10');
     parent.set('x','20%');
     parent.set('y','100');
     parent.set('width','30%');
     obj.set('width','30%');
    }
}
Main.init();
