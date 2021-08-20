class DesktopScene extends Scene {

  constructor() {
    super();

    this.cameraOBJ();
    this.staticBackgroundOBJ();
    this.sceneBTNs();
    this.staticOverlayOBJ();
    this.setupWindowEnviroment();
    this.musicOBJ();

  }

  cameraOBJ() {
    //CAMERA SETUP//
    this.camera = new GameObject();

    this.camera.addComponent(new CameraComponent());
    this.camera.addComponent(new Transform());

    this.addGameObject(this.camera);
  }

  staticBackgroundOBJ() {
    //FLAT DESKTOP BACKGROUND//

    this.staticBackground = new GameObject();
    this.staticBackground.Name = "staticBackground";
    this.staticBackground.addComponent(new Transform(0,0,100000));
    this.staticBackground.addComponent(new ImageComponent(staticOSBKG));

    this.addGameObject(this.staticBackground);

  }

  staticOverlayOBJ() {
    //FLAT DESKTOP OVERLAY//

    this.staticOverlay = new GameObject();
    this.staticOverlay.addComponent(new Transform(0,0));
    this.staticOverlay.addComponent(new ImageComponent(edgesOverlay));

    this.addGameObject(this.staticOverlay);

  }

  sceneBTNs() {

    this.setupSystemFolderBTN();
    this.setupTrashFolderBTN();
    this.setupHelpFolderBTN();
    this.setupLogOffFolderBTN();
  }

  setupSystemFolderBTN() {

    this.systemFolderBTN = new ButtonPrefab(AABB.MakeSize(52,60),833,77,-1, new OpenWindowAction(this.camera,SystemFolderApp));
    this.systemFolderBTN.Name = "systemFolderBTN";
    this.systemFolderBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addGameObject(this.systemFolderBTN);
  }

  setupTrashFolderBTN() {

    this.trashFolderBTN = new ButtonPrefab(AABB.MakeSize(44,57),927,625,-1);
    this.trashFolderBTN.Name = "trashFolderBTN";
    this.trashFolderBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addGameObject(this.trashFolderBTN);
  }

  setupHelpFolderBTN() {

    this.helpFolderBTN = new ButtonPrefab(AABB.MakeSize(40,60),177,529,-1, new OpenWindowAction(this.camera,HelpApp));
    this.helpFolderBTN.Name = "helpFolderBTN";
    this.helpFolderBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addGameObject(this.helpFolderBTN);
  }

  setupLogOffFolderBTN() {

    this.logOffBTN = new ButtonPrefab(AABB.MakeSize(24,20),27,10,-1, new ChangeSceneAction('loading'));
    this.logOffBTN.Name = "logOffBTN";
    this.logOffBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));

    this.addGameObject(this.logOffBTN);
  }

  setupWindowEnviroment() {

    this.windowManager = new WindowManagerPrefab();

    this.addGameObject(this.windowManager)
  }

  musicOBJ() {

    this.music = new GameObject();

    this.music.addComponent(new MusicPlayerComponent(droneAudio,0.1));

    this.addGameObject(this.music);
  }
}
