class OpenWindowAction extends EventListener {

  constructor(gameOBJ, windowType) {

    super();

    this.gameOBJ = gameOBJ; 
    this.windowType = windowType;
  }

  end() {

    let factorio = this.gameOBJ.scene.getFirstComponentOfType(WindowFactoryComponent);

    factorio.getOrCreateWindow(this.windowType);
  }
}
