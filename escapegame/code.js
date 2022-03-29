var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//primera fila de cajas
var box1 = createSprite(25, 45,50,50);
box1.shapeColor="lightpink";
var box2 = createSprite(75, 45,50,50);
box2.shapeColor="lightblue";
var box3 = createSprite(125, 45,50,50);
box3.shapeColor="lightpink";
var box4 = createSprite(175, 45,50,50);
box4.shapeColor="lightblue";
var box5 = createSprite(225, 45,50,50);
box5.shapeColor="lightpink";
var box6 = createSprite(275, 45,50,50);
box6.shapeColor="lightblue";
var box7 = createSprite(325, 45,50,50);
box7.shapeColor="lightpink";
var box8 = createSprite(375, 45,50,50);
box8.shapeColor="lightblue";
//segunda fila de cajas
var box9 = createSprite(25, 100,50,50);
box9.shapeColor="lightpink";
var box10 = createSprite(75, 100,50,50);
box10.shapeColor="lightblue";
var box11 = createSprite(125, 100,50,50);
box11.shapeColor="lightpink";
var box12 = createSprite(175, 100,50,50);
box12.shapeColor="lightblue";
var box13 = createSprite(225, 100,50,50);
box13.shapeColor="lightpink";
var box14 = createSprite(275, 100,50,50);
box14.shapeColor="lightblue";
var box15 = createSprite(325, 100,50,50);
box15.shapeColor="lightpink";
var box16 = createSprite(375, 100,50,50);
box16.shapeColor="lightblue";
//crea la pelota y la raqueta para jugar
var raqueta = createSprite(200, 390,60,30);
var pelota = createSprite(200, 200,20,20);

//marca la puntuación del juego
var score = 0;

//nos permite poner el modo serve
var gameState = "serve";

//da velocidad a la pelota
//pelota.velocityY =-3;
//pelota.velocityX =-2;


function draw() {
  
  background("white");
  
  
  
 //crea bordes en la pantalla 
  createEdgeSprites();
  //hace que rebote con los bordes
  pelota.bounceOff(topEdge);
  pelota.bounceOff(rightEdge);
  pelota.bounceOff(leftEdge);
  //hace que rebote la pelota con la raqueta
  pelota.bounceOff(raqueta);
  
  //añade el texto a la pantalla
  textSize(20);
  stroke("purple");
  text("PUNTOS:"+score,200,20);
  
  //hace que la raqueta se mueva con el mouse
  raqueta.x=World.mouseX;
  
  
  
  
  //estado del juego serve
  if(gameState == "serve") { 
    //mostrar texto de bienvenida 
    textSize(17); text("¡Bienvenido! Presiona Enter para comenzar.",30,200); 
    //Mover la pelota al presionar la tecla enter 
   
    if(keyDown("enter"))
    { pelota.velocityX = 3;
    pelota.velocityY = 4; 
    gameState="play"; 
    } }
 
    
//Estado del juego play
  if(gameState==="play"){
    //hace que cuando la pelota toque los sprites se destruyan y cambia la puntuación
   if(pelota.isTouching(box1)){box1.destroy();score=score+1}
  if(pelota.isTouching(box2)){box2.destroy();score=score+1}
  if(pelota.isTouching(box3)){box3.destroy();score=score+1}
  if(pelota.isTouching(box4)){box4.destroy();score=score+1}
  if(pelota.isTouching(box5)){box5.destroy();score=score+1}
  if(pelota.isTouching(box6)){box6.destroy();score=score+1}
  if(pelota.isTouching(box7)){box7.destroy();score=score+1}
  if(pelota.isTouching(box8)){box8.destroy();score=score+1}
  if(pelota.isTouching(box9)){box9.destroy();score=score+1}
  if(pelota.isTouching(box10)){box10.destroy();score=score+1}
  if(pelota.isTouching(box11)){box11.destroy();score=score+1}
  if(pelota.isTouching(box12)){box12.destroy();score=score+1}
  if(pelota.isTouching(box13)){box13.destroy();score=score+1}
  if(pelota.isTouching(box14)){box14.destroy();score=score+1}
  if(pelota.isTouching(box15)){box15.destroy();score=score+1}
  if(pelota.isTouching(box16)){box16.destroy();score=score+1}
 
 if(pelota.isTouching(bottomEdge)||score==16){
   gameState="end";
 }
 
  }
  //estado del juego end
  if(gameState==="end"){
    pelota.velocityX=0;
    pelota.velocityY=0;
    text("FIN DEL JUEGO",100,200);
  }
  
  
  
  
  
  
 drawSprites(); 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
