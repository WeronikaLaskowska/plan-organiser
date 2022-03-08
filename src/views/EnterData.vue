<template>
  <div class="container-2">
    <SideMenu :dataActive="true" />

    <div class="content">
      <div class="header">
        <div class="select-data">
          <!-- CURRENTLY SELECTED OPTION DICTATED BY THE "CURRENT" VALUE -->
          <div class="select">
            <div
              class="first-op"
              :class="unwrapped ? 'delete-radius' : ''"
              @click="unwrapped = !unwrapped"
            >
              <img
                v-if="current == 'class'"
                src="./../assets/class-icon.png"
                alt=""
              />
              <p v-if="current == 'class'">KLASY</p>

              <img
                v-if="current == 'teacher'"
                src="./../assets/teacher-icon.png"
                alt=""
              />
              <p v-if="current == 'teacher'">NAUCZYCIELE</p>

              <img
                v-if="current == 'subject'"
                src="./../assets/subj-icon.png"
                alt=""
              />
              <p v-if="current == 'subject'">PRZEDMIOTY</p>

              <div class="arrow-down">
                <i class="fa-solid fa-arrow-down fa-2x"></i>
              </div>
            </div>
          </div>

          <!-- <div class="filler" v-if="unwrapped"></div> -->
          <!-- REST OF THE OPTIONS, SHOWING ONLY WHEN SELECT IS UNWRAPPED -->
          <div class="select-all" v-if="unwrapped">
            <div
              :class="current == 'class' ? 'disable' : ''"
              class="op"
              @click="(current = 'class'), (unwrapped = false)"
            >
              <img src="./../assets/class-icon.png" alt="" />
              <p>KLASY</p>
            </div>

            <div
              :class="current == 'teacher' ? 'disable' : ''"
              class="op"
              @click="(current = 'teacher'), (unwrapped = false)"
            >
              <img src="./../assets/teacher-icon.png" alt="" />
              <p>NAUCZYCIELE</p>
            </div>

            <div
              :class="current == 'subject' ? 'disable' : ''"
              class="op"
              @click="(current = 'subject'), (unwrapped = false)"
            >
              <img src="./../assets/subj-icon.png" alt="" />
              <p>PRZEDMIOTY</p>
            </div>
          </div>
        </div>
        <h1 class="title">
          {{
            current === "class"
              ? "KLASY"
              : current === "teacher"
              ? " NAUCZYCIELE"
              : "PRZEDMIOTY"
          }}
        </h1>
      </div>
      <modal v-if="current === 'class'" name="modal">
        <i @click="closeModal" class="fa-solid fa-xmark fa-4x closing"></i>

        <input
          v-model="class_"
          placeholder="Wpisz klasę"
          type="text"
          class="modal-input"
        />
        <div @click="addData" class="btn add modal-add">
          <img src="./../assets/add-icon.png" alt="" />
        </div>
      </modal>

      <modal v-if="current === 'subject'" name="modal">
        <i @click="closeModal" class="fa-solid fa-xmark fa-4x closing"></i>

        <input
          v-model="subject"
          placeholder="Wpisz przedmiot"
          type="text"
          class="modal-input"
        />
        <div @click="addData" class="btn add modal-add">
          <img src="./../assets/add-icon.png" alt="" />
        </div>
      </modal>

      <modal v-if="current === 'teacher'" name="modal" class="modal-wrapper">
        <i @click="closeModal" class="fa-solid fa-xmark fa-4x closing"></i>

        <input
          v-model="teacher"
          placeholder="Wpisz nauczyciela"
          type="text"
          class="modal-input"
        />
        <div @click="addData" class="btn add modal-add">
          <img src="./../assets/add-icon.png" alt="" />
        </div>
      </modal>

      <div class="wrapp" v-if="docSnap !== null">
        <div class="data-list" v-if="current === 'class'">
          <p
            @click="deleteData(class_)"
            v-for="(class_, index) in classes"
            :key="index"
          >
            {{ class_.name }}
          </p>
        </div>
        <div class="data-list teachers-data" v-if="current === 'teacher'">
          <p
            @click="deleteData(teacher)"
            v-for="(teacher, index) in teachers"
            :key="index"
          >
            {{ teacher }}
          </p>
        </div>
        <div class="data-list subject-data" v-if="current === 'subject'">
          <p
            @click="deleteData(subj)"
            v-for="(subj, index) in subjects"
            :key="index"
          >
            {{ subj }}
          </p>
        </div>
      </div>

      <div @click="openEditModal" class="btn add">
        DODAJ
        <img src="./../assets/add-icon.png" alt="" />
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
  name: "EnterData",
  components: {
    SideMenu,
  },
  data() {
    return {
      current: "class",
      unwrapped: false,
      class_: "",
      teacher: "",
      subject: "",
      docSnap: null,
      loading: true,
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
    openEditModal() {
      this.$modal.show("modal");
    },
    closeModal() {
      this.$modal.hide("modal");
    },
    deleteData(c) {
      if (this.current === "class") {
        for (let i = 0; i < this.classes.length; i++) {
          if (this.classes[i].name === c.name) {
            this.classes.splice(i, 1);
          }
        }
      }
      if (this.current === "teacher") {
        for (let i = 0; i < this.teachers.length; i++) {
          if (this.teachers[i] === c) {
            this.teachers.splice(i, 1);
          }
        }
      }
      if (this.current === "subject") {
        for (let i = 0; i < this.subjects.length; i++) {
          if (this.subjects[i] === c) {
            this.subjects.splice(i, 1);
          }
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
          hours_e:this.hours_e,
          makingPlan: false,
          saved_plans: this.saved_plans,

        })
        .then(() => {
          this.$forceUpdate();
        });
    },
    clearData() {
      (this.class_ = ""), (this.teacher = ""), (this.subject = "");
    },
    generateID() {
      return performance.now().toString(36) + Math.random().toString(36);
    },
    addData() {
      if (this.current === "class") {
        if (this.class_ !== "") {
            for(let a=0; a<this.classes.length; a++){
              if(this.class_ === this.classes[a].name){
                   showSnackbar(
                    `Klasa ${this.class_} jest juz wpisana!`
                  );
                  return;
              }
            }
          this.classes.push({
            name: this.class_,
            monday:[
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            tuesday:[
                 null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            wen:[
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            thur:[
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
            friday:[
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ]
          });
        }else{
          showSnackbar(`Puste pole!`);
            return;
        }
      }
      if (this.current === "teacher") {
        if (this.teacher !== "") {
             for(let a=0; a<this.teachers.length; a++){
              if(this.teacher === this.teachers[a]){
                   showSnackbar(
                    `Nauczyciel ${this.teacher} jest juz wpisany!`
                  );
                  return;
              }
            }
          this.teachers.push(this.teacher);
        }else{
          showSnackbar(`Puste pole!`);
            return;
        }
      }
      if (this.current === "subject") {
        if (this.subject !== "") {
           for(let a=0; a<this.subjects.length; a++){
              if(this.subject === this.subjects[a]){
                   showSnackbar(
                    `Przedmiot ${this.subject} jest juz wpisany!`
                  );
                  return;
              }
            }
          this.subjects.push(this.subject);
        }else{
          showSnackbar(`Puste pole!`);
            return;
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
          makingPlan: false,
          saved_plans: this.saved_plans
        })
        .then(() => {
          this.$modal.hide("modal");
          this.clearData();
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
     saved_plans() {
      return this.docSnap.data().saved_plans;
    },
  },
};
</script>

<style scoped>
.select-data {
  position: relative;
}
.title {
  position: absolute;
  top: 2%;
  right: 10%;
  font-weight: 400;
  color: #c37b89;
}
.select,
.select-all {
  display: flex;
  flex-direction: column;
  user-select: none;
  padding: 30px;
}

.select {
  justify-content: center;
  align-items: flex-start;
  width: 101%;
  z-index: 5;
}
img,
p {
  opacity: 0.7;
}
.select img,
.select p {
  opacity: 1;
}

.select-all {
  background: #eae7c6;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 33.4%;
  left: 3.5%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 107px;
  z-index: 2;
}
.filler {
  height: 20px;
}

.delete-radius::after {
  content: "";
  position: absolute;
  left: 10%;
  bottom: 0;
  height: 1px;
  width: 80%; /* or 100px */
  border-bottom: 1px solid #bccc9a;
}
.first-op {
  width: 40%;
  border-radius: 10px;
  display: flex;
  background: #eae7c6;
  text-transform: uppercase;
  color: white;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-weight: 500;
  z-index: 1;
}
.delete-radius {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  margin-bottom: 0px;
}
.op {
  display: flex;
  text-transform: uppercase;
  color: white;
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  align-items: center;
}

.arrow-down {
  position: absolute;
  right: 4%;
  padding: 5px 10px;
  padding-right: 0;
  z-index: 100;
}
.disable {
  display: none;
}
img {
  width: 40px;
  padding: 0 10px;
}
.add img {
  width: 30px;
}
.add {
  margin-left: 300px;
}
i {
  cursor: pointer;
}
.data-list {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  margin-left: 100px;
  max-height: 48vh;
  overflow: scroll;
}
.data-list p {
  cursor: pointer;
  transition: 0.4s all;
}
.data-list p:hover {
  color: red;
}

.teachers-data {
  grid-template-columns: repeat(2, 1fr);
  margin-left: 60px;
}
.subject-data {
  grid-template-columns: repeat(3, 1fr);
  margin-left: 60px;
}
.closing {
  padding: 30px;
  color: #c37b89;
}
.modal-input {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
}
.modal-add {
  margin-top: 5px;
  width: 30px;
  height: 20px;
  margin-left: 470px;
}
</style>
