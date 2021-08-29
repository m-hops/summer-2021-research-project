class SystemFolderApp extends WindowDefault{

  constructor() {

    super(systemFolderBKG.width, 24, systemFolderBKG);

    this.windowBackgroundStatic();
    this.ammitButtonOBJ();
    this.mailButtonOBJ();
    this.healthcareButtonOBJ();
    this.chartsButtonOBJ();
    this.operationsButtonOBJ();
    this.referencesButtonOBJ();
    this.organicsButtonOBJ();

    this.name = "systemFolderApp";
  }

  windowBackgroundStatic() {

    this.windowBKG = new GameObject();

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(new ImageComponent(systemFolderDisabledAppsBKG));


    this.addChild(this.windowBKG);
  }

  ammitButtonOBJ() {

    this.ammitButton = new ButtonCustom0Prefab(AABB.MakeSize(51,57),35,38,-1, new OpenWindowAction(this,AmmitApp));
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.ammitButton.name = "ammitButton";

    this.addChild(this.ammitButton);

  }

  mailButtonOBJ() {

    this.mailButton = new ButtonCustom0Prefab(AABB.MakeSize(76,68),140,30,-1);
    this.mailButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.mailButton);

  }

  healthcareButtonOBJ() {

    this.healthcareButton = new ButtonCustom0Prefab(AABB.MakeSize(67,68),268,30,-1);
    this.healthcareButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.healthcareButton);

  }

  chartsButtonOBJ() {

    this.chartsButton = new ButtonCustom0Prefab(AABB.MakeSize(45,77),41,126,-1);
    this.chartsButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.chartsButton);

  }

  operationsButtonOBJ() {

    this.ammitButton = new ButtonCustom0Prefab(AABB.MakeSize(78,70),139,132,-1, new OpenWindowAction(this,OperationsApp));
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButton);

  }

  referencesButtonOBJ() {

    this.refButton = new ButtonCustom0Prefab(AABB.MakeSize(90,73),257,132,-1);
    this.refButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.refButton);

  }

  organicsButtonOBJ() {

    this.ammitButton = new ButtonCustom0Prefab(AABB.MakeSize(64,64),31,245,-1, new OpenWindowAction(this,OrganicsApp));
    this.ammitButton.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButton);

  }

}
