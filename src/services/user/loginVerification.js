import { initBD } from '@/services/initFirebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(initBD);
export function userLoginVerification(userLocal) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user;
          userLocal.value = uid.email
          localStorage.setItem('user', uid.email)
        } else {
         console.log('not user')
        }
      });
}

