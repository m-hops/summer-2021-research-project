class SystemFolderApp extends WindowDefault{

  constructor() {

    super(systemFolderBKG.width, 24);

    this.windowBackgroundStatic();
    this.ammitButtonOBJ();
    this.mailButtonOBJ();
    this.healthcareButtonOBJ();
    this.chartsButtonOBJ();
    this.operationsButtonOBJ();
    this.referencesButtonOBJ();
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

  mailButtonOBJ() {

    this.mailButton = new ButtonPrefab(AABB.MakeSize(76,68),140,30,-1);
    this.mailButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.mailButton);

  }

  healthcareButtonOBJ() {

    this.healthcareButton = new ButtonPrefab(AABB.MakeSize(67,68),268,30,-1);
    this.healthcareButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.healthcareButton);

  }

  chartsButtonOBJ() {

    this.chartsButton = new ButtonPrefab(AABB.MakeSize(45,77),41,126,-1);
    this.chartsButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.chartsButton);

  }

  operationsButtonOBJ() {

    this.ammitButton = new ButtonPrefab(AABB.MakeSize(78,70),139,132,-1, new OpenWindowAction(this,OperationsApp));
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButton);

  }

  referencesButtonOBJ() {

    this.refButton = new ButtonPrefab(AABB.MakeSize(90,73),257,132,-1);
    this.refButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.refButton);

  }

  organicsButtonOBJ() {

    this.ammitButton = new ButtonPrefab(AABB.MakeSize(64,64),31,245,-1, new OpenWindowAction(this,OrganicsApp));
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButton);

  }

}
