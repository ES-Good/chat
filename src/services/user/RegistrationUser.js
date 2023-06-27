import { initBD } from '@/services/initFirebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { pushNewUser } from './pushNewUser';

const auth = getAuth(initBD);

export function newUser(email, password ) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            pushNewUser(user.uid, user.email)
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