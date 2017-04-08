// window.onload = function() { Deprecated, using JSONP instead 
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