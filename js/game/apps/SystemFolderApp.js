class SystemFolderApp extends WindowDefault{

  constructor() {

    super(systemFolderBKG.width, 24, SystemFolderApp);

    this.windowBackgroundStatic();
    this.ammitButtonOBJ();
    this.operationsButtonOBJ();
    this.organicsButtonOBJ();

  }

  windowBackgroundStatic() {

    this.windowBKG = new GameObject();

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(new ImageComponent(systemFolderDisabledAppsBKG));

    this.addChild(this.windowBKG);
  }

  ammitButtonOBJ() {

    this.ammitButton = new ButtonPrefab(AABB.MakeSize(51,57),35,38,-1, new OpenWindowAction(this,AmmitApp));
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButton);

  }

  operationsButtonOBJ() {

    this.ammitButton = new ButtonPrefab(AABB.MakeSize(78,70),139,132,-1);
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButton);

  }

  organicsButtonOBJ() {

    this.ammitButton = new ButtonPrefab(AABB.MakeSize(64,64),31,245,-1);
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButton);

  }

}
