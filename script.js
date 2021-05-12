//window.addEventListener("load",function(){
	window.addEventListener("mousemove",function(e){
		var x = 10+(e.clientX/20)
		if(x > 49)x = 49;
		if(x < 35)x = 35;
		var y = 20+(e.clientY/30)
		if(y > 50)y = 38;
		if(y < 20)y = 20;

		var translate = [
			"translateZ(26vw)",
			"translateX("+x+"vw)",
			"translateY("+y+"vh)"
		];
		var boxNode = document.querySelector(".box");
		boxNode.style.transform = translate.join(" ");
	});
//});
