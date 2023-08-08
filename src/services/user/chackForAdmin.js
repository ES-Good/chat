import { initBD } from '@/services/initFirebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(initBD);
const adminId = 'b4M0D3XB6sXBgOih7fCguG35ekJ2';
let ThisIsAdmin = false;

let promiseChackLoginAdmin = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user;
            resolve(ThisIsAdmin = uid.uid === adminId ? true : false)
        } else {
            console.log('not user')
        }
    });
})

export { ThisIsAdmin, promiseChackLoginAdmin }