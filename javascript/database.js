//takes a string username, string password and a boolean for is the password hashed
function authenticateUser(username, userpassword, hashed)
{
	return true;
}

//returns all events (for now, i would like to add after-date variable)
function getEvents()
{
	console.log( "getEvents" );
	var events = {
			"eventInstances": [{
				"eventName": "Success Through Failures",
				"eventLocation": "Atlanta",
				"eventDate": "4/22/2017",
				"eventSeats": "8",
				"eventCurrentAttendees": "8"
			}, {
				"eventName": "Successfully Failing",
				"eventLocation": "Boston",
				"eventDate": "4/24/2017",
				"eventSeats": "10",
				"eventCurrentAttendees": "7"
			}]
		};
	
	return events;
}

//returns a single event based on the eventid
function getEvent(eventid)
{
	var event = {
				"eventName": "Successfully Failing",
				"eventLocation": "Boston",
				"eventDate": "4/24/2017",
				"eventSeats": "10",
				"eventCurrentAttendees": "7"
			};
	
	return event;
}

//returns true or false, depening on age of user and number of available seats
function registerEvent(user, eventid)
{
	return true;
}