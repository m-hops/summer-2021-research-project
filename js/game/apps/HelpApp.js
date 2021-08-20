class HelpApp extends WindowDefault{

  constructor() {

    super(helpWindow[0].width, 24, helpWindow[0]);

    this.windowBackgroundStatic();
    this.helpAppButtonLeftOBJ();
    this.helpAppButtonRightOBJ();

  }

  windowBackgroundStatic(){

    this.windowBKG = new GameObject();

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(new ImageComponent(helpWindow[0]));

    this.addChild(this.windowBKG);
  }

  helpAppButtonLeftOBJ() {

    this.helpAppButtonLeft = new ButtonPrefab(AABB.MakeSize(arrowLeftLight.width,arrowLeftLight.height),75,100,-1);
    this.helpAppButtonLeft.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.helpAppButtonLeft);

    this.helpAppButtonLeftOverlay = new GameObject();

    this.helpAppButtonLeftOverlay.addComponent(new Transform(75,100));
    this.helpAppButtonLeftOverlay.addComponent(new ImageComponent(arrowLeftLight));

    this.addChild(this.helpAppButtonLeftOverlay);

  }

  helpAppButtonRightOBJ() {

    this.helpAppButtonRight = new ButtonPrefab(AABB.MakeSize(arrowRightLight.width,arrowRightLight.height),665,100,-1);
    this.helpAppButtonRight.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.helpAppButtonRight);

    this.helpAppButtonRightOverlay = new GameObject();

    this.helpAppButtonRightOverlay.addComponent(new Transform(665,100));
    this.helpAppButtonRightOverlay.addComponent(new ImageComponent(arrowRightLight));

    this.addChild(this.helpAppButtonRightOverlay);

  }

}
