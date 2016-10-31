	var element;
	current_page = 1;
	window.onload = function(){
		element = $("flipbook").html("Loading...");
		$("#flipbook").turn("addPage", element, 1);
		$("#flipbook").turn({
			width: 1000,
			height: 600,
		});
		make_pages();
		connect();
	}

	function connect(){
				console.log($("<div />").html());
		var ws = new WebSocket("ws://localhost:9998/echo");//ws (websocket)

		console.log(ws.readyState);
		ws.onopen = function(){
			console.log("websocket connection is opened");
		};
		ws.onmessage = function (evt){
			var received_msg = evt.data;
			$("#flipbook").css("font, Comic Sans  MS");
			alert("stop spacing out, you goob!");
		}

	}
	function make_pages(){ 
		for(i = 0; i < 7; i++){
				console.log("hey  ");
				switch(i){
					case 0:
						element = $("<div />",{"class": "hard"}).html(String(page1));
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
						var $newdiv1 = $( "<div id='page1'>"+page7+"</div>" );
						element.append($newdiv1);
						break;
				}
				//element = $("<div />").html(String(page2));
				//element = $("<div />").html(String(page1));
				console.log("here");
				$("#flipbook").turn("addPage", element, i+1);
		}
	}
var page1 = "<p> No man likes to acknowledge that he has made a mistake in the choice of his profession, and every man, worthy of the name, will row long against wind Line andtidebeforeheallowshimselftocryout,“Iam 5 baffled!”and  submitstobefloatedpassivelybackto land. From the first week of my residence in X—— I felt my occupation irksome. The thing itself— the work of copying and translating business-letters— was a dry and tedious task enough, but had that been all,Ishould long have borne withthenuisance;Iam not of an impatient nature, and influenced by th double desire of getting my living and justifying to myself and others the resolution I had taken to become a tradesman, I should have endured in silencetherustandcrampofmybestfaculties;I should not have whispered, even inwardly, that I longed for liberty; I should have pent in every sigh by which my heart might have ventured to intimate its distress under the closeness, smoke, monotony, and joylesstumultofBigbenClose,anditspantingdesire for freer and fresher scenes; I should have set up the image of Duty, the fetish of Perseverance, in my small bedroom at Mrs. King’s lodgings, and they two should have been my household gods, from whichmy darling, my cherished-in-secret, Imagination, the tender and the mighty, should never, either by softness or strength, have severed me. But this was not all; the antipathy which had sprung up between myself and my employer striking deeper root and spreadingdensershadedaily,excludedmefrom every glimpse of the sunshine of life; and I began to feel like a plant growing in humid darkness out of the slimy walls of a well. Antipathy is the only word which can express the feelingEdwardCrimsworthhadforme—afeeling,in a great measure, involuntary, and which was liable to be excited by every, the most trifling movement, look, or word of mine. My southern accent annoyed him; the degree of education evinced in my language irritatedhim;mypunctuality,industry,and accuracy, fixed his dislike, and gave it the high flavour and poignant relish of envy; he feared that I too should one day make a successful tradesman. Had I been in anything inferior to him,  <p/>";
var page2 = "you are on page two";
var page3 = "you are on page three";
var page4 = "you are on page four";
var page5 = "you are on page five";
var page6 = "you are on page six";
var page7 = "you are on page seven";