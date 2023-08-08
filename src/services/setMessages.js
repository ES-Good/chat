import { initBD } from '@/services/initFirebase'
import { getDatabase, ref, set, push } from "firebase/database";
import { censor } from '@/helpers/notMat';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { adminId } from "../helpers/adminId";



let getDB = getDatabase(initBD)
const auth = getAuth(initBD);

let messageUserRef = ref(getDB, '/messages');
let UserInfo = {};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user;
    UserInfo.email = uid.email;
    UserInfo.id = uid.uid;
    localStorage.setItem('user', uid.email)
  } else {
    console.log('not user')
  }
});


export async function sendMessage(textMessage) {
  if (!textMessage.length) {
    return
  }

  let newMessage = push(messageUserRef)

  let message = {
    name: UserInfo.email ? UserInfo.email : 'Anonym',
    admin: UserInfo.id === adminId ? true : false,
    text: censor(textMessage),
    id: newMessage.key
  }
  set(newMessage, message);
}
