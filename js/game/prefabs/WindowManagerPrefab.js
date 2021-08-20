class WindowManagerPrefab extends GameObject {

  constructor() {

    super();

    this.collection = new WindowCollectionComponent();
    this.factory = new WindowFactoryComponent();
    this.focuser = new WindowFocusComponent();
    this.mouseComponent = new MouseComponent();

    this.addComponent(this.collection);
    this.addComponent(this.factory);
    this.addComponent(this.focuser);

    this.addComponent(this.mouseComponent);

    this.mouseComponent.onMouseClickEvent = new CallbackAction2(this, this.onClick);
  }

  onClick() {

    let windows = [];

    this.collection.windows.visit(function(w){
      windows.push(w);
    })

    Renderer.sortGameObjectArrayLocal(windows);

    let mousePosition = new p5.Vector(mouseX, mouseY);

    for (let i = 0; i < windows.length; i++) {

      windows[i].components.visitElementsOfType(ColliderComponent, function(collider) {

        let trf = collider.gameObject.getTransform();
        let localPos = new p5.Vector(mousePosition.x - trf.local.position.x, mousePosition.y - trf.local.position.y);
        if (collider.isPointInLocal(localPos)) {

          let receiver = collider.gameObject.components.getFirstElementOfType(WindowInputReceiverComponent);

          if (receiver != null) {
console.log("hit2");
            receiver.onMouseClick(localPos);

            return false;
          }
        }
        return true;
      })
    }
  }


}
