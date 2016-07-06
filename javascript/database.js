//takes a string username, string password and a boolean for is the password hashed
function authenticateUser(username, userpassword, hashed)
{
	return true;
}

function getEvents()
{
	console.log( "getEvents" );
	var events = {
			"eventInstances": [{
				"eventName": "Success Through Failures",
				"eventLocation": "Atlanta"
			}, {
				"eventName": "Successfully Failing",
				"eventLocation": "Boston"
			}]
		};
	
	return events;
}

function getEvent(eventid)
{
	var event = {eventName:"Success Through Failures 2",eventLocation:"Charlotte"};
	
	return event;
}

function registerEvent(user, eventid)
{
	return true;
}