$(document).ready(function () {

	var stageExpoOut = new createjs.Stage($(".expoOut canvas")[0]);
	var stageExpoIn = new createjs.Stage($(".expoIn canvas")[0]);
	var stageExpoInOut = new createjs.Stage($(".expoInOut canvas")[0]);

	var graphics = new createjs.Graphics().beginFill("black").drawCircle(0, 0, 16);

	var shapeExpoOut = new createjs.Shape(graphics);
	var shapeExpoIn = new createjs.Shape(graphics);
	var shapeExpoInOut = new createjs.Shape(graphics);

	stageExpoOut.addChild(shapeExpoOut);
	stageExpoIn.addChild(shapeExpoIn);
	stageExpoInOut.addChild(shapeExpoInOut);

	shapeExpoOut.x = 150;
	shapeExpoOut.y = 32;
	shapeExpoIn.x = 150;
	shapeExpoIn.y = 32;
	shapeExpoInOut.x = 150;
	shapeExpoInOut.y = 32;

	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.on("tick", onTick);

	function onTick() {
		stageExpoOut.update();
		stageExpoIn.update();
		stageExpoInOut.update();
	}

	// expoOut
	$("input.expoOut").click(function(){
		createjs.Tween.removeTweens(shapeExpoOut);
		shapeExpoOut.x = 150;
		createjs.Tween.get(shapeExpoOut).wait(100).to({x:450}, 800, createjs.Ease.expoOut);
	});

	// expoIn
	$("input.expoIn").click(function(){
		createjs.Tween.removeTweens(shapeExpoIn);
		shapeExpoIn.x = 150;
		createjs.Tween.get(shapeExpoIn).wait(100).to({x:450}, 800, createjs.Ease.expoIn);
	});

	// expoInOut
	$("input.expoInOut").click(function(){
		createjs.Tween.removeTweens(shapeExpoInOut);
		shapeExpoInOut.x = 150;
		createjs.Tween.get(shapeExpoInOut).wait(100).to({x:450}, 800, createjs.Ease.expoInOut);
	});

});