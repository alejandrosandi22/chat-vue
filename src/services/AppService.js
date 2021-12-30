import firebase from 'firebase/compat/app';
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import toastr from 'toastr';

export default{
  name: 'AppService',
  signInWithGoogle(){
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = async () => {
      await firebase.auth().signInWithPopup(googleProvider)
      .then(user_data => {
        toastr["success"](`Welcome ${user_data.user.displayName}`, "Successful")
        setTimeout(() => {
          location.replace('/chat')
        },1500)
      })
      .catch(error => {
        toastr["error"](error, "Error")
      });
    }
    googleSignIn();
  },
  signInWithFacebook(){
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const facebookSignIn = async () => {
     await firebase.auth().signInWithPopup(facebookProvider)
    .then(user_data => {
      toastr['success'](`Welcome ${user_data.user.displayName}`,"Successful");
      setTimeout(() =>{
        location.replace('/chat');
      },1500)
      })
      .catch(error => {
        toastr["error"](error, "Error")
      })
    }
    facebookSignIn();
  },
  logout(){
    firebase.auth().signOut().then().catch(error => {
      toastr['error'](error,"Error");
    })
  },
}
