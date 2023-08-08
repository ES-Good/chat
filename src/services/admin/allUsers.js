import { initBD } from "@/services/initFirebase";
import { getDatabase, ref, child, get } from "firebase/database";

let getDB = getDatabase(initBD)
let dataRef = ref(getDB)

export function getAllUsers() {
    return get(child(dataRef, '/users')).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val()
        } else {
            console.log("No data available");
            return "No data available"
        }
    }).catch((error) => {
        console.error(error);
    });
}