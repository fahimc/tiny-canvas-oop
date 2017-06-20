class Stage {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.resizeHandler = this.onResize.bind(this);
        this.width = 0;
        this.height = 0;
        this.children = [];
        this.init();
    }
    init() {
        let rect = this.canvas.parentNode.getBoundingClientRect();
        this.resize(rect);
        this.addListener();
        window.requestAnimationFrame(this.render.bind(this));
    }
    appendChild(obj) {
        obj.stage = this;
        obj.children.forEach((o) => {
            o.stage = this;
        });
        this.children.push(obj);
    }
    setSize(w, h) {
        let rect = {
            width: w,
            height: h
        };
        window.removeEventListener('resize', this.resizeHandler);
        this.resize(rect);
    }
    addListener() {
        window.addEventListener('resize', this.resizeHandler);
    }
    onResize() {
        window.removeEventListener('resize', this.resizeHandler);
        let rect = this.canvas.parentNode.getBoundingClientRect();
        this.resize(rect);
        setTimeout(() => {
            window.addEventListener('resize', this.resizeHandler);
        }, 50);
    }
    render() {
        this.children.forEach((obj) => {
            obj.render();
        });
        window.requestAnimationFrame(this.render.bind(this));
    }
    resize(rect) {
        this.width = rect.width;
        this.height = rect.height;
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
}
