class PatientCodeApp extends WindowDefault {

  constructor() {

    super(patientIDWindow.width, 24, patientIDWindow);

    this.windowBKG();
    this.textFieldOBJ();

  }

  onEnter() {

    let npc = gameState.getNPCByPatientID(this.textField.value);

    if (npc != null) {
      if (npc.status == "alive") {

        selectionBlipSFX.play();

        let windows = this.scene.getFirstComponentOfType(WindowCollectionComponent);
        let organics = windows.getFirstWindowByType(OrganicsApp);

        if (organics != null) {

          organics.setNPC(npc);
          let factorio = this.scene.getFirstComponentOfType(WindowFactoryComponent);

          factorio.destroyWindow(this);
        }
      }
    } else {

      errorBlipSFX.play();
    }
  }

  windowBKG() {

    this.patientCodeBKG = new GameObject();

    this.patientCodeBKG.addComponent(new Transform());
    this.patientCodeBKG.addComponent(new ImageComponent(patientIDWindow));

    this.addChild(this.patientCodeBKG);
  }

  textFieldOBJ() {

    this.textField = new TextFieldPrefab();
    this.textField.getTransform().local.setPosition(43,60);
    this.textField.onEnterEvent.addListener(new CallbackAction2(this, this.onEnter));
    this.addChild(this.textField);
  }

}
