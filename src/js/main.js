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
     parent.set('y','100');
     parent.set('width','30%');
     parent.set('x','20%');
     obj.x = '10%';
     obj.y = '10%';
     obj.width = '30%';
     obj.height = '30%';
     console.log(obj);
    }
}
Main.init();
