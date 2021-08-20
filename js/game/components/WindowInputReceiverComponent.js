class WindowInputReceiverComponent extends Component {

  constructor() {

    super();

  }

  onMouseClick(positionRelative) {

    let focuser = this.gameObject.scene.getFirstComponentOfType(WindowFocusComponent);

    focuser.setFocus(this.gameObject);
  }
}
