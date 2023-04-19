var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["577c6160-c2a8-438e-b1a4-7ac3b152677c","eb78f729-acf4-423c-9a04-bfb15b16325f","49028f24-5959-420c-be3d-cdc35ccb8a3a","bba4217c-16e9-4177-a6d2-e01d5a974b1c","9b5bda3b-d06c-42bc-81d3-3204115bf376"],"propsByKey":{"577c6160-c2a8-438e-b1a4-7ac3b152677c":{"name":"emoji_20_1","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"csZgfO81rVjiLzRMT0x3VAweZIL0SslH","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/577c6160-c2a8-438e-b1a4-7ac3b152677c.png"},"eb78f729-acf4-423c-9a04-bfb15b16325f":{"name":"carblue","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"49028f24-5959-420c-be3d-cdc35ccb8a3a":{"name":"carblack","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"bba4217c-16e9-4177-a6d2-e01d5a974b1c":{"name":"caryellow","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"zUKTV9_.Sf8lEKoc.At7ubLGvmX3ilgJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/bba4217c-16e9-4177-a6d2-e01d5a974b1c.png"},"9b5bda3b-d06c-42bc-81d3-3204115bf376":{"name":"cargreen","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"}}};
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

var life =0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

boundary1=createSprite(190,100,420,3);
boundary2=createSprite(190,260,420,3);

sam=createSprite(20,190,13,13);
sam.shapeColor="RGB(120,140,200)";

car1=createSprite(100,130,10,10);
car1.shapeColor="RGB(130,200,300)";

car2=createSprite(215,130,10,10);
car2.shapeColor="RGB(0,100,200)";

car3=createSprite(165,250,10,10);
car3.shapeColor="RGB(250,150,100";

car4=createSprite(270,250,10,10);
car4.shapeColor="RGB(200,300,100)";

sam.setAnimation("emoji_20_1");
sam.scale='.1';

car1.setAnimation("carblue");
car1.scale='.1';

car2.setAnimation("carblack");
car2.scale='.1';

car3.setAnimation("caryellow");
car3.scale='.1';

car4.setAnimation("cargreen");
car4.scale='.1';



car1.velocityY=+5;
car2.velocityY=-5;
car3.velocityY=+5;
car4.velocityY=-5;


function draw() {
  background("LIGHTGRAY");
  stroke("RGB(200,0,0)");
  fill("RGB(0,200,0)");
  rect("0,120,52,140");
  fill("green");
  rect(345,120,52,140);
  textSize(22);
  text("vidas: "+life,200,100);
  if (keyDown("right")) {
  sam.x=sam.x+4;
}
createEdgeSprites();


if(keyDown("left")){
 sam.x=sam.x-2;
}

if (sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)){
  sam.x=20;
  sam.y=190;
  life+=1;
}

car1.bounceOff(boundary1);
 
car1.bounceOff(boundary2);
 
car2.bounceOff(boundary1);
 
car2.bounceOff(boundary2);
 
car3.bounceOff(boundary1);
 
car3.bounceOff(boundary2);
 
car4.bounceOff(boundary1);
 
car4.bounceOff(boundary2);
 
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
