class LoadingScene extends Scene {

  constructor() {

    super();

    this.cameraOBJ();
    this.staticBackgroundOBJ();
    this.bootAnimation();
    this.bootAnimation2();

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

    this.staticBackground.addComponent(new Transform(0,0));
    this.staticBackground.addComponent(new ImageComponent(staticLoadingBlankBKG));

    this.staticBackground.getTransform().local.position.z = -1;

    this.addGameObject(this.staticBackground);

  }

  bootAnimation() {
    //CONTROLS LOGO SCREEN, AUDIO QUEUE, AND AUTOMATIC SCENE CHANGE//
    this.timelineObject0 = this.addGameObject(new GameObject);

    this.timelineObject0.addComponent(new Transform());
    this.timelineObject0.addComponent(new ImageComponent(staticLoadingBKG));

    let potTL = this.timelineObject0.addComponent(new PositionTimeline());
    potTL.addKey(0,0,0,1);
    potTL.addKey(1999,0,0,1);
    potTL.addKey(2000,0,0,-2);
    potTL.addKey(4999,0,0,-2);
    potTL.addKey(5000,0,0,1);

    this.timelineObject1 = this.addGameObject(new GameObject());
    let mainActionTL = this.timelineObject1.addComponent(new EventTimeline());
    mainActionTL.addAction(0, new StartGOTimelinesAction(this.timelineObject0, new ChangeSceneAction("desktop")));
    mainActionTL.addAction(2200, new PlaySFXAction(openingChimeAudioNew));
    mainActionTL.addAction(6000, new ChangeSceneAction("desktop"));
    mainActionTL.startTimeline();
  }

  bootAnimation2() {

    //CONTROLS LOGO SCREEN, AUDIO QUEUE, AND AUTOMATIC SCENE CHANGE//
    this.timelineObject2 = this.addGameObject(new GameObject);

    this.timelineObject2.addComponent(new Transform());
    let imgComp = this.timelineObject2.addComponent(new AnimationComponent(loadingGlitchAnimation,1));
    imgComp.centered = true;

    let potTL = this.timelineObject2.addComponent(new PositionTimeline());
    potTL.addKey(0,width / 2, height / 2, 3);
    potTL.addKey(3499,width / 2, height / 2, 3);
    potTL.addKey(3500,width / 2, height / 2, -3);
    potTL.addKey(3600,width / 2, height / 2, -3);
    potTL.addKey(3601,width / 2, height / 2, 3);
    potTL.addKey(3899,width / 2, height / 2, 3);
    potTL.addKey(3900,width / 2, height / 2, -3);
    potTL.addKey(4399,width / 2, height / 2, -3);
    potTL.addKey(4400,width / 2, height / 2, -3);
    potTL.addKey(4401,width / 2, height / 2, 3);

    this.timelineObject3 = this.addGameObject(new GameObject());
    let mainActionTL = this.timelineObject3.addComponent(new EventTimeline());
    mainActionTL.addAction(0, new StartGOTimelinesAction(this.timelineObject2));
    mainActionTL.startTimeline();

  }

}
