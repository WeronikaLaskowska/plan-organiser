<template>
  <div v-if="docSnap !== null" class="container-2">
    <SideMenu :keysActive="true" />
    <div class="content">
      <div class="title">
        <p><span class="colorthis">TWOJE </span> KLUCZE</p>
      </div>

      <div class="fst-row">
        <div class="custom-select">
          <select v-model="clas" name="classes" id="">
            <option
              v-for="(class_, index) in classes"
              :key="index"
              :value="class_"
            >
              {{ class_.name }}
            </option>
          </select>
        </div>
        <div class="custom-select">
          <select v-model="subject" class="subj-select" name="subjects" id="">
            <option
              v-for="(subj, index) in subjects"
              :key="index"
              :value="subj"
            >
              {{ subj }}
            </option>
          </select>
        </div>
        <div class="counter">
          <label for="">ILOŚĆ</label>
          <input v-model="counter" type="number" />
        </div>
      </div>
      <div class="scnd-row">
        <div class="custom-select">
          <select
            v-model="teacher"
            name="teachers"
            class="teacher-select"
            id=""
          >
            <option
              v-for="(teacher, index) in teachers"
              :key="index"
              :value="teacher"
            >
              {{ teacher }}
            </option>
          </select>
        </div>
      </div>
      <div @click="addKey" class="btn add key-add">
        <img src="./../assets/add-icon.png" alt="" />
      </div>
      <div class="keys">
        <div v-for="(key, index) in keys" :key="index" class="user-keys">
          <i
            @click="deleteKey(key)"
            class="fa-solid fa-xmark fa-2x delete-key"
          ></i>
          <p>{{ key.klasa }}</p>
          <p>{{ key.przedmiot }}</p>
          <p>{{ key.nauczyciel }}</p>
          <p>{{ key.licznik }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { auth, db } from "./../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";
import { showSnackbar } from "./../composables/snackbar";

export default {
  name: "EnterKeys",
  components: {
    SideMenu,
  },
  data() {
    return {
      docSnap: null,
      clas: "",
      teacher: "",
      subject: "",
      counter: 0,
    };
  },
  mounted() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "data", auth.currentUser.uid);
        this.docSnap = await getDoc(docRef);
      } else {
        this.$router.push({ name: "Auth" });
      }
    });
  },
  methods: {
    addKey() {
      if (
        this.clas !== "" &&
        this.teacher !== "" &&
        this.subject !== "" &&
        this.counter > 0
      ) {
        const key = {
          nauczyciel: this.teacher,
          klasa: this.clas.name,
          licznik: this.counter,
          przedmiot: this.subject,
        };

        for (let a = 0; a < this.keys.length; a++) {
          if (
            key.nauczyciel === this.keys[a].nauczyciel &&
            key.przedmiot === this.keys[a].przedmiot &&
            key.klasa === this.keys[a].klasa
          ) {
            showSnackbar(`Ten klucz jest juz wpisany!`);
            return;
          }
        }

        this.keys.push(key);

        db.collection("data")
          .doc(auth.currentUser.uid)
          .set({
            klucze: this.keys,
            klasy: this.classes,
            nauczyciele: this.teachers,
            przedmioty: this.subjects,
            hours_s: this.hours_s,
            hours_e: this.hours_e,
          makingPlan: this.makingPlan

          })
          .then(() => {
            this.clas = "";
            this.teacher = "";
            this.subject = "";
            this.counter = "";
            this.$forceUpdate();
          });
      } else {
        showSnackbar(`Błędne dane`);
            
      }
    },
    deleteKey(key) {
      for (let i = 0; i < this.keys.length; i++) {
        if (key === this.keys[i]) {
          this.keys.splice(i, 1);
        }
      }
      db.collection("data")
        .doc(auth.currentUser.uid)
        .set({
          klucze: this.keys,
          klasy: this.classes,
          nauczyciele: this.teachers,
          przedmioty: this.subjects,
          hours_s: this.hours_s,
          hours_e: this.hours_e,
          makingPlan: this.makingPlan
        })
        .then(() => {
          this.$forceUpdate();
        });
    },
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
    hours_s() {
      return this.docSnap.data().hours_s;
    },
    hours_e() {
      return this.docSnap.data().hours_e;
    },
     makingPlan() {
      return this.docSnap.data().makingPlan;
    },
  },
};
</script>

<style scoped>
.container-2 {
  position: relative;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title p {
  font-size: 60px;
  color: #4f4f4f;
}
.colorthis {
  color: #c37b89;
}
select {
  padding: 10px 30px;
  font-size: 30px;
  margin: 10px 30px;
  background: #eae7c6;
  border: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  max-width: 800px;
}

.subj-select {
  max-width: 250px;
}

.fst-row {
  display: flex;
}
input {
  width: 40px;
  margin: 0 10px;
}
.counter {
  margin-top: 10px;
}
.key-add {
  width: 20px;
  position: absolute;
  top: 30%;
  right: 10%;
}
.user-keys {
  display: flex;
  padding: 0 40px;
  border-bottom: 2px solid #bccc9a;
}
.user-keys p {
  padding: 0 20px;
}
.keys {
  max-height: 380px;
  overflow: scroll;
}
.delete-key {
  margin-top: 25px;
  margin-right: 20px;
  cursor: pointer;
  color: #bccc9a;
  transition: 0.5s all;
}
.delete-key:hover {
  color: red;
}
</style>
