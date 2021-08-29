class WindowFocusComponent extends Component {

  constructor() {

    super();

    this.focusedWindow = null;
    this.windowToFocusNextFrame = null;
  }
  update(){
    if(this.windowToFocusNextFrame != null){
      this.setFocus(this.windowToFocusNextFrame);
      this.windowToFocusNextFrame = null;
    }
  }
  setFocus(window) {

    let trf = window.getTransform();

    this.liftStack(trf.local.position.z);
    trf.local.position.z = 0;
  }
  setFocusNextFrame(window) {
    this.windowToFocusNextFrame = window;
  }

  liftStack(stackTop) {

    let collection = this.gameObject.getOrAddComponentType(WindowCollectionComponent);

    collection.windows.visit(function(w){
      let trf = w.getTransform();

      if (trf.local.position.z <= stackTop) {

        trf.local.position.z += 1;
      }
      return true;
    });
  }
}
