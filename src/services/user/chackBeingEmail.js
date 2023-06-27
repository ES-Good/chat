import { initBD } from '@/services/initFirebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(initBD);

export function chackBeingUser(email, password ) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            return false
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode)
            console.log(errorMessage)
            return true
        });
}