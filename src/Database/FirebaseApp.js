import Firebase from "firebase/app";
import "firebase/storage";
import {FirebaseConfig} from './Config';

Firebase.initializeApp(FirebaseConfig);

const Storage = Firebase.storage();
export {Storage, Firebase as default};