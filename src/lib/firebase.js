import 'firebase/auth'

if (!firebase.apps.length){
    firebase.initializeApp({
        //initialize the firebase if it doesn't exist already
        apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase;
