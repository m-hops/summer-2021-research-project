class DraggableComponent extends Component {

  constructor(target = null) {

    super();

    this.mouseComp = null;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.target = target;

  }

  getTarget() {

    if (this.target != null) {
      return this.target;
    }

    return this.gameObject;
  }

  update() {

    if (this.mouseComp == null) {
      this.mouseComp = this.gameObject.getOrAddComponentType(WindowInputReceiverComponent);
    }

    if (this.mouseComp.isPressed) {
      if (!this.isDragging) {
        this.isDragging = true;
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
      }

      let deltaMouseX = mouseX - this.lastMouseX;
      let deltaMouseY = mouseY - this.lastMouseY;


      let trf = this.getTarget().getTransform();
      trf.local.position.x += deltaMouseX;
      trf.local.position.y += deltaMouseY;

      this.lastMouseX = mouseX;
      this.lastMouseY = mouseY;
    } else {
      this.isDragging = false;
    }

  }

}
