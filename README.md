<u><b>Simple Chat App created using the Pubnub SDK Version: 4.21.7</b></u><br>

Installation:

Used node server to host the app.<br>
run `npm install` to install all the in app dependencies.<br>
run `node index.js` to start the node app. It runs on port 3000.<br>
go to your browser and go to localhost:3000 to run your app.<br>
Enter a cool username and enter the appropriate channel you want. For demo purposes the channel is 'os'.<br>


Things done so far:


	 Users can join a particular channel using a username 
	Users can send messages to each other 
	Implemented the 'is typing' feature
	also displays the number of live users in a particular channel 
<b>for now while entering the channel name, please put 'os' (without quotes) as the channel name, as I have hardcoded this in the code.


Future Works:

	Pubnub sdk has a option of storing the history of the past messages of a particular chat. It's very easy; just a few lines of code configuarion can do it. But for this demo purpose I haven't implemented this feature. 
	Private Messaging between users 
	File upload 

