import firebase from 'firebase/app';
import 'firebase/firestore'; // Wenn du Firestore verwendest
import firebaseConfig from '../../firebase/firebaseConfig'; // Pfad zur Firebase-Konfigurationsdatei

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Wenn Firebase bereits initialisiert wurde, verwende die vorhandene Instanz
}
