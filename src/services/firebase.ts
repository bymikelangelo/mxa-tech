import { Module } from "@nestjs/common";
import { FirebaseApp, initializeApp } from "firebase/app";

@Module({})
export class Firebase {
    static initFirebase() {
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
        const firebaseConfig = {
        apiKey: "AIzaSyDeErkNklu2IX9ZDCA_mA1SEK8gVMeFaXQ",
        authDomain: "mxa-tech-interview.firebaseapp.com",
        databaseURL: "https://mxa-tech-interview-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "mxa-tech-interview",
        storageBucket: "mxa-tech-interview.appspot.com",
        messagingSenderId: "271091215627",
        appId: "1:271091215627:web:b070ede408cf4ed574c60e",
        measurementId: "G-5RJT4JSXPN"
        };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
    }  
}







