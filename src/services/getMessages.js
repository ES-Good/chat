import { initBD } from '@/services/initFirebase'
import { getDatabase, ref, onValue } from "firebase/database";

let getDB = getDatabase(initBD)
let dataRef = ref(getDB, '/messages')

export function messageUpdate(params) {
    onValue(dataRef, (snapshot) => {
        let data = snapshot.val();
        params.value = data
    });
}

