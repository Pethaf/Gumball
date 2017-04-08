 window.onload = function() { 
 	setInterval(handleRefresh,10000);
}
var lastreporttime = 0;
//Deprecated, using JSONP instead 
// 	var url = "http://localhost:8000/sales.json"
// 	var request = new XMLHttpRequest(); 
// 	request.onreadystatechange = function() 
// 	{
// 		if (request.readyState == 4 && request.status == 200)
// 		{
// 			updateSales(request.responseText);
// 		}
// 	};
// 	request.open("GET",url);
// 	request.send(null);
// }

function updateSales(salesObject)
{	
	var salesDiv = document.getElementById("sales");
	salesObject.forEach(function(element) 
	{
		var event = document.createElement("div");
	 	event.setAttribute("class", "salesItem color-secondary-1-0");
	 	event.innerHTML = element.name + " sold " + element["sales"] + " gumballs "; 
	 	salesDiv.appendChild(event);
	 });
}

function handleRefresh(callBack = function() { alert("I'm alive");})
{
	var url = "http://gumball.wickedlysmart.com?callback=updateSales&lastreporttime="+ (new Date()).getTime();
	var scriptElem = document.createElement("script");
	scriptElem.setAttribute("src",url);
	scriptElem.setAttribute("id","jsonp");
	var oldScriptElem = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElem == null)
	{
		head.appendChild(scriptElem);
	}
	else
	{
		head.replaceChild(scriptElem, oldScriptElem);
	}
}