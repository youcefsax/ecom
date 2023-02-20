// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_3GEtsQBFFP6eecykL0Mp34vA4odMZU",
  authDomain: "clothing-db-48.firebaseapp.com",
  projectId: "clothing-db-48",
  storageBucket: "clothing-db-48.appspot.com",
  messagingSenderId: "651965959541",
  appId: "1:651965959541:web:ad786637e8b86d68d9173c"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
  });
export const auth=getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGooleRedirect= () =>signInWithRedirect(auth, provider);
export const db = getFirestore();
export const createDocumentFromAuth= async (userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const snapshoot=await getDoc(userDocRef);
  console.log(snapshoot);
  console.log(snapshoot.exists());
if(!snapshoot.exists()){
  const {displayName, email}=userAuth;
  const creatDate=new Date();
  try{
    await setDoc(userDocRef, {
      displayName,
      email,
      creatDate
    });
  }catch(error){
    console.log('err',error.massage)
  }
}
return userDocRef;
};

export const createAuthWithUserAndPassword=async(email,password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthWithUserAndPassword=async(email,password)=>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
}