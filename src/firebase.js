/**
 * Created by samsung on 11-Aug-17.
 */

import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyDf882E_woGb7wBH4UbvBvVZsTjRpd2IIQ",
    authDomain: "meeopp-a6281.firebaseapp.com",
    databaseURL: "https://meeopp-a6281.firebaseio.com",
    storageBucket: "meeopp-a6281.appspot.com",
    messagingSenderId: "903408734687"
};
firebase.initializeApp(config);

export default firebase;
