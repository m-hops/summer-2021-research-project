class OrganicsApp extends WindowDefault {

  constructor() {

    super(organicsSelectionStatic.width, 24, organicsSelectionStatic);

    this.name = "OrganicsApp";

    this.currentNPC = null;

    //LANDING WINDOW//
    this.landingOBJ = new GameObject();
    this.landingOBJ.addComponent(new Transform());
    this.landingOBJ.addComponent(new WindowInputReceiverComponent());
    this.landingOBJ.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.landingOBJ);

    //INVENTORY WINDOW//
    this.inventoryOBJ = new GameObject();
    this.inventoryOBJ.addComponent(new Transform());
    this.inventoryOBJ.addComponent(new WindowInputReceiverComponent());
    this.inventoryOBJ.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.inventoryOBJ);

    //RECYCLE WINDOW//
    this.recycleOBJ = new GameObject();
    this.recycleOBJ.addComponent(new Transform());
    this.recycleOBJ.addComponent(new WindowInputReceiverComponent());
    this.recycleOBJ.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.recycleOBJ);

    //BLANK WINDOW//
    this.blankOBJ = new GameObject();
    this.blankOBJ.addComponent(new Transform());
    this.blankOBJ.addComponent(new WindowInputReceiverComponent());
    this.blankOBJ.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.blankOBJ);

    this.landingWindowOBJ();
    this.inventoryWindowOBJ();
    this.recycleWindowOBJ();
    this.blankWindowOBJ();

    this.showLanding();
  }

  showLanding() {
    this.landingOBJ.enable();
    this.inventoryOBJ.disable();
    this.recycleOBJ.disable();
    this.blankOBJ.disable();
  }

  showInventory() {
    this.inventoryOBJ.enable();
    this.landingOBJ.disable();
    this.recycleOBJ.disable();
    this.blankOBJ.disable();
  }

  showRecycle() {
    this.recycleOBJ.enable();
    this.landingOBJ.disable();
    this.inventoryOBJ.disable();
    this.blankOBJ.disable();
  }

  showBlank() {
    this.blankOBJ.enable();
    this.recycleOBJ.disable();
    this.landingOBJ.disable();
    this.inventoryOBJ.disable();
  }

  landingWindowOBJ(){

    this.landingWindowMaster = new GameObject();

    this.landingWindowMaster.addComponent(new Transform());
    this.landingWindowMaster.addComponent(new ImageComponent(organicsSelectionStatic));

    this.landingOBJ.addChild(this.landingWindowMaster);

    this.invBTN = new ButtonCustom0Prefab(AABB.MakeSize(109,109),153,112,-1);
    this.invBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.invBTN.mouse.onMouseClickEvent.addListener(new CallbackAction2(this,this.showInventory));

    this.landingOBJ.addChild(this.invBTN);

    this.recBTN = new ButtonCustom0Prefab(AABB.MakeSize(109,109),153,316,-1);
    this.recBTN.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.recBTN.mouse.onMouseClickEvent.addListener(new CallbackAction2(this,this.showBlank));
    this.recBTN.mouse.onMouseClickEvent.addListener(new OpenWindowAction(this,PatientCodeApp));
    this.landingOBJ.addChild(this.recBTN);

  }

  inventoryWindowOBJ(){

    this.inventoryWindowMaster = new GameObject();

    this.inventoryWindowMaster.addComponent(new Transform());
    this.inventoryWindowMaster.addComponent(new ImageComponent(organicsInventoryStatic));

    this.inventoryOBJ.addChild(this.inventoryWindowMaster);

    //LIVER//
    this.liverInv = new LabelPrefab(AABB.MakeSize(100, 100), 165, 195, 0, customFontPNGLargeDark);
    this.inventoryOBJ.addChild(this.liverInv);
    this.liverInv.text.text = inventory.heart;

    //HEART//
    this.heartINV = new LabelPrefab(AABB.MakeSize(100, 100), 349, 195, 0, customFontPNGLargeDark);
    this.inventoryOBJ.addChild(this.heartINV);
    this.heartINV.text.text = inventory.heart;

    //LUNG//
    this.lungINV = new LabelPrefab(AABB.MakeSize(100, 100), 165, 295, 0, customFontPNGLargeDark);
    this.inventoryOBJ.addChild(this.lungINV);
    this.lungINV.text.text = inventory.lung;

    //KIDNEY//
    this.kidneyINV = new LabelPrefab(AABB.MakeSize(100, 100), 349, 295, 0, customFontPNGLargeDark);
    this.inventoryOBJ.addChild(this.kidneyINV);
    this.kidneyINV.text.text = inventory.kidney;

    //BLOOD//
    this.bloodINV = new LabelPrefab(AABB.MakeSize(100, 100), 200, 400, 0, customFontPNGExtraLargeDark);
    this.inventoryOBJ.addChild(this.bloodINV);
    this.bloodINV.text.text = inventory.blood;
  }

  recycleWindowOBJ(){

    this.recycleWindowMaster = new GameObject();

    this.recycleWindowMaster.addComponent(new Transform());
    this.recycleWindowMaster.addComponent(new ImageComponent(organicsCollectStatic));

    this.recycleOBJ.addChild(this.recycleWindowMaster);

    //RECYCLE BUTTON//
    this.recConfirmBTN = new ButtonCustom0Prefab(AABB.MakeSize(110,110),153,63,-1);
    this.recConfirmBTN.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.checkAbandon));
    this.recConfirmBTN.Name = "recBTN";

    this.recycleOBJ.addChild(this.recConfirmBTN);

    //LIVER//
    this.liverRec = new LabelPrefab(AABB.MakeSize(100, 100), 165, 279, 0, customFontPNGLargeDark);
    this.recycleOBJ.addChild(this.liverRec);
    this.liverRec.text.text = "";

    //HEART//
    this.heartRec = new LabelPrefab(AABB.MakeSize(100, 100), 349, 279, 0, customFontPNGLargeDark);
    this.recycleOBJ.addChild(this.heartRec);
    this.heartRec.text.text = "";

    //LUNG//
    this.lungRec = new LabelPrefab(AABB.MakeSize(100, 100), 165, 379, 0, customFontPNGLargeDark);
    this.recycleOBJ.addChild(this.lungRec);
    this.lungRec.text.text = "";

    //KIDNEY//
    this.kidneyRec = new LabelPrefab(AABB.MakeSize(100, 100), 349, 379, 0, customFontPNGLargeDark);
    this.recycleOBJ.addChild(this.kidneyRec);
    this.kidneyRec.text.text = "";

    //BLOOD//
    this.bloodRec = new LabelPrefab(AABB.MakeSize(100, 100), 215, 484, 0, customFontPNGExtraLargeDark);
    this.recycleOBJ.addChild(this.bloodRec);
    this.bloodRec.text.text = "";
  }

  blankWindowOBJ(){

    this.blankWindowBKG = new GameObject();

    this.blankWindowBKG.addComponent(new Transform());
    this.blankWindowBKG.addComponent(new ImageComponent(organicsLogOnStatic));

    this.blankOBJ.addChild(this.blankWindowBKG);

  }

  setNPC(npc) {

    this.currentNPC = npc;

    this.showRecycle();

    this.liverRec.text.text = npc.liverRecycle;
    this.heartRec.text.text = npc.heartRecycle;
    this.lungRec.text.text = npc.lungRecycle;
    this.kidneyRec.text.text = npc.kidneyRecycle;
    this.bloodRec.text.text = npc.bloodRecycle;

  }

  checkAbandon() {

    if (this.currentNPC.tryRecycle(inventory)) {

      recycleConfirmSFX.play();
      this.showLanding();

    } else {

      errorBlipSFX.play();
    }
  }
}
