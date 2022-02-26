<template>
  <div class="container">
    <div class="form">
      <div class="login">
        <h1>Przypomnij hasło</h1>
        <p>
          Nie martw się. Możesz <br />
          odzyskać hasło wpisując <br />
          poniżej swój adres email.
        </p>
        <div class="inputs">
          <input
            v-model="email"
            class="input"
            type="text"
            placeholder="Adres email"
          />
        </div>
        <br />
        <div class="btn back" @click="redirect">
          <img src="./../assets/back-icon.png" alt="" />
          COFNIJ
        </div>
        <br />
        <div class="btn next" @click="sendReminder">
          DALEJ
          <img src="./../assets/next-icon.png" alt="" />
        </div>
      </div>
    </div>
    <div class="image">
      <img class="pass-img" src="./../assets/password.png" alt="" />
    </div>
  </div>
</template>

<script>
import { auth } from "./../firebase/config.js";
import { showSnackbar } from "./../composables/snackbar.js";
export default {
  name: "Auth",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Auth" });
    },
    sendReminder() {
      if (this.email != "") {
        auth.sendPasswordResetEmail(this.email).then(() => {
          showSnackbar("Wysłano wiadomośc na podany adres email", "warning");
        });
      } else {
        showSnackbar("Wystąpił błąd. Spróbuj ponownie.", "warning");
      }
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

.pass-img {
  position: absolute;
  width: 90%;
  right: -17%;
  padding: 30px;
  padding-top: 80px;
}

@media screen and (max-width:800px){

.pass-img {
 display: none !important;
}

}
</style>
