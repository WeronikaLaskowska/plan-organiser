import { auth } from './../firebase/config.js'
import { showSnackbar } from "./snackbar.js";

const signUp = async (email,password) => {  
   await auth.createUserWithEmailAndPassword(email,password)
   .then( () => {
          return true; 
   })
   .catch( (err) => {
     console.log(err)
      showSnackbar("Wystąpił błąd. Spróbuj ponownie.", "warning");
   })
}


export default signUp;