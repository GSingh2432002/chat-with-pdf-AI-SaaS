import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAiaJTL6wzELTrP7_a-X9ywLJIbvqCPXnU",
    authDomain: "chat-with-pdf-ai-saas-89167.firebaseapp.com",
    projectId: "chat-with-pdf-ai-saas-89167",
    storageBucket: "chat-with-pdf-ai-saas-89167.firebasestorage.app",
    messagingSenderId: "903635529676",
    appId: "1:903635529676:web:d4b87a6147a65a557fb769"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };