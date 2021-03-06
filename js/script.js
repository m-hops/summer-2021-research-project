"use strict";

//ENGINE SCENE SWITCHER//
let rootStateMachine;
let globalRenderer = new Renderer();
let gameState = new GameState();
let inventory = new Inventory();

//IMAGE GLOBAL VARIABLES//
let scratchedGlassOverlay;

let staticLoadingBlankBKG;
let staticLoadingBKG;

let edgesOverlay;
let canvasBorderOverlay;
let staticOSBKG;
let logOffFalse;
let logOffTrue;
let systemFolderBKG;
let systemFolderDisabledAppsBKG;
let patientIDWindow;
let arrowLeftDark;
let arrowLeftLight;
let arrowRightDark;
let arrowRightLight;
let radioFalse;
let radioTrue;
let selectFalse;
let selectTrue;
let submitDark;
let submitLight;
let xFalse;
let xTrue;
let mouseOverlay;

let chartsLogOnStatic;
let chartsFinishedStatic;
let charts0Static;

let healthCoverageLogOnStatic;
let healthCoverageFinishedStatic;
let healthCoverage0Static;
let healthCoverage1Static;

let operationsStatic;

let organicsLogOnStatic;
let organicsCollectStatic;
let organicsSelectionStatic;
let organicsInventoryStatic;

let qolLogOnStatic;
let qolAgeStatic;
let qolNetWorthStatic;
let qolRelationshipStatic;
let qolFamilyHistoryStatic;
let qolLifestyleStatic;
let qolConfirmStatic;
let qolFinishedStatic;

let ammitTemplateStatic;
let ammitAbandonedOverlay;
let ammitSavedOverlay;

let helpWindow = [];

let npcPortrait = [];

//ANIMATION GLOBAL VARIABLES//
let loadingGlitchAnimation;

//AUDIO GLOBAL VARIABLES//
let openingChimeAudio;
let openingChimeDegradedAudio;
let openingChimeAudioNew;
let selectionBlipSFX;
let errorBlipSFX;
let droneAudio;
let diskDriveAmbientAudio;
let recycleConfirmSFX;
let closeBlipSFX;
let savedToneSFX;

//FONT GLOBAL VARIABLES//
let customFontPNGLight;
let customFontPNGDark;
let customFontPNGLargeLight;
let customFontPNGLargeDark;
let customFontPNGExtraLargeDark;

//ASSORTED GLOBAL VARIABLES//
let canvasColour = {
  r: 115,
  g: 130,
  b: 92
};

function preload() {

  //IMAGE PRELOADS//
  scratchedGlassOverlay = loadImage('assets/images/agedGlassOverlay.png');

  staticLoadingBlankBKG = loadImage('assets/images/loadingScreen/loadingScreenBlank.png');
  staticLoadingBKG = loadImage('assets/images/loadingScreen/loadingScreenWithLogo.png');

  edgesOverlay = loadImage('assets/images/edges.png');
  canvasBorderOverlay = loadImage('assets/images/border.png');
  staticOSBKG = loadImage('assets/images/desktop/desktopStatic.png');
  logOffFalse = loadImage('assets/images/desktop/logOffOff.png');
  logOffTrue = loadImage('assets/images/desktop/logOffOn.png');
  systemFolderBKG = loadImage('assets/images/desktop/iconWindows/systemWindow.png');
  systemFolderDisabledAppsBKG = loadImage('assets/images/desktop/iconWindows/systemWindowDisabledApps.png');
  patientIDWindow = loadImage('assets/images/patientID/patientIDWindow.png');
  arrowLeftDark = loadImage('assets/images/buttons/arrowLeftDark.png');
  arrowLeftLight = loadImage('assets/images/buttons/arrowLeftLight.png');
  arrowRightDark = loadImage('assets/images/buttons/arrowRightDark.png');
  arrowRightLight = loadImage('assets/images/buttons/arrowRightLight.png');
  radioFalse = loadImage('assets/images/buttons/radioFalse.png');
  radioTrue = loadImage('assets/images/buttons/radioTrue.png');
  selectFalse = loadImage('assets/images/buttons/selectFalse.png');
  selectTrue = loadImage('assets/images/buttons/selectTrue.png');
  submitDark = loadImage('assets/images/buttons/submitDark.png');
  submitLight = loadImage('assets/images/buttons/submitLight.png');
  xFalse = loadImage('assets/images/buttons/xFalse.png');
  xTrue = loadImage('assets/images/buttons/xTrue.png');
  mouseOverlay = loadImage('assets/images/cursor.png');

  chartsLogOnStatic = loadImage('assets/images/charts/chartsLogOn.png');
  chartsFinishedStatic = loadImage('assets/images/charts/chartsFinished.png');
  charts0Static = loadImage('assets/images/charts/charts0.png');

  healthCoverageLogOnStatic = loadImage('assets/images/healthCoverage/healthCoverageLogOn.png');
  healthCoverageFinishedStatic = loadImage('assets/images/healthCoverage/healthCoverageFinished.png');
  healthCoverage0Static = loadImage('assets/images/healthCoverage/healthCoverage0.png');
  healthCoverage1Static = loadImage('assets/images/healthCoverage/healthCoverage1.png');

  operationsStatic = loadImage('assets/images/operations/operations0.png');

  organicsLogOnStatic = loadImage('assets/images/organics/organicsBlank.png');
  organicsCollectStatic = loadImage('assets/images/organics/organicsCollectWindow.png');
  organicsSelectionStatic = loadImage('assets/images/organics/organicsSelection.png');
  organicsInventoryStatic = loadImage('assets/images/organics/organicsInventory.png');

  qolLogOnStatic = loadImage('assets/images/qol/qolLogOn.png');
  qolAgeStatic = loadImage('assets/images/qol/qolAge.png');
  qolNetWorthStatic = loadImage('assets/images/qol/qolNetWorth.png');
  qolRelationshipStatic = loadImage('assets/images/qol/qolRelationship.png');
  qolFamilyHistoryStatic = loadImage('assets/images/qol/qolFamilyHistory.png');
  qolLifestyleStatic = loadImage('assets/images/qol/qolLifestyle.png');
  qolConfirmStatic = loadImage('assets/images/qol/qolConfirm.png');
  qolFinishedStatic = loadImage('assets/images/qol/qolFinished.png');

  ammitTemplateStatic = loadImage('assets/images/ammit/ammitTemplate.png');
  ammitAbandonedOverlay = loadImage('assets/images/ammit/ammitAbandonedOverlay.png');
  ammitSavedOverlay = loadImage('assets/images/ammit/ammitSavedOverlay.png');

  helpWindow[0] = loadImage('assets/images/helpWindow/helpWindow0.png');
  helpWindow[1] = loadImage('assets/images/helpWindow/helpWindow1.png');
  helpWindow[2] = loadImage('assets/images/helpWindow/helpWindow2.png');
  helpWindow[3] = loadImage('assets/images/helpWindow/helpWindow3.png');
  helpWindow[4] = loadImage('assets/images/helpWindow/helpWindow4.png');
  helpWindow[5] = loadImage('assets/images/helpWindow/helpWindow5.png');

  npcPortrait[0] = loadImage('assets/images/npcImages/NPCPortraitAClerk.png');
  npcPortrait[1] = loadImage('assets/images/npcImages/NPCPortraitZGagnier.png');
  npcPortrait[2] = loadImage('assets/images/npcImages/NPCPortraitDWalton.png');
  npcPortrait[3] = loadImage('assets/images/npcImages/NPCPortraitAMcKay.png');
  npcPortrait[4] = loadImage('assets/images/npcImages/NPCPortraitNLeroy.png');
  npcPortrait[5] = loadImage('assets/images/npcImages/NPCPortraitERyley.png');
  npcPortrait[6] = loadImage('assets/images/npcImages/NPCPortraitEWinfield.png');
  npcPortrait[7] = loadImage('assets/images/npcImages/NPCPortraitPBell.png');

  //AUDIO PRELOADS//
  openingChimeAudio = loadSound('assets/sounds/openingChime.mp3');
  openingChimeDegradedAudio = loadSound('assets/sounds/openingChimeDegraded.mp3');
  openingChimeAudioNew = loadSound('assets/sounds/openingChimeNew.mp3');
  selectionBlipSFX = loadSound('assets/sounds/selectionBlip.mp3');
  errorBlipSFX = loadSound('assets/sounds/errorBlip.mp3');
  droneAudio = loadSound('assets/sounds/backgroundDrone.mp3');
  diskDriveAmbientAudio = loadSound('assets/sounds/diskDriveAmbient.mp3');
  recycleConfirmSFX = loadSound('assets/sounds/recycleTone.mp3');
  closeBlipSFX = loadSound('assets/sounds/closeBlip.mp3');
  savedToneSFX = loadSound('assets/sounds/savedTone.mp3');

  //ANIMATION PRELOADS//
  loadingGlitchAnimation = loadAnimation('assets/images/loadingScreen/loadingScreenAnimation/loadingScreenAnimation0.png', 'assets/images/loadingScreen/loadingScreenAnimation/loadingScreenAnimation4.png');

  //FONT PRELOADS//
  customFontPNGLight = loadBitmapFont('assets/fonts/fontLight.png', {
    glyphWidth: 5 * 2,
    glyphHeight: 7 * 2,
    glyphBorder: 0,
    rows: 12,
    cols: 8,
    charSpacing: 0
  });
  customFontPNGDark = loadBitmapFont('assets/fonts/fontDark.png', {
    glyphWidth: 5 * 2,
    glyphHeight: 7 * 2,
    glyphBorder: 0,
    rows: 12,
    cols: 8,
    charSpacing: 0
  });
  customFontPNGLargeLight = loadBitmapFont('assets/fonts/fontLightLarge.png', {
    glyphWidth: 10 * 2,
    glyphHeight: 14 * 2,
    glyphBorder: 0,
    rows: 12,
    cols: 8,
    charSpacing: 0
  });
  customFontPNGLargeDark = loadBitmapFont('assets/fonts/fontDarkLarge.png', {
    glyphWidth: 10 * 2,
    glyphHeight: 14 * 2,
    glyphBorder: 0,
    rows: 12,
    cols: 8,
    charSpacing: 0
  });
  customFontPNGExtraLargeDark = loadBitmapFont('assets/fonts/fontDarkExtraLarge.png', {
    glyphWidth: 15 * 2,
    glyphHeight: 21 * 2,
    glyphBorder: 0,
    rows: 12,
    cols: 8,
    charSpacing: 0
  });
}

//ACTIVATES MOUSE CLICK THROUGHT ENGINE AND ISTATE//
function mouseClicked() {

  if (rootStateMachine.currentState != null) {

      rootStateMachine.currentState.onMouseClick(rootStateMachine);

  }
}

function mousePressed() {

  if (rootStateMachine.currentState != null) {

      rootStateMachine.currentState.onMousePressed(rootStateMachine);

  }
}

function mouseReleased() {

  if (rootStateMachine.currentState != null) {

      rootStateMachine.currentState.onMouseReleased(rootStateMachine);

  }
}

function keyPressed() {

    if (rootStateMachine.currentState != null) {

        rootStateMachine.currentState.onKeyPress(rootStateMachine, keyCode);

    }
}

function keyTyped() {

    if (rootStateMachine.currentState != null) {

        rootStateMachine.currentState.onKeyType(rootStateMachine, key);

    }
}

function defaultOverlays() {

  image(mouseOverlay,mouseX - 1,mouseY - 1);

  image(scratchedGlassOverlay,0,0);

  image(edgesOverlay,0,0);
}

function setup() {

  createCanvas(1016,716);

  //SET SCENE TO PROPER DESIGNATION WITH TRANSIT BELOW//
  rootStateMachine = new StateMachine();

  gameState.currentScene = "loading";

  rootStateMachine.transit(new SceneState(globalRenderer, new LoadingScene()));

  noCursor();

}

function draw() {

  rootStateMachine.update();

  background(canvasColour.r,canvasColour.g,canvasColour.b);

  rootStateMachine.draw();

  defaultOverlays();

}
