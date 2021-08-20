class WindowFocusComponent extends Component {

  constructor() {

    super();

    this.focusedWindow = null;
  }

  setFocus(window) {

    let trf = window.getTransform();

    this.liftStack(trf.local.position.z);
    trf.local.position.z = 0;
  }

  liftStack(stackTop) {

    let collection = this.gameObject.getOrAddComponentType(WindowCollectionComponent);

    collection.windows.visit(function(w){
      let trf = w.getTransform();

      if (trf.local.position.z <= stackTop) {

        trf.local.position.z += 1;
      }
    });
  }
}
