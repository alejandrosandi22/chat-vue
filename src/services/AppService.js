import firebase from 'firebase/compat/app';
import toastr from 'toastr';

export default{
  name: 'AppService',
  data(){
    return{
      toastrOptions: {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    }
  },
  signUpWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(data => {
        toastr['success'](`Welcome ${data.user.displayName}`,"successful");
        toastr.options = this.toastrOptions;
        setTimeout(() =>{
          location.replace('/chat');
        },1500)
      })
      .catch(err => {
        toastr["error"](err, "Error")
        toastr.options = this.toastrOptions;
      });
  },
  signUpWithFacebook(){
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_photo')

    firebase.auth().signInWithPopup(provider)
    .then(data => {
      toastr['success'](`Welcome ${data.user.displayName}`,"successful");
      toastr.options = this.toastrOptions;
      setTimeout(() =>{
        location.replace('/chat');
      },1500)
      })
      .catch(err => {
        console.log(err)
        toastr["error"](err, "Error")
        toastr.options = this.toastrOptions;
      })
  },
  logout(){
    firebase.auth().signOut().then().catch(err => alert(err))
  }
}
