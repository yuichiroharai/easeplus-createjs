/*
 * Ease+ for TweenJS(CreateJS) v0.6.0
 * v1.0
 *
 * Copyright (c) 2015 Yuichiroh Arai
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 */
(function(createjs) {
	if (!createjs && !createjs.Ease) return;

	var Ease = createjs.Ease;

	// -------------------- expo
	Ease.expoIn = function(t) {
		return (t === 0) ? 0 : Math.pow(1024, t - 1);
	};
	Ease.expoOut = function(t) {
		return (t === 1) ? 1 : 1 - Math.pow(2, - 10 * t);
	};
	Ease.expoInOut = function(t) {
		if (t === 0) return 0;
		if (t === 1) return 1;
		if ((t *= 2) < 1 ) {
			return 0.5 * Math.pow(1024, t - 1);
		} else {
			return 0.5 * (-Math.pow(2, -10 * ( t - 1 )) + 2);
		}
	};

})(window.createjs);