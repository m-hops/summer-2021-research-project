class OperationsApp extends WindowDefault {

  constructor() {

    super(operationsStatic.width, 24, operationsStatic);

    this.windowBackgroundStatic();
    this.operationsMoney();
    this.operationsQOL();
  }

  windowBackgroundStatic(){

    this.windowBKG = new GameObject();

    this.windowBKG.addComponent(new Transform());
    this.windowBKG.addComponent(new ImageComponent(operationsStatic));

    this.addChild(this.windowBKG);
  }

  operationsMoney() {

    this.opMoney = new LabelPrefab(AABB.MakeSize(100, 100), 50, 85, 0, customFontPNGLargeLight);

    this.addChild(this.opMoney);

    this.opMoney.text.text = "$" + inventory.bank;

  }

  operationsQOL() {

    this.opQOL = new LabelPrefab(AABB.MakeSize(100, 100), 310, 85, 0, customFontPNGLargeLight);

    this.addChild(this.opQOL);

    this.opQOL.text.text = inventory.qol;

  }

}
