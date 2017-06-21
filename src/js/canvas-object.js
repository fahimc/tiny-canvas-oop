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
  removeChild(obj) {
    for (let a = 0; a < this.children.length; a++) {
      if(this.children[a] === obj){
        this.children.splice(a,1);
        break;
      }
    }
  }
  set(key, value) {
    this.style[key] = value;
  }
  set x(value) {
    this.style.x = value;
  }
  get x() {
    return this.get('x');
  }
  set y(value) {
    this.style.y = value;
  }
  get y() {
    return this.get('y');
  }
  set width(value) {
    this.style.width = value;
  }
  get width() {
    return this.get('width');
  }
  set height(value) {
    this.style.height = value;
  }
  get height() {
    return this.get('height');
  }
  get(key) {
    let other;
    if (key == 'x' || key == 'y') other = key == 'y' ? 'height' : 'width';
    if (key == 'width' || key == 'height') other = key;
    return this.getPosition(key, other);
  }
  getPosition(key, other) {
    let value = 0;
    let parentValue = 0;
    let isPercentage = String(this.style[key]).indexOf('%') >= 0;
    let size = this.stage && this.stage[other] ? this.stage[other] : 0;
    let val = this.getNumberValue(this.style[key]);

    if (this.parent) {
      parentValue = this.parent.get(key);
      size = this.parent.get(other);
    }
    if (key == 'x' || key == 'y')
      value = isPercentage ? parentValue + ((val / 100) * size) : parentValue + val;
    if (key == 'width' || key == 'height')
      value = isPercentage ? ((val / 100) * size) : val;
    return value;
  }
  getNumberValue(value) {
    var regex = /(\d+)/g;
    let intValue = Number(String(value).match(regex)[0]);
    return intValue;
  }
  render() {
    if (!this.stage) return;
    this.children.forEach((obj) => {
      obj.render();
    });
  }
};
