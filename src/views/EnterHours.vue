<template>
  <div class="container-2" v-if="docSnap !== null">
    <SideMenu :clockActive="true" />
    <div class="content">
      <div class="inputs">
        <div class="lesson-input">
          <p>1 LEKCJA</p>
          <input
            v-model="start_1"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_1"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
        <div class="lesson-input">
          <p>2 LEKCJA</p>
          <input
            v-model="start_2"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_2"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
        <div class="lesson-input">
          <p>3 LEKCJA</p>
          <input
            v-model="start_3"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_3"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
        <div class="lesson-input">
          <p>4 LEKCJA</p>
          <input
            v-model="start_4"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_4"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
        <div class="lesson-input">
          <p>5 LEKCJA</p>
          <input
            v-model="start_5"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_5"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
        <div class="lesson-input">
          <p>6 LEKCJA</p>
          <input
            v-model="start_6"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_6"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
        <div class="lesson-input">
          <p>7 LEKCJA</p>
          <input
            v-model="start_7"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_7"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
        <div class="lesson-input">
          <p>8 LEKCJA</p>
          <input
            v-model="start_8"
            type="text"
            placeholder="Rozpoczęcie (np. 8:00)"
          />
          <input
            v-model="end_8"
            type="text"
            placeholder="Zakończenie (np. 8:45)"
          />
        </div>
      
      </div>
      <div class="btn" @click="addHours">POTWIERDŹ</div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { auth, db } from "./../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";
import { showSnackbar } from "./../composables/snackbar";

export default {
  name: "EnterHours",
  components: {
    SideMenu,
  },
  data() {
    return {
      lessons: [1, 2, 3, 4, 5, 6, 7, 8],
      docSnap: null,
      start_1: this.hours_s ? this.hours_s[0] : "",
      start_2: this.hours_s!==undefined ? this.hours_s[1] : "",
      start_3: this.hours_s ? this.hours_s[2] : "",
      start_4: this.hours_s ? this.hours_s[3] : "",
      start_5: this.hours_s ? this.hours_s[4] : "",
      start_6: this.hours_s ? this.hours_s[5] : "",
      start_7: this.hours_s ? this.hours_s[6] : "",
      start_8: this.hours_s ? this.hours_s[7] : "",
      end_1: this.hours_e ? this.hours_e[0] : "",
      end_2: this.hours_e ? this.hours_e[1] : "",
      end_3: this.hours_e ? this.hours_e[2] : "",
      end_4: this.hours_e ? this.hours_e[3] : "",
      end_5: this.hours_e ? this.hours_e[4] : "",
      end_6: this.hours_e ? this.hours_e[5] : "",
      end_7: this.hours_e ? this.hours_e[6] : "",
      end_8: this.hours_e ? this.hours_e[7] : "",
    };
  },
   mounted() {
      auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "data", auth.currentUser.uid);
        this.docSnap = await getDoc(docRef);
      this.start_1= this.hours_s ? this.hours_s[0] : ""
      this.start_2= this.hours_s!==undefined ? this.hours_s[1] : ""
      this.start_3= this.hours_s ? this.hours_s[2] : ""
      this.start_4= this.hours_s ? this.hours_s[3] : ""
      this.start_5= this.hours_s ? this.hours_s[4] : ""
      this.start_6= this.hours_s ? this.hours_s[5] : ""
      this.start_7= this.hours_s ? this.hours_s[6] : ""
      this.start_8= this.hours_s ? this.hours_s[7] : ""
      this.end_1= this.hours_e ? this.hours_e[0] : ""
      this.end_2= this.hours_e ? this.hours_e[1] : ""
      this.end_3= this.hours_e ? this.hours_e[2] : ""
      this.end_4= this.hours_e ? this.hours_e[3] : ""
      this.end_5= this.hours_e ? this.hours_e[4] : ""
      this.end_6= this.hours_e ? this.hours_e[5] : ""
      this.end_7= this.hours_e ? this.hours_e[6] : ""
      this.end_8= this.hours_e ? this.hours_e[7] : ""
      } else {
       this.$router.push({name:"Auth"})
      }
    });
        

  },
  computed: {
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
    hours_s(){
      return this.docSnap.data().hours_s;
    },
    hours_e(){
      return this.docSnap.data().hours_e;
    },
  },
  methods: {
    validateHours(string) {
      const pattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
      return pattern.test(string);
    },
    addHours() {
      if (
        this.validateHours(this.start_1) &&
        this.validateHours(this.start_2) &&
        this.validateHours(this.start_3) &&
        this.validateHours(this.start_4) &&
        this.validateHours(this.start_5) &&
        this.validateHours(this.start_6) &&
        this.validateHours(this.start_7) &&
        this.validateHours(this.start_8) &&
        this.validateHours(this.end_1) &&
        this.validateHours(this.end_2) &&
        this.validateHours(this.end_3) &&
        this.validateHours(this.end_4) &&
        this.validateHours(this.end_5) &&
        this.validateHours(this.end_6) &&
        this.validateHours(this.end_7) &&
        this.validateHours(this.end_8) 
  
      ) { 


        const hours_start = [
          this.start_1,
          this.start_2,
          this.start_3,
          this.start_4,
          this.start_5,
          this.start_6,
          this.start_7,
          this.start_8,
     

        ]
        const hours_end = [
          this.end_1,
          this.end_2,
          this.end_3,
          this.end_4,
          this.end_5,
          this.end_6,
          this.end_7,
          this.end_8,
      

        ]

        db.collection("data")
          .doc(auth.currentUser.uid)
          .set({
            klucze: this.keys,
            klasy: this.classes,
            nauczyciele: this.teachers,
            przedmioty: this.subjects,
            hours_s: hours_start,
            hours_e:hours_end
          })
          .then(() => {
              showSnackbar(`Zapisano pomyślnie`, 'success');

            this.$forceUpdate();
            
          });
      }else{
              showSnackbar(`Błędne dane`);

      }
    },
  },
};
</script>

<style scoped>
.inputs {
  margin: 30px;
  max-height: 600px;
  overflow: scroll;
}
input {
  margin: 10px;
}
.lesson-input {
  display: flex;
}
.btn {
  margin-left: 270px;
}
</style>
