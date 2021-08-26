class GameState {

  constructor() {

    this.previousScene = null;
    this.currentScene = null;
    this.currentMusic = null;
    this.gameVariable = [];

    this.npcList();
  }

  npcList() {

    this.npc = [];

    this.npc.push(new NPC("Ariston Clerk", 726840, 1, 0, 0, 0, 30, 0, 0, 1, 0, 0, 4, 4, 10000, 5000));
    this.npc.push(new NPC("Zoe Gagnier", 542041, 1, 0, 0, 1, 15, 0, 0, 0, 0, 11, 1, 1, 50000, 25000));
    this.npc.push(new NPC("Dom Walton", 218834, 0, 0, 2, 0, 15, 0, 0, 0, 1, 11, 2, 2, 25000, 12500));
    this.npc.push(new NPC("Anita McKay", 611225, 0, 0, 1, 0, 19, 0, 0, 0, 1, 0, 3, 3, 15000, 7500));
    this.npc.push(new NPC("Nia Leroy", 942806, 0, 1, 0, 0, 15, 1, 0, 0, 0, 20, 0.5, 0.5, 100000, 50000));
    this.npc.push(new NPC("Erin Ryley", 827466, 0, 1, 1, 0, 30, 0, 0, 0, 0, 0, 5, 5, 5000, 2500));
    this.npc.push(new NPC("Ellar Winfield", 982532, 0, 0, 0, 2, 19, 0, 1, 2, 0, 5, 6, 6, 3000, 1500));
    this.npc.push(new NPC("Pat Bell", 150272, 0, 0, 1, 1, 15, 0, 0, 0, 0, 11, 7, 7, 2000, 1000));

  }

  setGameVariable(varName, value) {

    this.gameVariable[varName] = value;

    console.log("set game variable " + varName + " = " + this.gameVariable[varName]);
  }

  getGameVariable(varName, defaultValue = null) {

    if (this.gameVariable.hasOwnProperty(varName)) {

      return this.gameVariable[varName];
    }

    return defaultValue;
  }

  getBoolGameVariable(varName) {

    if (this.gameVariable.hasOwnProperty(varName)) {

      return this.gameVariable[varName];
    }

    return false;
  }

}
