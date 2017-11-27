function run()
{
	var c = document.getElementById("canvas"); //Get canvas

	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //Cross-browser way to get window size
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	c.width = width; //Set canvas size
	c.height = height;

	var ctx = c.getContext("2d"); //Get canvas to draw stuff

	ctx.moveTo(0, 0); //Draw test line
	ctx.lineTo(width, height);
	ctx.moveTo(0, height);
	ctx.lineTo(width, 0);
	ctx.stroke();
}