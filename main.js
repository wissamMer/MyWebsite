  var config = {
    apiKey: "AIzaSyBtUFBcknkt1Fba6RgFnOgP48HOVR0xFn8",
    authDomain: "mywebsite-447a2.firebaseapp.com",
    databaseURL: "https://mywebsite-447a2.firebaseio.com",
    projectId: "mywebsite-447a2",
    storageBucket: "mywebsite-447a2.appspot.com",
    messagingSenderId: "982372420402"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database();

document.getElementById('contactForm').addEventListener('submit', submitForm());

function submitForm(e){
	var emailAct = document.getElementById('email1').value;
	var messageAct = document.getElementById('message1').value;

	saveMessage(emailAct, messageAct);

}


function saveMessage(email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		email: email1,
		message: message1
	});
}

