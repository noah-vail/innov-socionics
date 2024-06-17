// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

import { LocalStorage } from "quasar";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh3KtDDypS7fmajXLldYetCGBsAsjdDps",
  authDomain: "innovative-socionics.firebaseapp.com",
  projectId: "innovative-socionics",
  storageBucket: "innovative-socionics.appspot.com",
  messagingSenderId: "544768099844",
  appId: "1:544768099844:web:7ec99b8e2850ddfb251751",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a child reference
const storageRef = ref(storage, "gs://innovative-socionics.appspot.com"); // imagesRef now points to 'images'

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    LocalStorage.set("user", user.email);
    console.log("USER SIGNED IN");
  } else {
    LocalStorage.remove("user");
    console.log("User NOT signed in");
  }
});

export { db, auth, storage, storageRef };
