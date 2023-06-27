import { initBD } from '@/services/initFirebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(initBD);

export function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode)
            console.log(errorMessage)
        });
}

