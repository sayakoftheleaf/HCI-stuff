	var element;
	current_page = 1;
	window.onload = function(){
		$("#flipbook").turn({
			width: 1200,
			height: 700,
		});
		//stop_peel();
		make_pages();
		apply_intervention();
		console.log("the current page is "+ $("#flipbook").turn("page"));
		$( "#page" ).click(function() {
			change_font(); 
		});
	}

	function apply_intervention(){ 
		var ws = new WebSocket("ws://localhost:9998/echo");
		console.log(ws.readyState);
		ws.onopen = function(){
			console.log("websocket connection is opened");
		};
		ws.onmessage = function (evt){
			var received_msg = evt.data;
			var page_number = String($("#flipbook").turn("page"));
			$("#page"+page_number).css("font-variant", "small-caps");
			setTimeout(function(){ 
				$("#page"+"page_number").css("font-weight", "normal");
  			} , 3000 );
		}

	}
	function change_font(){
		
			alert("page should turn yellow");
			var page_number = String($("#flipbook").turn("page"));
			$("#page"+page_number).css("background-color", "yellow");
			setTimeout( function(){ 
				//alert( "Handler for .click() called." );
				$("#page"+page_number).css("background-color", "white");
  			}  , 3000 );
  			change_font();
	}
	function make_pages(){ 
		for(i = 0; i < 7; i++){
				console.log("hey  ");
				switch(i){
					case 0:
						element = $("<div />").html("");
						var $newdiv1 = $( "<div id='page1'>"+page1+"</div>" );
						element.append($newdiv1);
						break;
					case 1:
						element = $("<div />").html("Page 2");
						var $newdiv1 = $( "<div id='page2'>"+page2+"</div>" );
						element.append($newdiv1);
						break;
					case 2:
						element = $("<div />").html("Page 3");
						var $newdiv1 = $( "<div id='page1'>"+page3+"</div>" );
						element.append($newdiv1);
						break;
					case 3:
						element = $("<div />").html("Page 4");
						var $newdiv1 = $( "<div id='page1'>"+page4+"</div>" );
						element.append($newdiv1);
						break;
					case 4:
						element = $("<div />").html("Page 5");
						var $newdiv1 = $( "<div id='page1'>"+page5+"</div>" );
						element.append($newdiv1);
						break;
					case 5:
						element = $("<div />").html("Page 6");
						var $newdiv1 = $( "<div id='page1'>"+page6+"</div>" );
						element.append($newdiv1);
						break;
					case 6:
						element = $("<div />").html("Page 7");
						var $newdiv1 = $( "<div class='sheet'id='page1'>"+page7+"</div>" );
						element.append($newdiv1);
						break;
				}
				//element = $("<div />").html(String(page2));
				//element = $("<div />").html(String(page1));
				$("#flipbook").turn("addPage", element, i+1);
		}
	}
var page1 = "<br><br><br>Reading Comprehension Test";
var page2 = "Marie Curie was one of the most accomplished scientists in history. Together with her husband, Pierre, she discovered radium, an element widely used for treating cancer, and studied uranium and other radioactive substances. Pierre and Marie's amicable collaboration later helped to unlock the secrets of the atom. Marie was born in 1867 in Warsaw, Poland, where her father was a professor of physics. At an early age, she displayed a brilliant mind and a blithe personality. Her great exuberance for learning prompted her to continue with her studies after high school. She became disgruntled, however, when she learned that the university in Warsaw was closed to women. Determined to receive a higher education, she defiantly left Poland and in 1891 entered the Sorbonne, a French university, where she earned her master's degree and doctorate in physics.";
var page3 = "Marie was fortunate to have studied at the Sorbonne with some of the greatest scientists of her day, one of whom was Pierre Curie. Marie and Pierre were married in 1895 and spent many productive years working together in the physics laboratory. A short time after they discovered radium, Pierre was killed by a horse-drawn wagon in 1906. Marie was stunned by this horrible misfortune and endured heartbreaking anguish. Despondently she recalled their close relationship and the joy that they had shared in scientific research. The fact that she had two young daughters to raise by herself greatly increased her distress. Curie's feeling of desolation finally began to fade when she was asked to succeed her husband as a physics professor at the Sorbonne. She was the first woman to be given a professorship at the world-famous university.";
var page4 = "In 1911 she received the Nobel Prize in chemistry for isolating radium. Although Marie Curie eventually suffered a fatal illness from her long exposure to radium, she never became disillusioned about her work. Regardless of the consequences, she had dedicated herself to science and to revealing the mysteries of the physical world.";
var page5 = "you are on page five";
var page6 = "you are on page six";
var page7 = "you are on page seven";