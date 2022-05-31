<template>
  <div class="menu">
    <img src="./../assets/logo.png" class="logo" alt="" />
    <div class="options">
      <div
        v-if="tutActiveC"
        class="option book-opt active active-book btn-menu"
      >
        <i class="fa-solid fa-book-open fa-1.5x"></i>
        <p>SAMOUCZEK</p>
      </div>
      <div
        v-else
        @click="redirectBooks"
        class="option book-opt"
        :class="locked ? 'disabled' : ''"
      >
        <img src="./../assets/book-icon.png" alt="" />
        <p>SAMOUCZEK</p>
      </div>

      <div v-if="dataActiveC" class="option writing active btn-menu">
        <img src="./../assets/write-icon-white.png" alt="" />
        <p>WPISZ DANE</p>
      </div>
      <div
        v-else
        @click="redirectData"
        class="option writing"
        :class="locked ? 'disabled' : ''"
      >
        <img src="./../assets/writing-icon.png" alt="" />
        <p>WPISZ DANE</p>
      </div>

      <div v-if="keysActiveC" class="option key active active-keys btn-menu">
        <img src="./../assets/key-icon-white.png" alt="" />
        <p>USTAL KLUCZE</p>
      </div>

      <div
        @click="redirectKeys"
        v-else
        class="option key"
        :class="locked ? 'disabled' : ''"
      >
        <img src="./../assets/key-icon.png" alt="" />
        <p>USTAL KLUCZE</p>
      </div>

      <div
        v-if="clockActiveC"
        class="option clock active active-clock btn-menu"
      >
        <img src="./../assets/clock-icon-white.png" alt="" />
        <p>USTAL GODZINY</p>
      </div>
      <div
        v-else
        @click="redirectClock"
        class="option clock"
        :class="locked ? 'disabled' : ''"
      >
        <img src="./../assets/clock-icon.png" alt="" />
        <p>USTAL GODZINY</p>
      </div>

      <div v-if="calActiveC" class="option cal active btn-menu active-cal">
        <img src="./../assets/callendar-icon-white.png" alt="" />
        <p>TWÓRZ PLAN</p>
      </div>
      <div v-else @click="redirectCal" class="option cal">
        <img src="./../assets/calendar-icon.png" alt="" />
        <p>TWÓRZ PLAN</p>
      </div>

      <div v-if="myPlansActive" class="option cal active btn-menu active-cal">
        <img src="./../assets/callendar-icon-white.png" alt="" />
        <p>MOJE PLANY</p>
      </div>
      <div v-else @click="redirectPlans" class="option cal">
        <img src="./../assets/calendar-icon.png" alt="" />
        <p>MOJE PLANY</p>
      </div>

      <div @click="logout" class="btn logout">
        <img src="./../assets/logout-icon.png" alt="" />
        WYLOGUJ
      </div>
    </div>
    <modal name="confirmation" class="confirmation-modal">
      <p>
        <span class="">Czy jesteś pewien</span>, że potwierdzasz wprowadzone
        przez siebie dane i chcesz przejść do ostatniego kroku: tworzenia planu?
        <span class="warning"
          >W trakcie tworzenia planu nie mozna edytować wprowadzonych wcześniej danych!</span
        >
      </p>
      <div @click="redirectCalR" class="btn">POTWIERDZAM</div>
    </modal>
  </div>
</template>

<script>
import { auth, db } from "./../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";
import { showSnackbar } from "./../composables/snackbar";

export default {
  name: "SideMenu",
  props: [
    "tutActive",
    "dataActive",
    "keysActive",
    "clockActive",
    "calActive",
    "myPlansActive",
    "locked",
  ],
  created(){
      auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "data", auth.currentUser.uid);
        this.docSnap = await getDoc(docRef);
        if (this.makingPlan) {
          this.locked = true;
          if (this.$router.currentRoute.path !== "/tworz-plan") {
            this.$router.push({ name: "CreatePlan" });
          }
        }
      } else {
        this.$router.push({ name: "Auth" });
      }
    });
  },
  mounted() {
    // auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const docRef = doc(db, "data", auth.currentUser.uid);
    //     this.docSnap = await getDoc(docRef);
    //     if (this.makingPlan) {
    //       this.locked = true;
    //       if (this.$router.currentRoute.path !== "/tworz-plan") {
    //         this.$router.push({ name: "CreatePlan" });
    //       }
    //     }
    //   } else {
    //     this.$router.push({ name: "Auth" });
    //   }
    // });
  },
  methods: {
    redirectData() {
      if (!this.locked) this.$router.push({ name: "EnterData" });
    },
    redirectBooks() {
      if (!this.locked) this.$router.push({ name: "Tutorial" });
    },
    redirectKeys() {
      if (!this.locked) this.$router.push({ name: "EnterKeys" });
    },
    redirectClock() {
      if (!this.locked) this.$router.push({ name: "EnterHours" });
    },
    redirectPlans(){
      if(this.saved_plans.length > 0) this.$router.push({ name: "MyPlans" });
      else showSnackbar(`Nie masz zadnych planów`);
    },
    redirectCal() {
      this.$modal.show("confirmation");
      //this.$router.push({name:"CreatePlan"})
    },
    redirectCalR() {
      this.$modal.hide("confirmation");
      db.collection("data")
        .doc(auth.currentUser.uid)
        .set({
          klucze: this.keys,
          klasy: this.classes,
          nauczyciele: this.teachers,
          przedmioty: this.subjects,
          hours_s: this.hours_s,
          hours_e: this.hours_e,
          makingPlan: true,
          saved_plans: this.saved_plans,
        })
        .then(() => {
          this.$router.push({ name: "CreatePlan" });
        });
    },
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ name: "Auth" });
      });
    },
  },
  computed: {
    tutActiveC() {
      if (this.tutActive) return true;
      else return false;
    },
    dataActiveC() {
      if (this.dataActive) return true;
      else return false;
    },
    keysActiveC() {
      if (this.keysActive) return true;
      else return false;
    },
    clockActiveC() {
      if (this.clockActive) return true;
      else return false;
    },
    calActiveC() {
      if (this.calActive) return true;
      else return false;
    },
    makingPlan() {
      return this.docSnap.data().makingPlan;
    },
      classes() {
      return this.docSnap.data().klasy;
    },
    teachers() {
      return this.docSnap.data().nauczyciele;
    },
    subjects() {
      return this.docSnap.data().przedmioty;
    },
    keys() {
      return this.docSnap.data().klucze;
    },
    hours_s() {
      return this.docSnap.data().hours_s;
    },
    hours_e() {
      return this.docSnap.data().hours_e;
    },
     saved_plans() {
      return this.docSnap.data().saved_plans;
    },
  },
};
</script>

<style>
.menu {
  height: 750px;
  width: 335px;
  background: #fff;
  border-radius: 30px;
  margin-right: 40px;
  position: relative;
}
@media screen and (max-height:750px){
  .menu {
  margin-top: 0px;
  height:100vh;
}
.logo{
  display:none;
}
.options {
  margin-top: 0px !important;
  padding: 0px;
}
}
.logo {
  width: 278px;
  height: 242px;
  position: absolute;
  top: -5%;
  left: 8%;
}
.options {
  margin-top: 130px;
  padding: 35px;
}
.option img {
  width: 30.75px;
  height: 25.62px;
  margin-top: 30px;
  margin-right: 10px;
}
.option i {
  margin-top: 16px;
  margin-right: 10px;
}
.writing img {
  width: 32px;
  height: 32px;
  margin-top: 25px;
}
.key img,
.clock img {
  width: 33px;
  height: 33px;
  margin-top: 24px;
}
.cal img {
  width: 30px;
  height: 30px;
  margin-top: 25px;
}
.option p {
  font-size: 25px;
  font-weight: 400;
}
.option {
  display: flex;
  cursor: pointer;
}
.logout {
  margin-top: 30px;
}
.btn-menu {
  padding: 0px 40px;
  width: 230px;
  height: 56px;
  color: white;
  display: flex;
  margin-left: -20px;
  align-content: center;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  border-radius: 30px;
  background: rgb(188, 204, 154);
  background: linear-gradient(
    90deg,
    rgba(188, 204, 154, 1) 0%,
    rgba(234, 231, 198, 1) 49%,
    rgba(195, 123, 137, 1) 100%
  );
}
.active-book img {
  width: 40px;
  height: 40px;
}
.active-book p {
  padding-top: 3px;
}
.active p {
  font-size: 24px;
}
.active-keys p,
.active-cal p {
  font-size: 23px;
  padding-top: 2px;
}
.active-clock p {
  font-size: 20px;
  padding-top: 5px;
}
.active img,
.active p {
  margin-top: 10px;
}
.confirmation-modal {
  display: flex;
  flex-direction: column;
}
.confirmation-modal p {
  padding: 20px;
  font-weight: 600;
  font-size: 19px;
}
.confirmation-modal .btn {
  margin-left: 160px;
}
.disabled {
  opacity: 0.5;
}
.warning {
  color: red;
}
</style>
