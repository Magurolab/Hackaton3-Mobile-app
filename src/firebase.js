import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAbPNLyz0XDwkNW_fq-Mjj3ZSvYibhrDgk",
  authDomain: "hackaton3-e8c2f.firebaseapp.com",
  databaseURL: "https://hackaton3-e8c2f.firebaseio.com",
  projectId: "hackaton3-e8c2f",
  storageBucket: "hackaton3-e8c2f.appspot.com",
  messagingSenderId: "384623675821"
};

firebase.initializeApp(config)

export default firebase
export const db = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()
