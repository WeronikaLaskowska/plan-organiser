<template>
  <div class="container">
    <div class="form">
      <div class="login" v-if="isLogin">
        <h1>Zaloguj się</h1>
        <p>
          Aby korzystać z aplikacji,<br />
          musisz się zalogować.
        </p>
        <div class="inputs">
          <input
            v-model="email"
            class="input"
            type="text"
            placeholder="Adres email"
          />
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="Hasło"
          />
        </div>
        <h4 class="first" @click="redirect">Przypomnij hasło</h4>
        <h4 class="second" @click="goToRegister">Zarejestruj się</h4>
        <div class="btn next" @click="login">
          DALEJ
          <img src="./../assets/next-icon.png" alt="" />
        </div>
      </div>
      <div class="regi" v-else>
        <h1>Zarejestruj się</h1>
        <p>
          Aby korzystać z aplikacji,<br />
          musisz się zalogować.
        </p>
        <div class="inputs">
          <input
            v-model="email"
            class="input"
            type="text"
            placeholder="Adres email"
          />
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="Hasło"
          />
          <input
            v-model="repeatPassword"
            class="input"
            type="password"
            placeholder="Powtórz Hasło"
          />
        </div>
        <h4 class="first" @click="redirect">Przypomnij hasło</h4>
        <h4 class="second" @click="goToLogin">Zaloguj się</h4>
        <div class="btn next" @click="register">
          DALEJ
          <img src="./../assets/next-icon.png" alt="" />
        </div>
      </div>
    </div>
    <div class="image">
      <img class="login-img" src="./../assets/login.png" alt="" />
    </div>
  </div>
</template>

<script>
import signUp from "./../composables/signup.js";
import { auth, db } from "./../firebase/config.js";
import { showSnackbar } from "./../composables/snackbar.js";

export default {
  name: "Auth",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  created() {
    if (auth.currentUser) {
      console.log("logged in");
      this.$router.push({ name: "Tutorial" });
    } else {
      console.log("not logged in");
    }
  },
  methods: {
    validateEmail (email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
},
    goToRegister() {
      this.isLogin = false;
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
    },
    goToLogin() {
      this.isLogin = true;
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
    },
    async login() {
      if (this.email !== "" && this.password !== "") {
        await auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((r) => {
            if (r) {
              showSnackbar("Logowanie pomyślne!", "success");
              this.$router.push({ name: "Tutorial" });
            } else {
              showSnackbar(
                "Błędne dane logowania. Spróbuj ponownie.",
                "warning"
              );
            }
          })
          .catch((err) => {
            console.log(err);
            showSnackbar("Błędne dane logowania. Spróbuj ponownie", "warning");
          });
      } else {
        showSnackbar("Wypełnij wszystkie pola!", "warning");
      }
    },
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.repeatPassword !== ""
      ) {
        if (this.password === this.repeatPassword) {
          await signUp(this.email, this.password).then( async () =>{
            if(this.password.length >=6){
              if(this.validateEmail(this.email)){
                 await auth
              .signInWithEmailAndPassword(this.email, this.password)
              .then(() => {
                db.collection("data")
                  .doc(auth.currentUser.uid)
                  .set({
                    klasy: [],
                    klucze: [],
                    nauczyciele: [],
                    przedmioty: [],
                    hours_s: [],
                    hours_e: [],
                    makingPlan: false
                    
                  })
                  .then(() => {
                    showSnackbar("Pomyślnie zarejestrowano", "success");
                    
                    this.$router.push({ name: "Tutorial" });
                  });
              });
              }else{
                  showSnackbar("Zły format adresu email!", "warning");
              }
              
            }else{
              showSnackbar("Hasło jest za krótkie. Wymagane przynajmniej 6 znaków", "warning");
            }
          }).catch(() =>{
            showSnackbar("Wystąpił błąd. Spróbuj ponownie.", "warning");
          })
            
           
          // } else {
          // showSnackbar("Wystąpił błąd. Spróbuj ponownie.", "warning");
          // }
        } else {
          showSnackbar("Hasła się od siebie różnią!", "warning");
        }
      } else {
        showSnackbar("Wypełnij wszystkie pola!", "warning");
      }
    },
    redirect() {
      this.$router.push({ name: "RemindPass" });
    },
  },
};
</script>

<style>
.form {
  width: 45%;
  padding: 50px;
  line-height: 2rem;
}

.second {
  margin-top: -20px;
}
.first {
  margin-top: 10px;
}
h4 {
  color: #5c5c5c;
  text-decoration: underline;
  width: fit-content;
  cursor: pointer;
  padding: 0 15px;
  letter-spacing: 2px;
  font-size: 18px;
}
h1 {
  font-size: 55px;
  font-weight: 800;
  color: #4f4f4f;
}
p {
  font-size: 24px;
  letter-spacing: 2px;
}
.input {
  margin: 10px 0;
}
.container {
  position: relative;
  width: 1076px;
  height: 670px;
  background: #fff;
  border-radius: 30px;
  display: block;
  margin: auto;
  margin-top: 60px;
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.login-img {
  position: absolute;
  width: 70%;
  right: -2%;
  padding: 10px;
}

@media screen and (max-width:1100px){
  .container {
  width: 800px !important;
  height: 570px !important;

}
.login-img {
  width: 60%;
  top: 10%;
}
h1 {
  font-size: 45px !important;
  line-height: 2.7rem;
}
h4 {
  font-size: 14px !important;
}
.login p,
.regi p {
  font-size: 18px !important;
}
.form {
  padding: 25px 50px !important;
}
}

@media screen and (max-width:800px){
   .container {
  width: 430px !important;
  height: 600px !important;

}
.login-img {
 display: none;
}
.form {
  width: 100% !important;
}
}
</style>
