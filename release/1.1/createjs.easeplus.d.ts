// Type definitions for Ease+ for Ease+ for TweenJS(CreateJS) v1.1
// Project: https://github.com/yuichiroharai/easeplus-createjs/
// Definitions by: Yuichiroh Arai <https://github.com/yuichiroharai/>
// Definitions: https://github.com/yuichiroharai/easeplus-createjs/

declare namespace createjs.Ease {
	function expoIn(amount: number): number;
	function expoInOut(amount: number): number;
	function expoOut(amount: number): number;

	function blend(ease1:number, ease2:number, easeMix:number): ((amount: number) => number);
}