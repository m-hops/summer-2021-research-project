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
    this.npc.push(new NPC("Ariston Clerk", 726840, 1, 0, 0, 0, 30, 0, 0, 1, 0, 0, 0, 4, 4, 10000, 5000));

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
