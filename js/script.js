"use strict";

/*****************

******************/

//USED TO ALLOW STATE MACHINE TO OPERATE GLOBALLY//
let rootStateMachine;

let globalRenderer = new Renderer();

function preload() {

}

function setup() {

  createCanvas(1000,700);

}


function draw() {

  rootStateMachine.update();

  background(0);

  rootStateMachine.draw();

}
