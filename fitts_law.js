$(document).ready(function(){
				var count = 0;
				var startTime = new Date();
				var regCoeffB = 0;
				var regCoeffA = 0;
				time = [];
				distArray = [];
				caseCount=0;
			    IDarray = [];
			    mt = [];
			    targetWidth = [];
			    mt1ToPlot = [];
			    id1ToPlot= [];
			    tpt1ToPlot=[];
			    mt2ToPlot = [];
			    id2ToPlot= [];
			    tpt2ToPlot=[];
			    mtToPlot = [];
			    idToPlot=[];
			    tptToPlot = [];
			    svgChart = '';
			    svgChart2 = '';
			    yScale = '';
			    xScale = '';
			    var width = 700,   
		            height = 400,  
		            padding = 100;
			    plotAxis(width,height,padding);
				$(".a").css("fill","red");
				function plotAxis(width,height,padding)
		        {
            			y_domain = d3.extent( function(d) { return d.value; });
	            		svgChart = d3.select("body")
						            .append("svg:svg")
						            .attr("width", width)
						            .attr("height", height);
						xScale = d3.scaleLinear().domain([0, 4]).range([100,400]);
					    yScale = d3.scaleLinear().domain([0, 2]).range([height - padding, padding]);
						var xAxis = d3.axisBottom()
			    					   .scale(xScale)
						var yAxis = d3.axisLeft()
			    					  .scale(yScale)
			    		svgChart.append("g")
				        	.attr("class", "axis")
				            .attr("transform", "translate("+padding+",0)")
				            .call(yAxis);

				        svgChart.append("g")
				            .attr("class", "xaxis axis")  
				            .attr("transform", "translate(0," + (height - padding) + ")")
				            .call(xAxis);

			        	svgChart.selectAll(".xaxis text")  
					          .attr("transform", function(d) {
					             return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
					         });
					    svgChart.append("text")
				            .attr("text-anchor", "middle")  
				            .attr("transform", "translate("+ (padding/2) +","+(height/2)+")rotate(-90)") 
				            .text("MT");

				        svgChart.append("text")
				            .attr("text-anchor", "middle") 
				            .attr('x', 250)
        					.attr('y', 350) 
				            .text("ID");
		        }
			    $("circle").click(function(){
			    	var d = new Date();
			    	count = count + 1;
			        var x = Math.random();
			        var y = Math.floor(Math.random()*10);
			        $(this).css("fill","black");
			        if(this.className.baseVal == "a")
			        {
			        	$(".b").css("fill","red");
			        	$(".c, .d, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p").css("fill","black");
			        }
			        if(this.className.baseVal == "b")
			        {
			        	$(".k").css("fill","red");
			        	$(".a, .c, .d, .e, .f, .g, .h, .i, .j, .l, .m, .n, .o, .p").css("fill","black");
			        }
			        if(this.className.baseVal == "k")
			        {
			        	$(".a, .b, .c, .d, .f, .g, .h, .i, .j, .l, .m, .n, .o, .p").css("fill","black");
			        	$(".e").css("fill","red");
			        }
			        if(this.className.baseVal == "e")
			        {
			        	$(".a, .b, .c, .d, .f, .g, .h, .i, .j, .k, .m, .n, .o, .p").css("fill","black");
			        	$(".l").css("fill","red");
			        }
			        if(this.className.baseVal == "l")
			        {
			        	$(".a, .b, .c, .d, .e, .f, .h, .i, .j, .k, .m, .n, .o, .p").css("fill","black");
			        	$(".g").css("fill","red");
			        }
			        if(this.className.baseVal == "g")
			        {
			        	$(".a, .b, .c, .d, .e, .f, .h, .i, .j, .k, .l, .n, .o, .p").css("fill","black");
			        	$(".m").css("fill","red");
			        }
			        if(this.className.baseVal == "m")
			        {
			        	$(".a, .b, .c, .d, .e, .g, .h, .i, .j, .k, .l, .n, .o, .p").css("fill","black");
			        	$(".f").css("fill","red");
			        }
			        if(this.className.baseVal == "f")
			        {
			        	$(".a, .b, .d, .e, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p").css("fill","black");
			        	$(".c").css("fill","red");
			        }
			        if(this.className.baseVal == "c")
			        {
			        	$(".a, .b, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p").css("fill","black");
			        	$(".d").css("fill","red");
			        }
			        if(this.className.baseVal == "d")
			        {
			        	$(".a, .b, .c, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o").css("fill","black");
			        	$(".p").css("fill","red");
			        }
			        if(this.className.baseVal == "p")
			        {
			        	$(".a, .b, .c, .d, .e, .f, .g, .i, .j, .k, .l, .m, .n, .o").css("fill","black");
			        	$(".h").css("fill","red");
			        }
			        if(this.className.baseVal == "h")
			        {
			        	$(".a, .b, .c, .d, .e, .f, .g, .i, .j, .k, .l, .m, .n, .p").css("fill","black");
			        	$(".o").css("fill","red");
			        }
			        if(this.className.baseVal == "o")
			        {
			        	$(".a, .b, .c, .d, .e, .f, .g, .h, .j, .k, .l, .m, .n, .p").css("fill","black");
			        	$(".i").css("fill","red");
			        }
			        if(this.className.baseVal == "i")
			        {
			        	$(".a, .b, .c, .d, .e, .f, .g, .h, .j, .k, .l, .m, .o, .p").css("fill","black");
			        	$(".n").css("fill","red");
			        }
			        if(this.className.baseVal == "n")
			        {
			        	$(".a, .b, .c, .d, .e, .f, .g, .h, .i, .k, .l, .m, .o, .p").css("fill","black");
			        	$(".j").css("fill","red");
			        }
			        if(count > 1)
				    {
				    	var rad = document.getElementsByClassName("a")[0].style.r;
			     		if(rad == "")
			     			r = document.getElementsByClassName("a")[0].r.baseVal.value;
			     		else
			     			r = parseInt(rad.substring(0,2));
			     		targetWidth.push(r);
				     	if(this.className.baseVal == "b")
				     	{
				     		var xa = document.getElementsByClassName("a")[0].style.cx;
				     		var ya = document.getElementsByClassName("a")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("a")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("a")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("b")[0].style.cx;
				     		var yb = document.getElementsByClassName("b")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("b")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("b")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "k")
				     	{
				     		var xa = document.getElementsByClassName("b")[0].style.cx;
				     		var ya = document.getElementsByClassName("b")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var xa = document.getElementsByClassName("b")[0].cx.baseVal.value;
				     		 	var ya = document.getElementsByClassName("b")[0].cy.baseVal.value;
				     		 	x1 = xa;
				     		 	y1 = ya;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("k")[0].style.cx;
				     		var yb = document.getElementsByClassName("k")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var xb = document.getElementsByClassName("k")[0].cx.baseVal.value;
				     		 	var yb = document.getElementsByClassName("k")[0].cy.baseVal.value;
				     		 	x2 = xb;
				     		 	y2 = yb;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "e")
				     	{
				     		var xa = document.getElementsByClassName("k")[0].style.cx;
				     		var ya = document.getElementsByClassName("k")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("k")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("k")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("e")[0].style.cx;
				     		var yb = document.getElementsByClassName("e")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("e")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("e")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}						     		
				     	if(this.className.baseVal == "l")
				     	{
				     		var xa = document.getElementsByClassName("e")[0].style.cx;
				     		var ya = document.getElementsByClassName("e")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("e")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("e")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("l")[0].style.cx;
				     		var yb = document.getElementsByClassName("l")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("l")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("l")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}	
				     	if(this.className.baseVal == "g")
				     	{
				     		var xa = document.getElementsByClassName("l")[0].style.cx;
				     		var ya = document.getElementsByClassName("l")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("l")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("l")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("g")[0].style.cx;
				     		var yb = document.getElementsByClassName("g")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("g")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("g")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}	
				     	if(this.className.baseVal == "m")
				     	{
				     		var xa = document.getElementsByClassName("g")[0].style.cx;
				     		var ya = document.getElementsByClassName("g")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("g")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("g")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("m")[0].style.cx;
				     		var yb = document.getElementsByClassName("m")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("m")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("m")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}	
				     	if(this.className.baseVal == "f")
				     	{
				     		var xa = document.getElementsByClassName("m")[0].style.cx;
				     		var ya = document.getElementsByClassName("m")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("m")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("m")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}


				     		var xb = document.getElementsByClassName("f")[0].style.cx;
				     		var yb = document.getElementsByClassName("f")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("f")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("f")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "c")
				     	{
				     		var xa = document.getElementsByClassName("f")[0].style.cx;
				     		var ya = document.getElementsByClassName("f")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("f")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("f")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("c")[0].style.cx;
				     		var yb = document.getElementsByClassName("c")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("c")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("c")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "d")
				     	{
				     		var xa = document.getElementsByClassName("c")[0].style.cx;
				     		var ya = document.getElementsByClassName("c")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("c")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("c")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("d")[0].style.cx;
				     		var yb = document.getElementsByClassName("d")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("d")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("d")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "p")
				     	{
				     		var xa = document.getElementsByClassName("d")[0].style.cx;
				     		var ya = document.getElementsByClassName("d")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("d")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("d")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("p")[0].style.cx;
				     		var yb = document.getElementsByClassName("p")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("p")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("p")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "h")
				     	{
				     		var xa = document.getElementsByClassName("p")[0].style.cx;
				     		var ya = document.getElementsByClassName("p")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("p")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("p")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("h")[0].style.cx;
				     		var yb = document.getElementsByClassName("h")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("h")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("h")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "o")
				     	{
				     		var xa = document.getElementsByClassName("h")[0].style.cx;
				     		var ya = document.getElementsByClassName("h")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("h")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("h")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("o")[0].style.cx;
				     		var yb = document.getElementsByClassName("o")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("o")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("o")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "i")
				     	{
				     		var xa = document.getElementsByClassName("o")[0].style.cx;
				     		var ya = document.getElementsByClassName("o")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("o")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("o")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("i")[0].style.cx;
				     		var yb = document.getElementsByClassName("i")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("i")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("i")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "n")
				     	{
				     		var xa = document.getElementsByClassName("i")[0].style.cx;
				     		var ya = document.getElementsByClassName("i")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("i")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("i")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("n")[0].style.cx;
				     		var yb = document.getElementsByClassName("n")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("n")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("n")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}
				     	if(this.className.baseVal == "j")
				     	{
				     		var xa = document.getElementsByClassName("n")[0].style.cx;
				     		var ya = document.getElementsByClassName("n")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("n")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("n")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("j")[0].style.cx;
				     		var yb = document.getElementsByClassName("j")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("j")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("j")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}	
				     	if(this.className.baseVal == "a")
				     	{
				     		var xa = document.getElementsByClassName("j")[0].style.cx;
				     		var ya = document.getElementsByClassName("j")[0].style.cy;
				     		if(xa == "" || ya == "")
				     		{
				     		 	var x1 = document.getElementsByClassName("j")[0].cx.baseVal.value;
				     		 	var y1 = document.getElementsByClassName("j")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x1 = parseInt(xa.substring(0,3));
				     			var y1 = parseInt(ya.substring(0,3));
				     		}
				     		var xb = document.getElementsByClassName("a")[0].style.cx;
				     		var yb = document.getElementsByClassName("a")[0].style.cy;
				     		if(xb == "" || yb == "")
				     		{
				     		 	var x2 = document.getElementsByClassName("a")[0].cx.baseVal.value;
				     		 	var y2 = document.getElementsByClassName("a")[0].cy.baseVal.value;
				     		}
				     		else
				     		{
				     			var x2 = parseInt(xb.substring(0,3));
				     			var y2 = parseInt(yb.substring(0,3));
				     		}
				     		calculateTimeAndID(x2,x1,y2,y1,r);
				     	}			
				    }
				    

			        if(count % 16 == 0)
			        {
				        calculateMTIDPoints();
				        calculatethptPoints();
			        	var x = Math.round(Math.random()*100000) % 2;
			        	x = [1,1,0,1,1,0,1,1,0,1,1] // for the 6 cases.
			        	// randomly increasing either the distance or the width of the target
			        	if(x[caseCount] == 0)
			        	{
				        	$(".a").css("fill","red");
				        	r = Math.floor(Math.random() * (33 - 25) + 25);
				        	targetWidth.push(r);
			        		$(".a, .b, .c, .d, .e, .f, .g, .h").css("r",r);
			        		$(".i, .j, .k, .l, .m, .n, .o, .p").css("r",r);
			        	}
			        	else
			        	{
				        	var x = Math.round(Math.random()*100000) % 2;
			        		var constMulti = Math.floor((Math.random() * -30) + 10);

			        		var constMulti25 = constMulti * 0.25;
			        		var constMulti75 = constMulti * 0.75;
			        		var constMulti125 = constMulti * 1.25;
			        		acx = document.getElementsByClassName("a")[0].cx.baseVal.value
			        		acx = acx +  constMulti;
			        		acy = document.getElementsByClassName("a")[0].cy.baseVal.value
			        		
			        		bcx = document.getElementsByClassName("b")[0].cx.baseVal.value
			        		bcx = bcx - constMulti;
			        		bcy = document.getElementsByClassName("b")[0].cy.baseVal.value
			        		
			        		ccy = document.getElementsByClassName("c")[0].cy.baseVal.value
			        		ccy = ccy + constMulti;
			        		ccx = document.getElementsByClassName("c")[0].cx.baseVal.value
			        		
			        		dcy = document.getElementsByClassName("d")[0].cy.baseVal.value
			        		dcy = dcy - constMulti;
			        		dcx = document.getElementsByClassName("d")[0].cx.baseVal.value

			        		hcx = document.getElementsByClassName("h")[0].cx.baseVal.value
			        		hcx = hcx + constMulti25;
			        		hcy = document.getElementsByClassName("h")[0].cy.baseVal.value
			        		hcy = hcy - constMulti75;
			        		
			        		icx = document.getElementsByClassName("i")[0].cx.baseVal.value
			        		icx = icx + constMulti75;
			        		icy = document.getElementsByClassName("i")[0].cy.baseVal.value
			        		icy = icy - constMulti75;
			        		
			        		jcx = document.getElementsByClassName("j")[0].cx.baseVal.value
			        		jcx = jcx + constMulti;
			        		jcy = document.getElementsByClassName("j")[0].cy.baseVal.value
			        		jcy = jcy - constMulti25;
			        		
			        		ecx = document.getElementsByClassName("e")[0].cx.baseVal.value
			        		ecx = ecx - constMulti;
			        		ecy = document.getElementsByClassName("e")[0].cy.baseVal.value
			        		ecy = ecy - constMulti25 ;
			        		
			        		fcx = document.getElementsByClassName("f")[0].cx.baseVal.value
			        		fcx = fcx - constMulti75;
			        		fcy = document.getElementsByClassName("f")[0].cy.baseVal.value
			        		fcy = fcy - constMulti75;

			        		gcx = document.getElementsByClassName("g")[0].cx.baseVal.value
			        		gcx = gcx - constMulti;
			        		gcy = document.getElementsByClassName("g")[0].cy.baseVal.value
			        		gcy = gcy - constMulti75;

			        		kcx = document.getElementsByClassName("k")[0].cx.baseVal.value
			        		kcx = kcx + constMulti;
			        		kcy = document.getElementsByClassName("k")[0].cy.baseVal.value
			        		kcy = kcy + constMulti25;
			        		
			        		lcx = document.getElementsByClassName("l")[0].cx.baseVal.value
			        		lcx = lcx + constMulti75;
			        		lcy = document.getElementsByClassName("l")[0].cy.baseVal.value
			        		lcy = lcy + constMulti75;
			        		
			        		mcx = document.getElementsByClassName("m")[0].cx.baseVal.value
			        		mcx = mcx + constMulti25;
			        		mcy = document.getElementsByClassName("m")[0].cy.baseVal.value
			        		mcy = mcy + constMulti;

			        		ncx = document.getElementsByClassName("n")[0].cx.baseVal.value
			        		ncx = ncx - constMulti;
			        		ncy = document.getElementsByClassName("n")[0].cy.baseVal.value
			        		ncy = ncy + constMulti25;
			        		
			        		ocx = document.getElementsByClassName("o")[0].cx.baseVal.value
			        		ocx = ocx - constMulti;
			        		ocy = document.getElementsByClassName("o")[0].cy.baseVal.value
			        		ocy = ocy + constMulti75;
			        		
			        		pcx = document.getElementsByClassName("p")[0].cx.baseVal.value
			        		pcx = pcx - constMulti75;
			        		pcy = document.getElementsByClassName("p")[0].cy.baseVal.value
			        		pcy = pcy + constMulti;
				        	$(".a").css("fill","red");
				        	$(".a").css("cx",acx);
				        	$(".a").css("cy",acy);
				        	$(".b").css("cx",bcx);
				        	$(".b").css("cy",bcy);
				        	$(".c").css("cy",ccy);
				        	$(".c").css("cx",ccx);
				        	$(".d").css("cy",dcy);
				        	$(".d").css("cx",dcx);
				        	$(".e").css("cx",ecx);
				        	$(".e").css("cy",ecy);
				        	$(".f").css("cx",fcx);
				        	$(".f").css("cy",fcy);
				        	$(".g").css("cx",gcx);
				        	$(".g").css("cy",gcy);
				        	$(".h").css("cx",hcx);
				        	$(".h").css("cy",hcy);
				        	$(".i").css("cy",icy);
				        	$(".i").css("cx",icx);
				        	$(".j").css("cy",jcy);
				        	$(".j").css("cx",jcx);
				        	$(".k").css("cy",kcy);
				        	$(".k").css("cx",kcx);
				        	$(".l").css("cy",lcy);
				        	$(".l").css("cx",lcx);
				        	$(".m").css("cy",mcy);
				        	$(".m").css("cx",mcx);
				        	$(".n").css("cy",ncy);
				        	$(".n").css("cx",ncx);
				        	$(".o").css("cy",ocy);
				        	$(".o").css("cx",ocx);
				        	$(".p").css("cy",pcy);
				        	$(".p").css("cx",pcx);
				        }
				        if(count % 192 == 0) 
				        {
				        	downloadToCSV();
				        	plotMTIDGraphPoints();
				        	calculateRegCoeff();
				        }
				        caseCount = caseCount + 1;
			        }
			        function calculateMTIDPoints()
			        {
			        	var timeSum = 0;
			        	var timeSumAvg = 0;
			        	var idSum= 0 ;
						var idSumAvg = 0;
			        	for(var i = time.length - 1; i > time.length - 15; --i){
							timeSum = timeSum + time[i];
						}
						for(var i = IDarray.length - 1; i > IDarray.length - 15; --i){
								idSum = idSum + IDarray[i];
						}	
			        	if(count < 97)
			        	{
							timeSumAvg = timeSum / 16;
							mt1ToPlot.push(timeSumAvg);
							idSumAvg = idSum / 16;
							id1ToPlot.push(idSumAvg);
						}
						else
						{
							timeSumAvg = timeSum / 16;
							mt2ToPlot.push(timeSumAvg);
							idSumAvg = idSum / 16;
							id2ToPlot.push(idSumAvg);
						}
			        }
			        function calculatethptPoints()
			        {
			        	if(count < 97)
			        	{
			        		var length = mt1ToPlot.length;
							tpt1ToPlot.push(id1ToPlot[length-1]/mt1ToPlot[length-1]);
			        	}
			        	else
			        	{
			        		var length = mt2ToPlot.length;
							tpt2ToPlot.push(id2ToPlot[length-1]/mt2ToPlot[length-1]);
			        	}
			        }
			        function downloadToCSV()
			        {
			        	for(j=0;j<mt1ToPlot.length;j++)
			        	{
			        		mtToPlot[j] = (mt1ToPlot[j] + mt2ToPlot [j])/2;
			        		tptToPlot[j] = (tpt1ToPlot[j] + tpt2ToPlot [j])/2;
			        		idToPlot[j] = (id1ToPlot[j] + id2ToPlot [j])/2;
			        	}
						var csvRows = [];
			        	csvRows.push("Index of Difficulty",',');
			        	csvRows.push("Movement Time",',');
			        	csvRows.push("Throughput",'\n');
						for(var i=0;i<idToPlot.length;i++)
						{
							csvRows.push(idToPlot[i],',');
							csvRows.push(mtToPlot[i],',');
							csvRows.push(tptToPlot[i],'\n');
						}
						var csvString = csvRows.join("");
						var a         = document.createElement('a');
						a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvString);
						a.target      = '_blank';
						a.download    = 'myFile.csv';
						document.body.appendChild(a);
						a.click();
			        }
			        function calculateTimeAndID(x2,x1,y2,y1,r)
				    {
				    	var endTime = new Date();
	    				var timeTaken = (endTime - startTime)/1000;
	    				time.push(timeTaken);
			     		startTime = new Date();
			     		width = r*2;
			     		var dist = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
			     		ID = Math.log((dist / width) + 1);
			     		distArray.push(dist);
			     		IDarray.push(ID);
				    }
			        function calculateRegCoeff()
			        {
			        	var timeSum = 0;
			        	var idSum = 0;
			        	var totSum = 0;
			        	var timeID = [];
			        	var j = 0;
			        	for(var i = time.length - 1; i > time.length - 15; --i){
						    var value = time[i] * IDarray[i];
						    timeID[j] = value;
						    j++;
						}
			        	for(var i = time.length - 1; i > time.length - 15; --i){
							timeSum = timeSum + time[i];
						}
			        	for(var i = IDarray.length - 1; i > IDarray.length - 15; --i){
							idSum = idSum + IDarray[i];
						}
						var n = IDarray.length;
						for(var i=0; i<timeID.length;i++){
							totSum = totSum + timeID[i];
						}
						var num = (timeSum * Math.pow(idSum,2)) - (idSum * totSum)
						var den = (n*Math.pow(idSum,2)) - Math.pow(idSum,2)
						regCoeffA = num / den;

						var num2 = (n * totSum) - (idSum * timeSum)
						var den2 = (n*Math.pow(idSum,2)) - Math.pow(idSum,2)
						regCoeffB = num2 / den2; 
			        }
			        function plotMTIDGraphPoints()
			        {
			        	var idValue = 0;
			         	var timeValue = 0;
	            		for(var i=0;i<mtToPlot.length;i++)
	            		{
	            			idValue = idToPlot[i];
	            			timeValue = mtToPlot[i];
	            			svgChart.append('circle')
			                .attr('cx', function () {return xScale(idValue);})
			                .attr('cy', function (d) {return yScale(timeValue);})
			                .attr('r', 3);
	            		}
			        }
			        function plotthptIDGraphPoints()
			        {
			         	var idSum = 0;
			         	var thptValue = 0;
			   			for(var i=0;i<tptToPlot.length;i++)
						{
							thptValue = tptToPlot[i];
							idSum = idToPlot[i];
							svgChart2.append('circle')
			                .attr('cx', function () {return xScale(idSum);})
			                .attr('cy', function (d) {return yScale(thptValue);
			                })
			                .attr('r', 3);
						}
			        }
			    });
			});