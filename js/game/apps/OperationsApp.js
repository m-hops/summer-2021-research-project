class OperationsApp extends WindowDefault {

  constructor() {

    super(operationsStatic.width, 24);

    this.windowBackgroundStatic();
  }

  windowBackgroundStatic(){

    this.windowBKG = new GameObject();

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(new ImageComponent(operationsStatic));

    this.addChild(this.windowBKG);
  }

}
