class Box extends CanvasObject {
  constructor() {
    super();
  }
  render() {
    super.render();
    this.stage.context.rect(this.x, this.y, this.width, this.height);
    this.stage.context.stroke();
  }
}
