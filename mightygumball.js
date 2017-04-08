window.onload = function() {
	var url = "http://localhost:8000/sales.json"
	var request = new XMLHttpRequest(); 
	request.open("GET",url);
	request.onload = function()
	{
		if(request.status == 200)
		{
			updateSales(request.responseText);
		}		
		
	};
	request.send("null");
}

function updateSales(salesItem)
{	
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(salesItem);
	sales.forEach(function(element) {
		var event = document.createElement("div");
		event.setAttribute("class", "salesItem color-secondary-1-0");
		event.innerHTML = element.name + " sold " + element["sales"] + " gumballs "; 
		salesDiv.appendChild(event);
	});
}