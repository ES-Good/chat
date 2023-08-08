import { initBD } from '@/services/initFirebase'
import { getDatabase, ref, remove } from "firebase/database";

let getDB = getDatabase(initBD)

export function removeMessage(idMessage) {
    let pathMessage = `/messages/${idMessage}`
    let dataRef = ref(getDB, pathMessage)
    remove(dataRef)
}