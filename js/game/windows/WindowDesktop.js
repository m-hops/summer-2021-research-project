class WindowDesktop extends GameObject {

  constructor() {

    super();
    this.name = "WindowDesktop";

    let rectCollider = new RectColliderComponent(AABB.MakeSize(width, height));
    this.addComponent(new Transform(0,0,99999999999));
    this.addComponent(rectCollider);
    this.addComponent(new ImageComponent(staticOSBKG));
    // this.addComponent(new RenderDebugComponent());
    this.addComponent(new WindowInputReceiverComponent());

    this.sceneBTNs();
    this.logOffActive = false;

  }

  sceneBTNs() {

    this.setupSystemFolderBTN();
    this.setupTrashFolderBTN();
    this.setupHelpFolderBTN();
    this.setupLogOffFolderBTN();
    this.exitDropDownOBJ();
  }

  setupSystemFolderBTN() {

    this.systemFolderBTN = new ButtonCustom0Prefab(AABB.MakeSize(52,60),833,77,-1, new OpenWindowAction(this,SystemFolderApp));
    this.systemFolderBTN.Name = "systemFolderBTN";
    this.systemFolderBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.systemFolderBTN);
  }

  setupTrashFolderBTN() {

    this.trashFolderBTN = new ButtonCustom0Prefab(AABB.MakeSize(44,57),927,625,-1);
    this.trashFolderBTN.Name = "trashFolderBTN";
    this.trashFolderBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(errorBlipSFX));

    this.addChild(this.trashFolderBTN);
  }

  setupHelpFolderBTN() {

    this.helpFolderBTN = new ButtonCustom0Prefab(AABB.MakeSize(40,60),177,529,-1, new OpenWindowAction(this,HelpApp));
    this.helpFolderBTN.Name = "helpFolderBTN";
    this.helpFolderBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addChild(this.helpFolderBTN);
  }

  setupLogOffFolderBTN() {

    this.logOffBTN = new ButtonCustom0Prefab(AABB.MakeSize(24,20),27,10,-10);
    this.logOffBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.logOffBTN.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.logOffSwitch));

    this.addChild(this.logOffBTN);
  }

  exitDropDownOBJ() {

    this.exitWindowFalse = new GameObject();

    this.exitWindowFalse.addComponent(new ImageComponent(logOffFalse));
    this.exitWindowFalse.addComponent(new Transform(20,30));

    this.addChild(this.exitWindowFalse);
    this.exitWindowFalse.disable();
  }

  logOffSwitch() {

    if (this.logOffActive) {

      this.exitWindowFalse.disable();

      this.logOffActive = false;

    } else {

      this.exitWindowFalse.enable();

      this.logOffActive = true;

    }
  }
}
