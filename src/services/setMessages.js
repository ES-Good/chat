import { initBD } from '@/services/initFirebase'
import { getDatabase, ref, set, push } from "firebase/database";
import { censor } from '@/helpers/notMat';
import { User } from "./user/getUser";



let getDB = getDatabase(initBD)
let messageUserRef = ref(getDB, '/messages');
let UserInfo = null;

User().then(UserData => UserInfo = UserData)


export async function sendMessage(textMessage) {
    if (!textMessage.length) {
        return
    }

    let newMessage = push(messageUserRef)

    let message = {
            name: !UserInfo.length ? UserInfo.email : 'Anonym',
            text: censor(textMessage),
            id: newMessage.key
        }
    set(newMessage, message);
}
