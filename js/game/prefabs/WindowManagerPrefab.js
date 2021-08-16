class WindowManagerPrefab extends GameObject {

  constructor() {

    super();

    this.collection = new WindowCollectionComponent();
    this.factory = new WindowFactoryComponent();
    
    this.addComponent(this.collection);
    this.addComponent(this.factory);
  }

}
