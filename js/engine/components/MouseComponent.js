class MouseComponent extends Component {

  constructor() {

    super();

    this.onMouseClickEvent = new Event();
    this.onMousePressedEvent = new Event();
    this.onMouseReleasedEvent = new Event();
    this.isPressed = false;
  }

  onMouseClick() {

    if (this.gameObject == null) {
      return;
    }


    let allColliders = this.gameObject.components.getAllElementOfType(ColliderComponent);

    let mousePosition = new p5.Vector(mouseX, mouseY);

    for (let i = 0; i < allColliders.length; i++) {
      if (allColliders[i].isPointIn(mousePosition)) {

          this.onMouseClickEvent.raise();
          return;
      }
    }
  }

  onMousePressed() {

    if (this.gameObject == null) {
      return;
    }

    let allColliders = this.gameObject.components.getAllElementOfType(ColliderComponent);

    let mousePosition = new p5.Vector(mouseX, mouseY);

    for (let i = 0; i < allColliders.length; i++) {
      if (allColliders[i].isPointIn(mousePosition)) {

        this.isPressed = true;

          this.onMousePressedEvent.raise();
          return;
      }
    }
  }

  onMouseReleased() {

    if (this.gameObject == null) {
      return;
    }

    if (this.isPressed) {
      this.isPressed = false;
      this.onMouseReleasedEvent.raise();
    }
  }

}
