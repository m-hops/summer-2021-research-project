class WindowDefault extends GameObject {

  constructor(dragWidth, dragHeight, windowTerminate) {

    super();

    this.dragBarWidth = dragWidth;
    this.dragBarHeight = dragHeight;
    this.windowTerminate = windowTerminate;

    this.addComponent(new Transform(100,100));

    this.draggableBar = new GameObject("draggableBar");

    this.draggableBar.addComponent(new Transform());
    this.draggableBar.addComponent(new RectColliderComponent(AABB.MakeSize(this.dragBarWidth, this.dragBarHeight)));
    this.draggableBar.addComponent(new DraggableComponent(this));
    this.draggableBar.addComponent(new MouseComponent());
    this.draggableBar.addComponent(new RenderDebugComponent());

    this.addChild(this.draggableBar);

    this.closeButtonOBJ();

  }

  closeButtonOBJ() {

    this.closeWindowBTN = new ButtonPrefab(AABB.MakeSize(12,12),19,5,-1, new CloseWindowAction(this,this.windowTerminate));
    this.closeWindowBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.closeWindowBTN);
  }

}
