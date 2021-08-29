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
    this.mouseComponent.onMousePressedEvent = new CallbackAction2(this, this.onMousePressed);
    this.mouseComponent.onMouseReleasedEvent = new CallbackAction2(this, this.onMouseReleased);
  }
  focusOn(window){

    let focuser = this.scene.getFirstComponentOfType(WindowFocusComponent);
    if(focuser != null){
      focuser.setFocus(window);
    } else {
      console.log("Cannot focus on window as there are no WindowFocusComponent in the scene");
    }
  }
  onClick() {

    let windows = [];

    this.collection.windows.visit(function(w){
      windows.push(w);
      return true;
    })

    Renderer.sortGameObjectArrayLocal(windows);

    let mousePosition = new p5.Vector(mouseX, mouseY);
    for (let iRev = 0; iRev < windows.length; iRev++) {
      let i = windows.length - iRev - 1;
      let inputRec = windows[i].components.getFirstElementOfType(WindowInputReceiverComponent);
      if (inputRec != null) {
        let processed = inputRec.processMouseClick(mousePosition);
        if (processed) {
          this.focusOn(windows[i]);
          return;
        }
      }
    }
  }

  onMousePressed() {

    let windows = [];

    this.collection.windows.visit(function(w){
      windows.push(w);
      return true;
    })

    Renderer.sortGameObjectArrayLocal(windows);

    let mousePosition = new p5.Vector(mouseX, mouseY);
    for (let iRev = 0; iRev < windows.length; iRev++) {
      let i = windows.length - iRev - 1;
      let inputRec = windows[i].components.getFirstElementOfType(WindowInputReceiverComponent);
      if (inputRec != null) {
        let processed = inputRec.processMousePressed(mousePosition);
        if (processed) {
          this.focusOn(windows[i]);
          return;
        }
      }
    }
  }

  onMouseReleased() {

    let windows = [];

    this.collection.windows.visit(function(w){
      windows.push(w);
      return true;
    })

    Renderer.sortGameObjectArrayLocal(windows);

    let mousePosition = new p5.Vector(mouseX, mouseY);
    for (let iRev = 0; iRev < windows.length; iRev++) {
      let i = windows.length - iRev - 1;
      let inputRec = windows[i].components.getFirstElementOfType(WindowInputReceiverComponent);
      if (inputRec != null) {
        let processed = inputRec.processMouseReleased(mousePosition);
        if (processed) {
          return;
        }
      }
    }
  }
}
