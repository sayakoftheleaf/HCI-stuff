	
	window.onload = function(){
		$("#flipbook").turn({
			width: 1000,
			height: 600,
		});
		connect();
	}

function connect(){
	var ws = new WebSocket("ws://localhost:9998/echo");//ws (websocket)
	console.log(ws.readyState);
	ws.onopen = function(){
		console.log("websocket connection is opened");
	};
	ws.onmessage = function (evt){
		var received_msg = evt.data;
		alert("stop spacing out, you goob!");
	}

}


