class CloseWindowAction extends EventListener {

  constructor(gameOBJ, windowType) {

    super();

    this.gameOBJ = gameOBJ;
    this.windowType = windowType;
  }

  end() {

    let factorio = this.gameOBJ.scene.getFirstComponentOfType(WindowFactoryComponent);

    factorio.destroyWindow(this.windowType);
  }
}
