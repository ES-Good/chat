import { initBD } from '@/services/initFirebase'
import { getDatabase, ref, push, set } from "firebase/database";


const getDB = getDatabase(initBD);


export function pushNewUser(uidUser, emailUser = 'nonym') {
    const userRef = ref(getDB, '/users/'+ uidUser);
    let user = {
        name: emailUser,
        uid: uidUser
    }
    set(userRef, user);
}
