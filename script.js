var sock;
var textOutput;
var textInput;

function onLoad()
{
	textOutput = document.getElementById("textOutput");
	textOutput.value = "";
	textInput = document.getElementById("textInput");
	textInput.value = "";

	connect();
}

function connect()
{
	console.log("Connecting...");
	sock = new WebSocket("ws://165.227.75.207:1966");

	sock.onopen = function()
	{
		console.log("Connected!");
	}

	sock.onmessage = function(evt)
	{
		console.log("Data Recieved: " + evt.data);
		textOutput.value += "165.227.74.207: " + evt.data + "\n";
	}

	sock.onclose = function(evt)
	{
		console.log("Closing");
	}

	sock.onerror = function(evt)
	{
		console.log("Error");
	}
}

function send(text)
{
	textOutput.value += "localhost: " + text + "\n";
	sock.send(text);
}

function submit()
{
	send(textInput.value);
}