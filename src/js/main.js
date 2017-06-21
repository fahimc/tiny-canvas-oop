const Main = {
    init() {
      document.addEventListener('DOMContentLoaded',this.onLoaded.bind(this));
    },
    onLoaded(){
      console.log('loaded');
      let canvas = document.querySelector('canvas');
      let stage= new Stage(canvas);
     // stage.setSize(100,100);

     let parent = new Box();
     let box = new Box();

     parent.appendChild(box);
     stage.appendChild(parent);

     parent.x = '20%';
     parent.y = '100px';
     parent.width = '30%';
     parent.height = '300px';

     box.x = '10%';
     box.y = '10%';
     box.width = '30%';
     box.height = '30%';
     
     console.log(parent);
    }
}
Main.init();
