function printEvents( events )
{
	console.log( events );
	eventInstances = events.eventInstances;
	for( var e in eventInstances ){
		document.write(eventInstances[e].eventName+"<br />");
		console.log(eventInstances[e]);
	}
	
}