import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/auth'
import toastr from 'toastr';


async function signInWithGoogle() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  await firebase.auth().signInWithPopup(googleProvider)
  .then(async (user_data) => {

    const docRef = doc(getFirestore(), 'users', user_data.user.uid);
    const docSnap = await getDoc(docRef);
    
    let userData = {
      fullName: user_data.user.displayName,
      email: user_data.user.email,
      photoURL: user_data.user.photoURL,
    }

    if(docSnap.exists()){
      toastr["success"](`Welcome ${user_data.user.displayName}`, "Successful");
      setTimeout(() => {
        location.replace('/messeges')
      },1500)
    } else {
      await setDoc(doc(getFirestore(), 'users' , user_data.user.uid), userData)
        .then(() => {
          toastr["success"](`Welcome ${user_data.user.displayName}`, "Successful");
          setTimeout(() => {
            location.replace('/messeges')
          },1500)
        })
        .catch((error) => {
          toastr['error'](error, 'Error');
        })
    }
  })
}

async function signInWithFacebook() {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  
  await firebase.auth().signInWithPopup(facebookProvider)
  .then(async (user_data) => {

    const docRef = doc(getFirestore(), 'users', user_data.user.uid);
    const docSnap = await getDoc(docRef);
    
    let userData = {
      fullName: user_data.user.displayName,
      email: user_data.user.email,
      photoURL: user_data.user.photoURL,
    }

    if(docSnap.exists()){
      toastr["success"](`Welcome ${user_data.user.displayName}`, "Successful");
      setTimeout(() => {
        location.replace('/messeges')
      },1500)
    } else {
      await setDoc(doc(getFirestore(), 'users' , user_data.user.uid), userData)
        .then(() => {
          toastr["success"](`Welcome ${user_data.user.displayName}`, "Successful");
          setTimeout(() => {
            location.replace('/messeges')
          },1500)
        })
        .catch((error) => {
          toastr['error'](error, 'Error');
        })
    }
  }) 
}

function logout(){
  firebase.auth().signOut().then().catch(error => {
    toastr['error'](error,"Error");
  })
}

export default{ signInWithGoogle, signInWithFacebook, logout }
