import { initBD } from '@/services/initFirebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(initBD);

export async function User() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user;
                resolve(uid)
            } else {
                let noUser = 'Anonim'
                resolve(noUser)
            }
          });  
    }) 
}