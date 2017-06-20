class CanvasObject {
    constructor(parent) {
        this.style = {
            x: '0',
            y: '0',
            width: '100px',
            height: '100px',
            border: '#ccc 1',
            visible: 'visible'
        };
        this.parent = parent;
        this.stage;
        this.children = [];
    }
    appendChild(obj) {
        obj.parent = this;
        obj.stage = this.stage;
        this.children.push(obj);
    }
    set(key,value){
      this.style[key] = value;
    }
    get(key) {
      let other;
      if(key=='x'||key=='y')other = key == 'y' ? 'height':'width';
      if(key=='width'||key=='height')other = key;
        return this.getPosition(key, other);
    }
    getPosition(key, other) {
        let value = 0;
        let size = 0;
        let parentValue = this.stage && this.stage[other] ? this.stage[other] : 0;
        if (this.parent) {
            parentValue = this.parent.get(key);
            console.log('parentValue',key,parentValue);
            size = this.parent.getNumberValue(this.style[other]);
        }
        let val = this.getNumberValue(this.style[key]);
        if (String(this.style[key]).indexOf('%') >= 0) {
          value += (val / 100) * parentValue;
          console.log(key,value);
        } else{
          value = (key=='x'||key=='y') ? parentValue + val : val;
        }
        return value;
    }
    getNumberValue(value) {
        var regex = /(\d+)/g;
        let intValue = Number(value.match(regex)[0]);
        return intValue;
    }
    render() {
      if(!this.stage)return;
        this.stage.context.rect(this.get('x'), this.get('y'),this.get('width'), this.get('height'));
        this.stage.context.stroke();
        this.children.forEach((obj) => {
            obj.render();
        });
    }
};
