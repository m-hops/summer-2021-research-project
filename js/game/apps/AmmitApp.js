class AmmitApp extends WindowDefault {

  constructor() {

    super(ammitTemplateStatic.width, 24, ammitTemplateStatic);

    //WINDOW 0//
    this.window0 = new GameObject();
    this.window0.addComponent(new Transform());
    this.window0.addComponent(new WindowInputReceiverComponent());
    this.window0.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.window0);

    //WINDOW 1//
    this.window1 = new GameObject();
    this.window1.addComponent(new Transform());
    this.window1.addComponent(new WindowInputReceiverComponent());
    this.window1.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.window1);

    //WINDOW 2//
    this.window2 = new GameObject();
    this.window2.addComponent(new Transform());
    this.window2.addComponent(new WindowInputReceiverComponent());
    this.window2.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.window2);

    //WINDOW 3//
    this.window3 = new GameObject();
    this.window3.addComponent(new Transform());
    this.window3.addComponent(new WindowInputReceiverComponent());
    this.window3.addComponent(new RectColliderComponent(this.getClientAABB()));
    this.addChild(this.window3);

    this.window0OBJ();
    this.window1OBJ();
    this.window2OBJ();
    this.window3OBJ();
    this.npcSlot0();
    this.npcSlot1();
    this.npcSlot2();
    this.npcSlot3();
    this.npcSlot4();
    this.npcSlot5();
    this.npcSlot6();
    this.npcSlot7();

    this.showWindow0();

    this.updateOverlayState();

    this.inventoryChangeCallback = new CallbackAction2(this, this.updateOverlayState);

    inventory.onInventoryChange.addListener(this.inventoryChangeCallback);
  }

  end() {

    inventory.onInventoryChange.removeListener(this.inventoryChangeCallback);
    super.end();
  }

  showWindow0() {
    this.window0.enable();
    this.window1.disable();
    this.window2.disable();
    this.window3.disable();
  }

  showWindow1() {
    this.window1.enable();
    this.window2.disable();
    this.window0.disable();
    this.window3.disable();
  }

  showWindow2() {
    this.window2.enable();
    this.window0.disable();
    this.window1.disable();
    this.window3.disable();
  }

  showWindow3() {
    this.window3.enable();
    this.window0.disable();
    this.window1.disable();
    this.window2.disable();
  }

  window0OBJ() {

    //BKG IMAGE//
    this.window0BKG = new GameObject();

    this.window0BKG.addComponent(new Transform());
    this.window0BKG.addComponent(new ImageComponent(ammitTemplateStatic));

    this.window0.addChild(this.window0BKG);

    //BUTTON LEFT//
    this.window0Left = new ButtonCustom0Prefab(AABB.MakeSize(arrowLeftDark.width, arrowLeftDark.height), 100, 505, -1);
    this.window0Left.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window0Left.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow3));

    this.window0.addChild(this.window0Left);

    this.window0LeftOverlay = new GameObject();

    this.window0LeftOverlay.addComponent(new Transform(100, 505));
    this.window0LeftOverlay.addComponent(new ImageComponent(arrowLeftDark));

    this.window0.addChild(this.window0LeftOverlay);

    //BUTTON RIGHT//
    this.window0Right = new ButtonCustom0Prefab(AABB.MakeSize(arrowRightDark.width, arrowRightDark.height), 404, 505, -1);
    this.window0Right.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window0Right.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow1));

    this.window0.addChild(this.window0Right);

    this.window0RightOverlay = new GameObject();

    this.window0RightOverlay.addComponent(new Transform(404, 505));
    this.window0RightOverlay.addComponent(new ImageComponent(arrowRightDark));

    this.window0.addChild(this.window0RightOverlay);

    //BUTTON SUBMIT TOP//
    this.window0SubmitTop = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 209, -1);
    this.window0SubmitTop.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved0));

    this.window0.addChild(this.window0SubmitTop);

    //BUTTON SUBMIT BOTTOM//
    this.window0SubmitBottom = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 449, -1);
    this.window0SubmitBottom.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved1));

    this.window0.addChild(this.window0SubmitBottom);
  }

  window1OBJ() {

    //BKG IMAGE//
    this.window1BKG = new GameObject();

    this.window1BKG.addComponent(new Transform());
    this.window1BKG.addComponent(new ImageComponent(ammitTemplateStatic));

    this.window1.addChild(this.window1BKG);

    //BUTTON LEFT//
    this.window1Left = new ButtonCustom0Prefab(AABB.MakeSize(arrowLeftDark.width, arrowLeftDark.height), 100, 505, -1);
    this.window1Left.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window1Left.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow0));

    this.window1.addChild(this.window1Left);

    this.window1LeftOverlay = new GameObject();

    this.window1LeftOverlay.addComponent(new Transform(100, 505));
    this.window1LeftOverlay.addComponent(new ImageComponent(arrowLeftDark));

    this.window1.addChild(this.window1LeftOverlay);

    //BUTTON RIGHT//
    this.window1Right = new ButtonCustom0Prefab(AABB.MakeSize(arrowRightDark.width, arrowRightDark.height), 404, 505, -1);
    this.window1Right.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window1Right.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow2));

    this.window1.addChild(this.window1Right);

    this.window1RightOverlay = new GameObject();

    this.window1RightOverlay.addComponent(new Transform(404, 505));
    this.window1RightOverlay.addComponent(new ImageComponent(arrowRightDark));

    this.window1.addChild(this.window1RightOverlay);

    //BUTTON SUBMIT TOP//
    this.window01SubmitTop = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 209, -1);
    this.window01SubmitTop.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved2));

    this.window1.addChild(this.window01SubmitTop);

    //BUTTON SUBMIT TOP//
    this.window1SubmitBottom = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 449, -1);
    this.window1SubmitBottom.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved3));

    this.window1.addChild(this.window1SubmitBottom);
  }

  window2OBJ() {

    //BKG IMAGE//
    this.window2BKG = new GameObject();

    this.window2BKG.addComponent(new Transform());
    this.window2BKG.addComponent(new ImageComponent(ammitTemplateStatic));

    this.window2.addChild(this.window2BKG);

    //BUTTON LEFT//
    this.window2Left = new ButtonCustom0Prefab(AABB.MakeSize(arrowLeftDark.width, arrowLeftDark.height), 100, 505, -1);
    this.window2Left.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window2Left.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow1));

    this.window2.addChild(this.window2Left);

    this.window2LeftOverlay = new GameObject();

    this.window2LeftOverlay.addComponent(new Transform(100, 505));
    this.window2LeftOverlay.addComponent(new ImageComponent(arrowLeftDark));

    this.window2.addChild(this.window2LeftOverlay);

    //BUTTON RIGHT//
    this.window2Right = new ButtonCustom0Prefab(AABB.MakeSize(arrowRightDark.width, arrowRightDark.height), 404, 505, -1);
    this.window2Right.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window2Right.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow3));

    this.window2.addChild(this.window2Right);

    this.window2RightOverlay = new GameObject();

    this.window2RightOverlay.addComponent(new Transform(404, 505));
    this.window2RightOverlay.addComponent(new ImageComponent(arrowRightDark));

    this.window2.addChild(this.window2RightOverlay);

    //BUTTON SUBMIT TOP//
    this.window2SubmitTop = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 209, -1);
    this.window2SubmitTop.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved4));

    this.window2.addChild(this.window2SubmitTop);

    //BUTTON SUBMIT TOP//
    this.window2SubmitBottom = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 449, -1);
    this.window2SubmitBottom.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved5));

    this.window2.addChild(this.window2SubmitBottom);
  }

  window3OBJ() {

    //BKG IMAGE//
    this.window3BKG = new GameObject();

    this.window3BKG.addComponent(new Transform());
    this.window3BKG.addComponent(new ImageComponent(ammitTemplateStatic));

    this.window3.addChild(this.window3BKG);

    //BUTTON LEFT//
    this.window3Left = new ButtonCustom0Prefab(AABB.MakeSize(arrowLeftDark.width, arrowLeftDark.height), 100, 505, -1);
    this.window3Left.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window3Left.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow2));

    this.window3.addChild(this.window3Left);

    this.window3LeftOverlay = new GameObject();

    this.window3LeftOverlay.addComponent(new Transform(100, 505));
    this.window3LeftOverlay.addComponent(new ImageComponent(arrowLeftDark));

    this.window3.addChild(this.window3LeftOverlay);

    //BUTTON RIGHT//
    this.window3Right = new ButtonCustom0Prefab(AABB.MakeSize(arrowRightDark.width, arrowRightDark.height), 404, 505, -1);
    this.window3Right.mouse.onMouseClickEvent.addListener(new PlaySFXAction(selectionBlipSFX));
    this.window3Right.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.showWindow0));

    this.window3.addChild(this.window3Right);

    this.window3RightOverlay = new GameObject();

    this.window3RightOverlay.addComponent(new Transform(404, 505));
    this.window3RightOverlay.addComponent(new ImageComponent(arrowRightDark));

    this.window3.addChild(this.window3RightOverlay);

    //BUTTON SUBMIT TOP//
    this.window3SubmitTop = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 209, -1);
    this.window3SubmitTop.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved6));

    this.window3.addChild(this.window3SubmitTop);

    //BUTTON SUBMIT TOP//
    this.window3SubmitBottom = new ButtonCustom0Prefab(AABB.MakeSize(123, 47), 53, 449, -1);
    this.window3SubmitBottom.mouse.onMouseClickEvent.addListener(new CallbackAction2(this, this.saved7));

    this.window3.addChild(this.window3SubmitBottom);
  }

  npcSlot0() {

    //PATIENT ID//
    this.npcIDSlot0ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 74, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0ID);
    this.npcIDSlot0ID.text.text = gameState.npc[0].code;

    //NAME//
    this.npcIDSlot0Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 114, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0Name);
    this.npcIDSlot0Name.text.text = gameState.npc[0].name;

    //QOL//
    this.npcIDSlot0QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 154, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0QOL);
    this.npcIDSlot0QOL.text.text = gameState.npc[0].qolSaved;

    //PROFIT//
    this.npcIDSlot0Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 194, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0Profit);
    this.npcIDSlot0Profit.text.text = gameState.npc[0].profit;

    //HEARTCOST//
    this.npcIDSlot0HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 116, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0HeartCost);
    this.npcIDSlot0HeartCost.text.text = gameState.npc[0].heartCost;

    //lUNGCOST//
    this.npcIDSlot0LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 134, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0LungCost);
    this.npcIDSlot0LungCost.text.text = gameState.npc[0].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot0KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 152, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0KidneyCost);
    this.npcIDSlot0KidneyCost.text.text = gameState.npc[0].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot0LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 170, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0LiverCost);
    this.npcIDSlot0LiverCost.text.text = gameState.npc[0].liverCost;

    //BLOODCOST//
    this.npcIDSlot0BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 188, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot0BloodCost);
    this.npcIDSlot0BloodCost.text.text = gameState.npc[0].bloodCost;

    //PORTRAIT//
    this.npcIDSlot0Portrait = new GameObject();
    this.npcIDSlot0Portrait.addComponent(new Transform(44, 34));
    this.npcIDSlot0Portrait.addComponent(new ImageComponent(npcPortrait[0]));
    this.window0BKG.addChild(this.npcIDSlot0Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot0Saved = new GameObject();
    this.npcIDSlot0Saved.addComponent(new Transform(36, 28));
    this.npcIDSlot0Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window0BKG.addChild(this.npcIDSlot0Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot0Abandoned = new GameObject();
    this.npcIDSlot0Abandoned.addComponent(new Transform(36, 28));
    this.npcIDSlot0Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window0BKG.addChild(this.npcIDSlot0Abandoned);

  }

  npcSlot1() {

    //PATIENT ID//
    this.npcIDSlot1ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 314, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1ID);
    this.npcIDSlot1ID.text.text = gameState.npc[1].code;

    //NAME//
    this.npcIDSlot1Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 354, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1Name);
    this.npcIDSlot1Name.text.text = gameState.npc[1].name;

    //QOL//
    this.npcIDSlot1QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 394, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1QOL);
    this.npcIDSlot1QOL.text.text = gameState.npc[1].qolSaved;

    //PROFIT//
    this.npcIDSlot1Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 434, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1Profit);
    this.npcIDSlot1Profit.text.text = gameState.npc[1].profit;

    //HEARTCOST//
    this.npcIDSlot1HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 356, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1HeartCost);
    this.npcIDSlot1HeartCost.text.text = gameState.npc[1].heartCost;

    //lUNGCOST//
    this.npcIDSlot1LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 374, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1LungCost);
    this.npcIDSlot1LungCost.text.text = gameState.npc[1].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot1KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 392, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1KidneyCost);
    this.npcIDSlot1KidneyCost.text.text = gameState.npc[1].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot1LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 410, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1LiverCost);
    this.npcIDSlot1LiverCost.text.text = gameState.npc[1].liverCost;

    //BLOODCOST//
    this.npcIDSlot1BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 428, 0, customFontPNGLight);
    this.window0BKG.addChild(this.npcIDSlot1BloodCost);
    this.npcIDSlot1BloodCost.text.text = gameState.npc[1].bloodCost;

    //PORTRAIT//
    this.npcIDSlot1Portrait = new GameObject();

    this.npcIDSlot1Portrait.addComponent(new Transform(44, 274));
    this.npcIDSlot1Portrait.addComponent(new ImageComponent(npcPortrait[1]));

    this.window0BKG.addChild(this.npcIDSlot1Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot1Saved = new GameObject();
    this.npcIDSlot1Saved.addComponent(new Transform(36, 268));
    this.npcIDSlot1Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window0BKG.addChild(this.npcIDSlot1Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot1Abandoned = new GameObject();
    this.npcIDSlot1Abandoned.addComponent(new Transform(36, 268));
    this.npcIDSlot1Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window0BKG.addChild(this.npcIDSlot1Abandoned);

  }

  npcSlot2() {

    //PATIENT ID//
    this.npcIDSlot2ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 74, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2ID);
    this.npcIDSlot2ID.text.text = gameState.npc[2].code;

    //NAME//
    this.npcIDSlot2Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 114, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2Name);
    this.npcIDSlot2Name.text.text = gameState.npc[2].name;

    //QOL//
    this.npcIDSlot2QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 154, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2QOL);
    this.npcIDSlot2QOL.text.text = gameState.npc[2].qolSaved;

    //PROFIT//
    this.npcIDSlot2Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 194, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2Profit);
    this.npcIDSlot2Profit.text.text = gameState.npc[2].profit;

    //HEARTCOST//
    this.npcIDSlot2HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 116, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2HeartCost);
    this.npcIDSlot2HeartCost.text.text = gameState.npc[2].heartCost;

    //lUNGCOST//
    this.npcIDSlot2LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 134, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2LungCost);
    this.npcIDSlot2LungCost.text.text = gameState.npc[2].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot2KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 152, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2KidneyCost);
    this.npcIDSlot2KidneyCost.text.text = gameState.npc[2].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot2LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 170, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2LiverCost);
    this.npcIDSlot2LiverCost.text.text = gameState.npc[2].liverCost;

    //BLOODCOST//
    this.npcIDSlot2BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 188, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot2BloodCost);
    this.npcIDSlot2BloodCost.text.text = gameState.npc[2].bloodCost;

    //PORTRAIT//
    this.npcIDSlot2Portrait = new GameObject();

    this.npcIDSlot2Portrait.addComponent(new Transform(44, 34));
    this.npcIDSlot2Portrait.addComponent(new ImageComponent(npcPortrait[2]));

    this.window1BKG.addChild(this.npcIDSlot2Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot2Saved = new GameObject();
    this.npcIDSlot2Saved.addComponent(new Transform(36, 28));
    this.npcIDSlot2Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window1BKG.addChild(this.npcIDSlot2Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot2Abandoned = new GameObject();
    this.npcIDSlot2Abandoned.addComponent(new Transform(36, 28));
    this.npcIDSlot2Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window1BKG.addChild(this.npcIDSlot2Abandoned);

  }

  npcSlot3() {

    //PATIENT ID//
    this.npcIDSlot3ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 314, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3ID);
    this.npcIDSlot3ID.text.text = gameState.npc[3].code;

    //NAME//
    this.npcIDSlot3Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 354, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3Name);
    this.npcIDSlot3Name.text.text = gameState.npc[3].name;

    //QOL//
    this.npcIDSlot3QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 394, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3QOL);
    this.npcIDSlot3QOL.text.text = gameState.npc[3].qolSaved;

    //PROFIT//
    this.npcIDSlot3Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 434, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3Profit);
    this.npcIDSlot3Profit.text.text = gameState.npc[3].profit;

    //HEARTCOST//
    this.npcIDSlot3HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 356, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3HeartCost);
    this.npcIDSlot3HeartCost.text.text = gameState.npc[3].heartCost;

    //lUNGCOST//
    this.npcIDSlot3LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 374, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3LungCost);
    this.npcIDSlot3LungCost.text.text = gameState.npc[3].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot3KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 392, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3KidneyCost);
    this.npcIDSlot3KidneyCost.text.text = gameState.npc[3].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot3LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 410, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3LiverCost);
    this.npcIDSlot3LiverCost.text.text = gameState.npc[3].liverCost;

    //BLOODCOST//
    this.npcIDSlot3BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 428, 0, customFontPNGLight);
    this.window1BKG.addChild(this.npcIDSlot3BloodCost);
    this.npcIDSlot3BloodCost.text.text = gameState.npc[3].bloodCost;

    //PORTRAIT//
    this.npcIDSlot3Portrait = new GameObject();

    this.npcIDSlot3Portrait.addComponent(new Transform(44, 274));
    this.npcIDSlot3Portrait.addComponent(new ImageComponent(npcPortrait[3]));

    this.window1BKG.addChild(this.npcIDSlot3Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot3Saved = new GameObject();
    this.npcIDSlot3Saved.addComponent(new Transform(36, 268));
    this.npcIDSlot3Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window1BKG.addChild(this.npcIDSlot3Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot3Abandoned = new GameObject();
    this.npcIDSlot3Abandoned.addComponent(new Transform(36, 268));
    this.npcIDSlot3Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window1BKG.addChild(this.npcIDSlot3Abandoned);

  }

  npcSlot4() {

    //PATIENT ID//
    this.npcIDSlot4ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 74, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4ID);
    this.npcIDSlot4ID.text.text = gameState.npc[4].code;

    //NAME//
    this.npcIDSlot4Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 114, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4Name);
    this.npcIDSlot4Name.text.text = gameState.npc[4].name;

    //QOL//
    this.npcIDSlot4QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 154, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4QOL);
    this.npcIDSlot4QOL.text.text = gameState.npc[4].qolSaved;

    //PROFIT//
    this.npcIDSlot4Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 194, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4Profit);
    this.npcIDSlot4Profit.text.text = gameState.npc[4].profit;

    //HEARTCOST//
    this.npcIDSlot4HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 116, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4HeartCost);
    this.npcIDSlot4HeartCost.text.text = gameState.npc[4].heartCost;

    //lUNGCOST//
    this.npcIDSlot4LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 134, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4LungCost);
    this.npcIDSlot4LungCost.text.text = gameState.npc[4].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot4KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 152, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4KidneyCost);
    this.npcIDSlot4KidneyCost.text.text = gameState.npc[4].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot4LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 170, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4LiverCost);
    this.npcIDSlot4LiverCost.text.text = gameState.npc[4].liverCost;

    //BLOODCOST//
    this.npcIDSlot4BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 188, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot4BloodCost);
    this.npcIDSlot4BloodCost.text.text = gameState.npc[4].bloodCost;

    //PORTRAIT//
    this.npcIDSlot4Portrait = new GameObject();

    this.npcIDSlot4Portrait.addComponent(new Transform(44, 34));
    this.npcIDSlot4Portrait.addComponent(new ImageComponent(npcPortrait[4]));

    this.window2BKG.addChild(this.npcIDSlot4Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot4Saved = new GameObject();
    this.npcIDSlot4Saved.addComponent(new Transform(36, 28));
    this.npcIDSlot4Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window2BKG.addChild(this.npcIDSlot4Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot4Abandoned = new GameObject();
    this.npcIDSlot4Abandoned.addComponent(new Transform(36, 28));
    this.npcIDSlot4Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window2BKG.addChild(this.npcIDSlot4Abandoned);

  }

  npcSlot5() {

    //PATIENT ID//
    this.npcIDSlot5ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 314, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5ID);
    this.npcIDSlot5ID.text.text = gameState.npc[5].code;

    //NAME//
    this.npcIDSlot5Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 354, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5Name);
    this.npcIDSlot5Name.text.text = gameState.npc[5].name;

    //QOL//
    this.npcIDSlot5QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 394, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5QOL);
    this.npcIDSlot5QOL.text.text = gameState.npc[5].qolSaved;

    //PROFIT//
    this.npcIDSlot5Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 434, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5Profit);
    this.npcIDSlot5Profit.text.text = gameState.npc[5].profit;

    //HEARTCOST//
    this.npcIDSlot5HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 356, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5HeartCost);
    this.npcIDSlot5HeartCost.text.text = gameState.npc[5].heartCost;

    //lUNGCOST//
    this.npcIDSlot5LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 374, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5LungCost);
    this.npcIDSlot5LungCost.text.text = gameState.npc[5].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot5KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 392, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5KidneyCost);
    this.npcIDSlot5KidneyCost.text.text = gameState.npc[5].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot5LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 410, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5LiverCost);
    this.npcIDSlot5LiverCost.text.text = gameState.npc[5].liverCost;

    //BLOODCOST//
    this.npcIDSlot5BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 428, 0, customFontPNGLight);
    this.window2BKG.addChild(this.npcIDSlot5BloodCost);
    this.npcIDSlot5BloodCost.text.text = gameState.npc[5].bloodCost;

    //PORTRAIT//
    this.npcIDSlot5Portrait = new GameObject();

    this.npcIDSlot5Portrait.addComponent(new Transform(44, 274));
    this.npcIDSlot5Portrait.addComponent(new ImageComponent(npcPortrait[5]));

    this.window2BKG.addChild(this.npcIDSlot5Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot5Saved = new GameObject();
    this.npcIDSlot5Saved.addComponent(new Transform(36, 268));
    this.npcIDSlot5Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window2BKG.addChild(this.npcIDSlot5Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot5Abandoned = new GameObject();
    this.npcIDSlot5Abandoned.addComponent(new Transform(36, 268));
    this.npcIDSlot5Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window2BKG.addChild(this.npcIDSlot5Abandoned);

  }

  npcSlot6() {

    //PATIENT ID//
    this.npcIDSlot6ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 74, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6ID);
    this.npcIDSlot6ID.text.text = gameState.npc[6].code;

    //NAME//
    this.npcIDSlot6Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 114, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6Name);
    this.npcIDSlot6Name.text.text = gameState.npc[6].name;

    //QOL//
    this.npcIDSlot6QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 154, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6QOL);
    this.npcIDSlot6QOL.text.text = gameState.npc[6].qolSaved;

    //PROFIT//
    this.npcIDSlot6Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 194, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6Profit);
    this.npcIDSlot6Profit.text.text = gameState.npc[6].profit;

    //HEARTCOST//
    this.npcIDSlot6HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 116, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6HeartCost);
    this.npcIDSlot6HeartCost.text.text = gameState.npc[6].heartCost;

    //lUNGCOST//
    this.npcIDSlot6LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 134, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6LungCost);
    this.npcIDSlot6LungCost.text.text = gameState.npc[6].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot6KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 152, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6KidneyCost);
    this.npcIDSlot6KidneyCost.text.text = gameState.npc[6].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot6LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 170, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6LiverCost);
    this.npcIDSlot6LiverCost.text.text = gameState.npc[6].liverCost;

    //BLOODCOST//
    this.npcIDSlot6BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 188, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot6BloodCost);
    this.npcIDSlot6BloodCost.text.text = gameState.npc[6].bloodCost;

    //PORTRAIT//
    this.npcIDSlot6Portrait = new GameObject();

    this.npcIDSlot6Portrait.addComponent(new Transform(44, 34));
    this.npcIDSlot6Portrait.addComponent(new ImageComponent(npcPortrait[6]));

    this.window3BKG.addChild(this.npcIDSlot6Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot6Saved = new GameObject();
    this.npcIDSlot6Saved.addComponent(new Transform(36, 28));
    this.npcIDSlot6Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window3BKG.addChild(this.npcIDSlot6Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot6Abandoned = new GameObject();
    this.npcIDSlot6Abandoned.addComponent(new Transform(36, 28));
    this.npcIDSlot6Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window3BKG.addChild(this.npcIDSlot6Abandoned);

  }

  npcSlot7() {

    //PATIENT ID//
    this.npcIDSlot7ID = new LabelPrefab(AABB.MakeSize(100, 100), 307, 314, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7ID);
    this.npcIDSlot7ID.text.text = gameState.npc[7].code;

    //NAME//
    this.npcIDSlot7Name = new LabelPrefab(AABB.MakeSize(100, 100), 258, 354, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7Name);
    this.npcIDSlot7Name.text.text = gameState.npc[7].name;

    //QOL//
    this.npcIDSlot7QOL = new LabelPrefab(AABB.MakeSize(100, 100), 250, 394, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7QOL);
    this.npcIDSlot7QOL.text.text = gameState.npc[7].qolSaved;

    //PROFIT//
    this.npcIDSlot7Profit = new LabelPrefab(AABB.MakeSize(100, 100), 275, 434, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7Profit);
    this.npcIDSlot7Profit.text.text = gameState.npc[7].profit;

    //HEARTCOST//
    this.npcIDSlot7HeartCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 356, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7HeartCost);
    this.npcIDSlot7HeartCost.text.text = gameState.npc[7].heartCost;

    //lUNGCOST//
    this.npcIDSlot7LungCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 374, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7LungCost);
    this.npcIDSlot7LungCost.text.text = gameState.npc[7].lungCost;

    //KIDNEYCOST//
    this.npcIDSlot7KidneyCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 392, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7KidneyCost);
    this.npcIDSlot7KidneyCost.text.text = gameState.npc[7].kidneyCost;

    //LIVERCOST//
    this.npcIDSlot7LiverCost = new LabelPrefab(AABB.MakeSize(100, 100), 509, 410, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7LiverCost);
    this.npcIDSlot7LiverCost.text.text = gameState.npc[7].liverCost;

    //BLOODCOST//
    this.npcIDSlot7BloodCost = new LabelPrefab(AABB.MakeSize(100, 100), 500, 428, 0, customFontPNGLight);
    this.window3BKG.addChild(this.npcIDSlot7BloodCost);
    this.npcIDSlot7BloodCost.text.text = gameState.npc[7].bloodCost;

    //PORTRAIT//
    this.npcIDSlot7Portrait = new GameObject();

    this.npcIDSlot7Portrait.addComponent(new Transform(44, 274));
    this.npcIDSlot7Portrait.addComponent(new ImageComponent(npcPortrait[7]));

    this.window3BKG.addChild(this.npcIDSlot7Portrait);

    //SAVED OVERLAY//
    this.npcIDSlot7Saved = new GameObject();
    this.npcIDSlot7Saved.addComponent(new Transform(36, 268));
    this.npcIDSlot7Saved.addComponent(new ImageComponent(ammitSavedOverlay))
    this.window3BKG.addChild(this.npcIDSlot7Saved);

    //ABANDONED OVERLAY//
    this.npcIDSlot7Abandoned = new GameObject();
    this.npcIDSlot7Abandoned.addComponent(new Transform(36, 268));
    this.npcIDSlot7Abandoned.addComponent(new ImageComponent(ammitAbandonedOverlay))
    this.window3BKG.addChild(this.npcIDSlot7Abandoned);

  }

  saved0() {
    if (gameState.npc[0].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  saved1() {
    if (gameState.npc[1].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  saved2() {
    if (gameState.npc[2].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  saved3() {
    if (gameState.npc[3].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  saved4() {
    if (gameState.npc[4].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  saved5() {
    if (gameState.npc[5].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  saved6() {
    if (gameState.npc[6].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  saved7() {
    if (gameState.npc[7].trySubmit(inventory)) {

      savedToneSFX.play();
      this.updateOverlayState();

    } else {

      errorBlipSFX.play();
    }
  }

  updateOverlayState() {

    //NPC0 DECISION TREE//
    if (gameState.npc[0].status == "saved") {

      this.npcIDSlot0Saved.enable();
      this.npcIDSlot0Abandoned.disable();

    } else if (gameState.npc[0].status == "abandoned") {

      this.npcIDSlot0Abandoned.enable();
      this.npcIDSlot0Saved.disable();

    } else {

      this.npcIDSlot0Saved.disable();
      this.npcIDSlot0Abandoned.disable();

    }

    //NPC1 DECISION TREE//
    if (gameState.npc[1].status == "saved") {

      this.npcIDSlot1Saved.enable();
      this.npcIDSlot1Abandoned.disable();

    } else if (gameState.npc[1].status == "abandoned") {

      this.npcIDSlot1Abandoned.enable();
      this.npcIDSlot1Saved.disable();

    } else {

      this.npcIDSlot1Saved.disable();
      this.npcIDSlot1Abandoned.disable();

    }

    //NPC2 DECISION TREE//
    if (gameState.npc[2].status == "saved") {

      this.npcIDSlot2Saved.enable();

    } else if (gameState.npc[2].status == "abandoned") {

      this.npcIDSlot2Abandoned.enable();

    } else {

      this.npcIDSlot2Saved.disable();
      this.npcIDSlot2Abandoned.disable();

    }

    //NPC3 DECISION TREE//
    if (gameState.npc[3].status == "saved") {

      this.npcIDSlot3Saved.enable();

    } else if (gameState.npc[3].status == "abandoned") {

      this.npcIDSlot3Abandoned.enable();

    } else {

      this.npcIDSlot3Saved.disable();
      this.npcIDSlot3Abandoned.disable();
    }

    //NPC4 DECISION TREE//
    if (gameState.npc[4].status == "saved") {

      this.npcIDSlot4Saved.enable();

    } else if (gameState.npc[4].status == "abandoned") {

      this.npcIDSlot4Abandoned.enable();

    } else {

      this.npcIDSlot4Saved.disable();
      this.npcIDSlot4Abandoned.disable();

    }

    //NPC5 DECISION TREE//
    if (gameState.npc[5].status == "saved") {

      this.npcIDSlot5Saved.enable();

    } else if (gameState.npc[5].status == "abandoned") {

      this.npcIDSlot5Abandoned.enable();

    } else {

      this.npcIDSlot5Saved.disable();
      this.npcIDSlot5Abandoned.disable();

    }

    //NPC6 DECISION TREE//
    if (gameState.npc[6].status == "saved") {

      this.npcIDSlot6Saved.enable();

    } else if (gameState.npc[6].status == "abandoned") {

      this.npcIDSlot6Abandoned.enable();

    } else {

      this.npcIDSlot6Saved.disable();
      this.npcIDSlot6Abandoned.disable();

    }

    //NPC7 DECISION TREE//
    if (gameState.npc[7].status == "saved") {

      this.npcIDSlot7Saved.enable();

    } else if (gameState.npc[7].status == "abandoned") {

      this.npcIDSlot7Abandoned.enable();

    } else {

      this.npcIDSlot7Saved.disable();
      this.npcIDSlot7Abandoned.disable();

    }


  }
}
