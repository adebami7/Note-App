import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsgoyhzvDJw0pcCyl1JF5RomLX6bNeqws",
  authDomain: "notes-app-9498c.firebaseapp.com",
  projectId: "notes-app-9498c",
  storageBucket: "notes-app-9498c.appspot.com",
  messagingSenderId: "84129046276",
  appId: "1:84129046276:web:8e5c466581ed650b11fa51"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export{
    db
}