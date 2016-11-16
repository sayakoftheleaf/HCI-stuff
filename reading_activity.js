	var element;
	window.onload = function(){
		$("#flipbook").turn({
			width: 1600,
			height: 900,
		});
		make_pages();
		$("#flipbook").turn("disable", true);
		apply_intervention();
		console.log("the current page is "+ $("#flipbook").turn("page"));
		turn_page();
		$( "#form5" ).submit(function() {
  		console.log(this);
		});
	}

	function apply_intervention(){ 
		return;
		var ws = new WebSocket("ws://localhost:9998/echo");
		console.log(ws.readyState);
		ws.onopen = function(){
			console.log("websocket connection is opened");
		};
		ws.onmessage = function (evt){
			var received_msg = evt.data;
			$("#flipbook").turn("disable", false); 
			var page_number = String($("#flipbook").turn("page"));
			console.log("page num" + page_num);
			$("#page" + page_number).css("background-color", "yellow");
			setTimeout( function(){ 
				$("#page"+page_num).css("background-color", "white");
  			}  , 3000 );
  			$("#flipbook").turn("disable", true);
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
	}
	function turn_right(){
			$("#flipbook").turn("disable", false);  //enables peel effect 
			$("#flipbook").turn("next");
			$("#flipbook").turn("disable", true);  //disables peel effect
	}
	function turn_left(){
			$("#flipbook").turn("disable", false);  
			$("#flipbook").turn("previous");
			$("#flipbook").turn("disable", true);
	}
	function turn_page(){
		$(document).keydown(function(e) {
			    
				    switch(e.which) {
				        case 37: // left
				        turn_left();
				        break;

				        case 39: // right
				        turn_right();
				        break;

				        default: return; // exit this handler for other keys
				    }
		});
	}

	