"use strict";

/*****************

******************/

//USED TO ALLOW STATE MACHINE TO OPERATE GLOBALLY//
let rootStateMachine;

let globalRenderer = new Renderer();

let canvasColour = {
  r: 115,
  g: 130,
  b: 92
};

function preload() {

}

function setup() {

  createCanvas(1000,700);

  //SET SCENE TO PROPER DESIGNATION WITH TRANSIT BELOW//
  rootStateMachine = new StateMachine();

}


function draw() {

  rootStateMachine.update();

  background(canvasColour.r,canvasColour.g,canvasColour.b);

  rootStateMachine.draw();

}
