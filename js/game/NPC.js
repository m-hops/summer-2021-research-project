class NPC {

  constructor(name, code, heartCost, liverCost, lungCost, kidneyCost, bloodCost, heartRecycle, liverRecycle, lungRecycle, kidneyRecycle, bloodRecycle, qolSaved, qolAbandoned, profit, loss) {

    this.name = name;
    this.code = code;
    this.heartCost = heartCost;
    this.liverCost = liverCost;
    this.lungCost = lungCost;
    this.kidneyCost = kidneyCost;
    this.bloodCost = bloodCost;
    this.heartRecycle = heartRecycle;
    this.liverRecycle = liverRecycle;
    this.lungRecycle = lungRecycle;
    this.kidneyRecycle = kidneyRecycle;
    this.bloodRecycle = bloodRecycle;
    this.qolSaved = qolSaved;
    this.qolAbandoned = qolAbandoned;
    this.profit = profit;
    this.loss = loss;
    this.status = "alive";
  }

  tryRecycle(inventory) {

    if (this.status != "alive") return false;

    inventory.heart += this.heartRecycle;
    inventory.liver += this.liverRecycle;
    inventory.lung += this.lungRecycle;
    inventory.kidney += this.kidneyRecycle;
    inventory.blood += this.bloodRecycle;

    inventory.qol -= this.qolAbandoned;
    inventory.bank -= this.loss;

    this.status = "abandoned"

    return true;
  }

  trySubmit(inventory) {

    if (this.status != "alive") return false;
    if (this.heartCost > inventory.heart) return false;
    if (this.liverCost > inventory.liver) return false;
    if (this.lungCost > inventory.lung) return false;
    if (this.kidneyCost > inventory.kidney) return false;
    if (this.bloodCost > inventory.blood) return false;

    inventory.heart -= this.heartRecycle;
    inventory.liver -= this.liverRecycle;
    inventory.lung -= this.lungRecycle;
    inventory.kidney -= this.kidneyRecycle;
    inventory.blood -= this.bloodRecycle;

    inventory.qol += this.qolAbandoned;
    inventory.bank += this.loss;

    this.status = "saved"

    return true;

  }

}
