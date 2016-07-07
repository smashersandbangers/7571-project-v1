function printEvents( events )
{
	console.log( events );
	eventInstances = events.eventInstances;
	
	document.write("<ul>");
	for( var e in eventInstances ){
		var event = eventInstances[e];
		console.log(eventInstances[e]);
		
		document.write(
			"<li><a href=\"#\">"
			+event.eventDate
			+": "
			+event.eventName
			+" - "
			+event.eventLocation
			+"</a></li>");
		
	}
	document.write("</ul>");
	
}