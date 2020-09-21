import app from "firebase/app";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyA7_KpRZ8VR7dz_2THycDx1HAAcnGfb4ps",
	authDomain: "savera-digital-firebase-auth.firebaseapp.com",
	databaseURL: "https://savera-digital-firebase-auth.firebaseio.com",
	projectId: "savera-digital-firebase-auth",
	storageBucket: "savera-digital-firebase-auth.appspot.com",
	messagingSenderId: "868061826443",
	appId: "1:868061826443:web:0af726ff575726b1a1338e",
	measurementId: "G-Z4CJSJJ24T",
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}
}

export default Firebase;
