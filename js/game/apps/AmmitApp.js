class AmmitApp extends WindowDefault {

  constructor() {

    super(ammitTemplateStatic.width, 24, ammitTemplateStatic);

    this.windowBackgroundStatic();
    this.ammitButtonLeftOBJ();
    this.ammitButtonRightOBJ();
  }

  windowBackgroundStatic() {

    this.windowBKG = new GameObject();

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(new ImageComponent(ammitTemplateStatic));

    this.addChild(this.windowBKG);
  }

  ammitButtonLeftOBJ() {

    this.ammitButtonLeft = new ButtonPrefab(AABB.MakeSize(arrowLeftDark.width,arrowLeftDark.height),100,505,-1);
    this.ammitButtonLeft.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButtonLeft);

    this.ammitButtonLeftOverlay = new GameObject();

    this.ammitButtonLeftOverlay.addComponent(new Transform(100,505));
    this.ammitButtonLeftOverlay.addComponent(new ImageComponent(arrowLeftDark));

    this.addChild(this.ammitButtonLeftOverlay);

  }

  ammitButtonRightOBJ() {

    this.ammitButtonRight = new ButtonPrefab(AABB.MakeSize(arrowRightDark.width,arrowRightDark.height),404,505,-1);
    this.ammitButtonRight.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.ammitButtonRight);

    this.ammitButtonRightOverlay = new GameObject();

    this.ammitButtonRightOverlay.addComponent(new Transform(404,505));
    this.ammitButtonRightOverlay.addComponent(new ImageComponent(arrowRightDark));

    this.addChild(this.ammitButtonRightOverlay);

  }

}
