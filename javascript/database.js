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

function getEventsAlpha()
{
	console.log("reading json file");
	var result = $.getJSON("http://ec2-52-25-115-69.us-west-2.compute.amazonaws.com:5984/event-test/_design/events/_view/events",
		function( data ) {
  			console.log( "success" );
			events = data.rows;
			console.log( events );
			//console.log( "length: "+data.events.length );
			for( i=0; i<events.length; i++)
			{
				console.log( events[i].title );
			}
			
			printHTMLv2(events);
			//testIndexedDB(events);
		})
  		
		.done(function() {
    			console.log( "second success" );
			testLocalStorage();
  		})
  		.fail(function() {
    			console.log( "error" );
  		})
  		.always(function() {
    			console.log( "complete" );
  		});

	console.log( result );
}