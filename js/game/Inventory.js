class Inventory {

  constructor() {

    this.heart = 1;
    this.liver = 1;
    this.lung = 2;
    this.kidney = 2;
    this.blood = 100;
    this.qol = 78.5;
    this.bank = 0;

    this.onInventoryChange = new Event();
  }

}
