//takes a string username, string password and a boolean for is the password hashed
function authenticateUser(username, userpassword, hashed)
{
	return true;
}

//returns all events (for now)
function getEvents()
{
	console.log( "getEvents" );
	var events = {
			"eventInstances": [{
				"eventName": "Success Through Failures",
				"eventLocation": "Atlanta",
				"eventDate": "4/22/2017"
			}, {
				"eventName": "Successfully Failing",
				"eventLocation": "Boston",
				"eventDate": "4/24/2017"
			}]
		};
	
	return events;
}

//returns a single event based on the eventid
function getEvent(eventid)
{
	var event = {eventName:"Success Through Failures 2",eventLocation:"Charlotte"};
	
	return event;
}

//returns true or false, depening on age of user and number of available seats
function registerEvent(user, eventid)
{
	return true;
}