class HelpApp extends WindowDefault{

  constructor() {

    super(helpWindow[0].width, 24, helpWindow[0]);

    this.windowBackgroundStatic();
    this.helpAppButtonLeftOBJ();
    this.helpAppButtonRightOBJ();

    this.currentImageIndex = 0;

  }

  onNext() {

    this.currentImageIndex = (this.currentImageIndex + 1) % helpWindow.length;
    this.imageComp.image = helpWindow[this.currentImageIndex];
  }

  onBack() {
    if (this.currentImageIndex == 0) {

      this.currentImageIndex = helpWindow.length - 1;
    } else {

      this.currentImageIndex --;
    }

    this.imageComp.image = helpWindow[this.currentImageIndex];
  }

  windowBackgroundStatic(){

    this.windowBKG = new GameObject();

    this.imageComp = new ImageComponent(helpWindow[0]);

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(this.imageComp);

    this.addChild(this.windowBKG);
  }

  helpAppButtonLeftOBJ() {

    this.helpAppButtonLeft = new ButtonCustom0Prefab(AABB.MakeSize(arrowLeftLight.width,arrowLeftLight.height),75,100,-1);
    this.helpAppButtonLeft.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.helpAppButtonLeft.mouse.onMouseClickEvent.addListener(new CallbackAction2(this,this.onBack));

    this.addChild(this.helpAppButtonLeft);

    this.helpAppButtonLeftOverlay = new GameObject();

    this.helpAppButtonLeftOverlay.addComponent(new Transform(75,100));
    this.helpAppButtonLeftOverlay.addComponent(new ImageComponent(arrowLeftLight));

    this.addChild(this.helpAppButtonLeftOverlay);

  }

  helpAppButtonRightOBJ() {

    this.helpAppButtonRight = new ButtonCustom0Prefab(AABB.MakeSize(arrowRightLight.width,arrowRightLight.height),665,100,-1);
    this.helpAppButtonRight.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.helpAppButtonRight.mouse.onMouseClickEvent.addListener(new CallbackAction2(this,this.onNext));

    this.addChild(this.helpAppButtonRight);

    this.helpAppButtonRightOverlay = new GameObject();

    this.helpAppButtonRightOverlay.addComponent(new Transform(665,100));
    this.helpAppButtonRightOverlay.addComponent(new ImageComponent(arrowRightLight));

    this.addChild(this.helpAppButtonRightOverlay);

  }

}
