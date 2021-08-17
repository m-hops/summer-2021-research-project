class OrganicsApp extends WindowDefault {

  constructor() {

    super(organicsSelectionStatic.width, 24);

    this.windowBackgroundStatic();
  }

  windowBackgroundStatic(){

    this.windowBKG = new GameObject();

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(new ImageComponent(organicsSelectionStatic));

    this.addChild(this.windowBKG);
  }

}
