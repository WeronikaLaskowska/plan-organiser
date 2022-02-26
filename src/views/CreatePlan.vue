<template>
  <div class="container-2" v-if="docSnap !== null">
    <SideMenu :calActive="true" :locked="true" />
    <div class="content">
      <select
        class="class-select"
        @change="checkCounters('class-change')"
        name=""
        id=""
        v-model="classSelect"
      >
        <option
          v-for="(clas, index) in classes"
          :key="index"
          :value="clas.name"
        >
          {{ clas.name }}
        </option>
      </select>
      <div class="day">
        <p>{{ checkSpelling() }}</p>
      </div>

      <div v-if="visible" class="wrapper">
        <div class="lesson lesson_1">
          <div class="hours">
            <div class="start">{{ hours_s[0] }}-</div>

            <div class="end">{{ hours_e[0] }}</div>
          </div>
          <span class="subj">{{ lesson_1_p }}</span>
          <span
            v-if="lesson_1 !== ''"
            @click="(lesson_1 = ''), (lesson_1_p = '')"
            class="delete del"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_1_p = ''" v-model="lesson_1">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
        <div class="lesson lesson_2">
          <div class="hours">
            <div class="start">{{ hours_s[1] }}-</div>

            <div class="end">{{ hours_e[1] }}</div>
          </div>
          <span class="subj">{{ lesson_2_p }}</span>
          <span
            v-if="lesson_2 !== ''"
            @click="(lesson_2 = ''), (lesson_2_p = '')"
            class="delete del"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_2_p = ''" v-model="lesson_2">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
        <div class="lesson lesson_3">
          <div class="hours">
            <div class="start">{{ hours_s[2] }}-</div>

            <div class="end">{{ hours_e[2] }}</div>
          </div>
          <span class="subj">{{ lesson_3_p }}</span>
          <span
            v-if="lesson_3 !== ''"
            @click="(lesson_3 = ''), (lesson_3_p = '')"
            class="delete"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_3_p = ''" v-model="lesson_3">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
        <div class="lesson lesson_4">
          <div class="hours">
            <div class="start">{{ hours_s[3] }}-</div>

            <div class="end">{{ hours_e[3] }}</div>
          </div>
          <span class="subj">{{ lesson_4_p }}</span>
          <span
            v-if="lesson_4 !== ''"
            @click="(lesson_4 = ''), (lesson_4_p = '')"
            class="delete"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_4_p = ''" v-model="lesson_4">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
        <div class="lesson lesson_5">
          <div class="hours">
            <div class="start">{{ hours_s[4] }}-</div>

            <div class="end">{{ hours_e[4] }}</div>
          </div>
          <span class="subj">{{ lesson_5_p }}</span>
          <span
            v-if="lesson_5 !== ''"
            @click="(lesson_5 = ''), (lesson_5_p = '')"
            class="delete"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_5_p = ''" v-model="lesson_5">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
        <div class="lesson lesson_6">
          <div class="hours">
            <div class="start">{{ hours_s[5] }}-</div>

            <div class="end">{{ hours_e[5] }}</div>
          </div>
          <span class="subj">{{ lesson_6_p }}</span>
          <span
            v-if="lesson_6 !== ''"
            @click="(lesson_6 = ''), (lesson_6_p = '')"
            class="delete"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_6_p = ''" v-model="lesson_6">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
        <div class="lesson lesson_7">
          <div class="hours">
            <div class="start">{{ hours_s[6] }}-</div>

            <div class="end">{{ hours_e[6] }}</div>
          </div>
          <span class="subj">{{ lesson_7_p }}</span>
          <span
            v-if="lesson_7 !== ''"
            @click="(lesson_7 = ''), (lesson_7_p = '')"
            class="delete"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_7_p = ''" v-model="lesson_7">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
        <div class="lesson lesson_8">
          <div class="hours">
            <div class="start">{{ hours_s[7] }}-</div>

            <div class="end">{{ hours_e[7] }}</div>
          </div>
          <span class="subj">{{ lesson_8_p }}</span>
          <span
            v-if="lesson_8 !== ''"
            @click="(lesson_8 = ''), (lesson_8_p = '')"
            class="delete"
          >
            <i class="fa-solid fa-xmark fa-2x"></i>
          </span>
          <select @change="lesson_8_p = ''" v-model="lesson_8">
            <option v-for="(key, index) in keys" :key="index" :value="key">
              {{ key.przedmiot }}
            </option>
          </select>
        </div>
      </div>
      <div
        v-if="j > 0 && visible"
        @click="checkCounters('decrease-day')"
        class="btn back"
      >
        <img src="./../assets/back-icon.png" alt="" />
        COFNIJ
      </div>
      <div
        v-if="j < days.length - 1 && visible"
        @click="checkCounters('increase-day')"
        class="btn next"
      >
        DALEJ
        <img src="./../assets/next-icon.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { showSnackbar } from "./../composables/snackbar";
import { auth, db } from "./../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";
export default {
  name: "CreatePlan",
  components: {
    SideMenu,
  },
  data() {
    return {
      docSnap: null,
      currentClass: "",
      currentClassObj: null,
      classSelect: "",
      days: ["mon", "tue", "wen", "thur", "fri"],
      currDay: "mon",
      lesson_1: "",
      lesson_2: "",
      lesson_3: "",
      lesson_4: "",
      lesson_5: "",
      lesson_6: "",
      lesson_7: "",
      lesson_8: "",
      lesson_1_p: "",
      lesson_2_p: "",
      lesson_3_p: "",
      lesson_4_p: "",
      lesson_5_p: "",
      lesson_6_p: "",
      lesson_7_p: "",
      lesson_8_p: "",
      counter_1: 0,
      counter_2: 0,
      counter_3: 0,
      counter_4: 0,
      counter_5: 0,
      counter_6: 0,
      counter_7: 0,
      counter_8: 0,
      i: 0,
      j: 0,
      arr: [],
      correct: false,
      visible: true,
    };
  },
  methods: {
    checkSpelling() {
      if (this.currDay === "mon") return "Poniedziałek";
      if (this.currDay === "tue") return "Wtorek";
      if (this.currDay === "wen") return "Środa";
      if (this.currDay === "thur") return "Czwartek";
      if (this.currDay === "fri") return "Piątek";
    },
    clearMockups() {
      this.lesson_1_p = "";
      this.lesson_2_p = "";
      this.lesson_3_p = "";
      this.lesson_4_p = "";
      this.lesson_5_p = "";
      this.lesson_6_p = "";
      this.lesson_7_p = "";
      this.lesson_8_p = "";
    },
    async setupInitial() {
      if (this.currDay === "mon") {
        if (
          this.classes[this.i].monday[0] !== null &&
          this.classes[this.i].monday[0] !== undefined
        )
          this.lesson_1 = this.classes[this.i].monday[0];
        this.lesson_1_p = this.lesson_1.przedmiot;
        if (
          this.classes[this.i].monday[1] !== null &&
          this.classes[this.i].monday[1] !== undefined
        )
          this.lesson_2 = this.classes[this.i].monday[1];
        this.lesson_2_p = this.lesson_2.przedmiot;

        if (
          this.classes[this.i].monday[2] !== null &&
          this.classes[this.i].monday[2] !== undefined
        )
          this.lesson_3 = this.classes[this.i].monday[2];
        this.lesson_3_p = this.lesson_3.przedmiot;

        if (
          this.classes[this.i].monday[3] !== null &&
          this.classes[this.i].monday[3] !== undefined
        )
          this.lesson_4 = this.classes[this.i].monday[3];
        this.lesson_4_p = this.lesson_4.przedmiot;

        if (
          this.classes[this.i].monday[4] !== null &&
          this.classes[this.i].monday[4] !== undefined
        )
          this.lesson_5 = this.classes[this.i].monday[4];
        this.lesson_5_p = this.lesson_5.przedmiot;

        if (
          this.classes[this.i].monday[5] !== null &&
          this.classes[this.i].monday[5] !== undefined
        )
          this.lesson_6 = this.classes[this.i].monday[5];
        this.lesson_6_p = this.lesson_6.przedmiot;

        if (
          this.classes[this.i].monday[6] !== null &&
          this.classes[this.i].monday[6] !== undefined
        )
          this.lesson_7 = this.classes[this.i].monday[6];
        this.lesson_7_p = this.lesson_7.przedmiot;

        if (
          this.classes[this.i].monday[7] !== null &&
          this.classes[this.i].monday[7] !== undefined
        )
          this.lesson_8 = this.classes[this.i].monday[7];
        this.lesson_8_p = this.lesson_8.przedmiot;
      }
      //update mockup in rest of week days
      if (this.currDay === "tue") {
        if (
          this.classes[this.i].tuesday[0] !== null &&
          this.classes[this.i].tuesday[0] !== undefined
        )
          this.lesson_1 = this.classes[this.i].tuesday[0];
        this.lesson_1_p = this.lesson_1.przedmiot;
        if (
          this.classes[this.i].tuesday[1] !== null &&
          this.classes[this.i].tuesday[1] !== undefined
        )
          this.lesson_2 = this.classes[this.i].tuesday[1];
        this.lesson_2_p = this.lesson_2.przedmiot;

        if (
          this.classes[this.i].tuesday[2] !== null &&
          this.classes[this.i].tuesday[2] !== undefined
        )
          this.lesson_3 = this.classes[this.i].tuesday[2];
        this.lesson_3_p = this.lesson_3.przedmiot;

        if (
          this.classes[this.i].tuesday[3] !== null &&
          this.classes[this.i].tuesday[3] !== undefined
        )
          this.lesson_4 = this.classes[this.i].tuesday[3];
        this.lesson_4_p = this.lesson_4.przedmiot;

        if (
          this.classes[this.i].tuesday[4] !== null &&
          this.classes[this.i].tuesday[4] !== undefined
        )
          this.lesson_5 = this.classes[this.i].tuesday[4];
        this.lesson_5_p = this.lesson_5.przedmiot;

        if (
          this.classes[this.i].tuesday[5] !== null &&
          this.classes[this.i].tuesday[5] !== undefined
        )
          this.lesson_6 = this.classes[this.i].tuesday[5];
        this.lesson_6_p = this.lesson_6.przedmiot;

        if (
          this.classes[this.i].tuesday[6] !== null &&
          this.classes[this.i].tuesday[6] !== undefined
        )
          this.lesson_7 = this.classes[this.i].tuesday[6];
        this.lesson_7_p = this.lesson_7.przedmiot;

        if (
          this.classes[this.i].tuesday[7] !== null &&
          this.classes[this.i].tuesday[7] !== undefined
        )
          this.lesson_8 = this.classes[this.i].tuesday[7];
        this.lesson_8_p = this.lesson_8.przedmiot;
      }
      if (this.currDay === "wen") {
        if (
          this.classes[this.i].wen[0] !== null &&
          this.classes[this.i].wen[0] !== undefined
        )
          this.lesson_1 = this.classes[this.i].wen[0];
        this.lesson_1_p = this.lesson_1.przedmiot;

        if (
          this.classes[this.i].wen[1] !== null &&
          this.classes[this.i].wen[1] !== undefined
        )
          this.lesson_2 = this.classes[this.i].wen[1];
        this.lesson_2_p = this.lesson_2.przedmiot;

        if (
          this.classes[this.i].wen[2] !== null &&
          this.classes[this.i].wen[2] !== undefined
        )
          this.lesson_3 = this.classes[this.i].wen[2];
        this.lesson_3_p = this.lesson_3.przedmiot;

        if (
          this.classes[this.i].wen[3] !== null &&
          this.classes[this.i].wen[3] !== undefined
        )
          this.lesson_4 = this.classes[this.i].wen[3];
        this.lesson_4_p = this.lesson_4.przedmiot;

        if (
          this.classes[this.i].wen[4] !== null &&
          this.classes[this.i].wen[4] !== undefined
        )
          this.lesson_5 = this.classes[this.i].wen[4];
        this.lesson_5_p = this.lesson_5.przedmiot;

        if (
          this.classes[this.i].wen[5] !== null &&
          this.classes[this.i].wen[5] !== undefined
        )
          this.lesson_6 = this.classes[this.i].wen[5];
        this.lesson_6_p = this.lesson_6.przedmiot;

        if (
          this.classes[this.i].wen[6] !== null &&
          this.classes[this.i].wen[6] !== undefined
        )
          this.lesson_7 = this.classes[this.i].wen[6];
        this.lesson_7_p = this.lesson_7.przedmiot;

        if (
          this.classes[this.i].wen[7] !== null &&
          this.classes[this.i].wen[7] !== undefined
        )
          this.lesson_8 = this.classes[this.i].wen[7];
        this.lesson_8_p = this.lesson_8.przedmiot;
      }
      if (this.currDay === "thur") {
        if (
          this.classes[this.i].thur[0] !== null &&
          this.classes[this.i].thur[0] !== undefined
        )
          this.lesson_1 = this.classes[this.i].thur[0];
        this.lesson_1_p = this.lesson_1.przedmiot;

        if (
          this.classes[this.i].thur[1] !== null &&
          this.classes[this.i].thur[1] !== undefined
        )
          this.lesson_2 = this.classes[this.i].thur[1];
        this.lesson_2_p = this.lesson_2.przedmiot;

        if (
          this.classes[this.i].thur[2] !== null &&
          this.classes[this.i].thur[2] !== undefined
        )
          this.lesson_3 = this.classes[this.i].thur[2];
        this.lesson_3_p = this.lesson_3.przedmiot;

        if (
          this.classes[this.i].thur[3] !== null &&
          this.classes[this.i].thur[3] !== undefined
        )
          this.lesson_4 = this.classes[this.i].thur[3];
        this.lesson_4_p = this.lesson_4.przedmiot;

        if (
          this.classes[this.i].thur[4] !== null &&
          this.classes[this.i].thur[4] !== undefined
        )
          this.lesson_5 = this.classes[this.i].thur[4];
        this.lesson_5_p = this.lesson_5.przedmiot;

        if (
          this.classes[this.i].thur[5] !== null &&
          this.classes[this.i].thur[5] !== undefined
        )
          this.lesson_6 = this.classes[this.i].thur[5];
        this.lesson_6_p = this.lesson_6.przedmiot;

        if (
          this.classes[this.i].thur[6] !== null &&
          this.classes[this.i].thur[6] !== undefined
        )
          this.lesson_7 = this.classes[this.i].thur[6];
        this.lesson_7_p = this.lesson_7.przedmiot;

        if (
          this.classes[this.i].thur[7] !== null &&
          this.classes[this.i].thur[7] !== undefined
        )
          this.lesson_8 = this.classes[this.i].thur[7];
        this.lesson_8_p = this.lesson_8.przedmiot;
      }
      if (this.currDay === "fri") {
        if (
          this.classes[this.i].friday[0] !== null &&
          this.classes[this.i].friday[0] !== undefined
        )
          this.lesson_1 = this.classes[this.i].friday[0];
        this.lesson_1_p = this.lesson_1.przedmiot;

        if (
          this.classes[this.i].friday[1] !== null &&
          this.classes[this.i].friday[1] !== undefined
        )
          this.lesson_2 = this.classes[this.i].friday[1];
        this.lesson_2_p = this.lesson_2.przedmiot;

        if (
          this.classes[this.i].friday[2] !== null &&
          this.classes[this.i].friday[2] !== undefined
        )
          this.lesson_3 = this.classes[this.i].friday[2];
        this.lesson_3_p = this.lesson_3.przedmiot;

        if (
          this.classes[this.i].friday[3] !== null &&
          this.classes[this.i].friday[3] !== undefined
        )
          this.lesson_4 = this.classes[this.i].friday[3];
        this.lesson_4_p = this.lesson_4.przedmiot;

        if (
          this.classes[this.i].friday[4] !== null &&
          this.classes[this.i].friday[4] !== undefined
        )
          this.lesson_5 = this.classes[this.i].friday[4];
        this.lesson_5_p = this.lesson_5.przedmiot;

        if (
          this.classes[this.i].friday[5] !== null &&
          this.classes[this.i].friday[5] !== undefined
        )
          this.lesson_6 = this.classes[this.i].friday[5];
        this.lesson_6_p = this.lesson_6.przedmiot;

        if (
          this.classes[this.i].friday[6] !== null &&
          this.classes[this.i].friday[6] !== undefined
        )
          this.lesson_7 = this.classes[this.i].friday[6];
        this.lesson_7_p = this.lesson_7.przedmiot;

        if (
          this.classes[this.i].friday[7] !== null &&
          this.classes[this.i].friday[7] !== undefined
        )
          this.lesson_8 = this.classes[this.i].friday[7];
        this.lesson_8_p = this.lesson_8.przedmiot;
      }
    },
    // to trzeba bedzie zrobic od razu po wszystkich dniach tygodnia
    async checkCounters(type) {
      this.visible = false;

      if (
        (this.lesson_1 === "" || this.lesson_1 === undefined) &&
        (this.lesson_2 === "" || this.lesson_2 === undefined) &&
        (this.lesson_3 === "" || this.lesson_3 === undefined) &&
        (this.lesson_4 === "" || this.lesson_4 === undefined) &&
        (this.lesson_5 === "" || this.lesson_5 === undefined) &&
        (this.lesson_6 === "" || this.lesson_6 === undefined) &&
        (this.lesson_7 === "" || this.lesson_7 === undefined) &&
        (this.lesson_8 === "" || this.lesson_8 === undefined)
      ) {
        if (type === "class-change") {
          this.currentClass = this.classSelect;
          for (let a = 0; a < this.classes.length; a++) {
            if (this.classes[a].name === this.currentClass) {
              this.i = a;
            }
          }
          this.clear();
          await this.setupInitial().then(() => {
            this.visible = true;
          });
        }
      }

      const arr = [
        this.lesson_1,
        this.lesson_2,
        this.lesson_3,
        this.lesson_4,
        this.lesson_5,
        this.lesson_6,
        this.lesson_7,
        this.lesson_8,
      ];
      const counters = [
        this.counter_1,
        this.counter_2,
        this.counter_3,
        this.counter_4,
        this.counter_5,
        this.counter_6,
        this.counter_7,
        this.counter_8,
      ];
      // trzeba zliczyc wystapienia kazdego przedmiotu na obecnej liscie we wszystkich dniach tygodnia - tutaj jest w obecnym, trzeba jeszcze dodać pozostałe ( to  trzeba wydostac z firebase)

      //ZLICZANIE DLA PONIEDZIALKU AKTYWNEGO
      if (this.currDay === "mon") {
        for (let a = 0; a < 8; a++) {
          for (let b = 0; b < 8; b++) {
            if (arr[a] !== undefined && arr[b] !== undefined) {
              if (arr[a].przedmiot === arr[b].przedmiot) {
                counters[a]++;
              }
            }
          }

          if (this.classes[this.i].tuesday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (
                this.classes[this.i].tuesday[b] !== null &&
                arr[a] !== undefined
              ) {
                if (
                  this.classes[this.i].tuesday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].wen.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (
                this.classes[this.i].wen[b] !== null &&
                arr[a] !== undefined
              ) {
                if (
                  this.classes[this.i].wen[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].thur.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (
                this.classes[this.i].thur[b] !== null &&
                arr[a] !== undefined
              ) {
                if (
                  this.classes[this.i].thur[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].friday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (
                this.classes[this.i].friday[b] !== null &&
                arr[a] !== undefined
              ) {
                if (
                  this.classes[this.i].friday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
        }
      }

      //ZLICZANIE DLA wtorku AKTYWNEGO
      if (this.currDay === "tue") {
        for (let a = 0; a < 8; a++) {
          for (let b = 0; b < 8; b++) {
            if (arr[a] !== undefined && arr[b] !== undefined) {
              if (arr[a].przedmiot === arr[b].przedmiot) {
                counters[a]++;
              }
            }
          }

          if (this.classes[this.i].monday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].monday[b] !== null) {
                if (
                  this.classes[this.i].monday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].wen.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].wen[b] !== null) {
                if (
                  this.classes[this.i].wen[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].thur.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].thur[b] !== null) {
                if (
                  this.classes[this.i].thur[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].friday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].friday[b] !== null) {
                if (
                  this.classes[this.i].friday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
        }
      }
      //ZLICZANIE DLA srody AKTYWNEGO
      if (this.currDay === "wen") {
        for (let a = 0; a < 8; a++) {
          for (let b = 0; b < 8; b++) {
            if (arr[a] !== undefined && arr[b] !== undefined) {
              if (arr[a].przedmiot === arr[b].przedmiot) {
                counters[a]++;
              }
            }
          }
          if (this.classes[this.i].tuesday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].tuesday[b] !== null) {
                if (
                  this.classes[this.i].tuesday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].monday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].monday[b] !== null) {
                if (
                  this.classes[this.i].monday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].thur.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].thur[b] !== null) {
                if (
                  this.classes[this.i].thur[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].friday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].friday[b] !== null) {
                if (
                  this.classes[this.i].friday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
        }
      }
      //ZLICZANIE DLA czwartku AKTYWNEGO
      if (this.currDay === "thur") {
        for (let a = 0; a < 8; a++) {
          for (let b = 0; b < 8; b++) {
            if (arr[a] !== undefined && arr[b] !== undefined) {
              if (arr[a].przedmiot === arr[b].przedmiot) {
                counters[a]++;
              }
            }
          }
          if (this.classes[this.i].tuesday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].tuesday[b] !== null) {
                if (
                  this.classes[this.i].tuesday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].wen.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].wen[b] !== null) {
                if (
                  this.classes[this.i].wen[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].monday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].monday[b] !== null) {
                if (
                  this.classes[this.i].monday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].friday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].friday[b] !== null) {
                if (
                  this.classes[this.i].friday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
        }
      }
      //ZLICZANIE DLA piatku AKTYWNEGO
      if (this.currDay === "fri") {
        for (let a = 0; a < 8; a++) {
          for (let b = 0; b < 8; b++) {
            if (arr[a] !== undefined && arr[b] !== undefined) {
              if (arr[a].przedmiot === arr[b].przedmiot) {
                counters[a]++;
              }
            }
          }
          if (this.classes[this.i].tuesday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].tuesday[b] !== null) {
                if (
                  this.classes[this.i].tuesday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].wen.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].wen[b] !== null) {
                if (
                  this.classes[this.i].wen[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].thur.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].thur[b] !== null) {
                if (
                  this.classes[this.i].thur[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
          if (this.classes[this.i].monday.length !== 0) {
            for (let b = 0; b < 8; b++) {
              if (this.classes[this.i].monday[b] !== null) {
                if (
                  this.classes[this.i].monday[b].przedmiot === arr[a].przedmiot
                ) {
                  counters[a]++;
                }
              }
            }
          }
        }
      }

      for (let a = 0; a < 8; a++) {
        for (let b = 0; b < this.keysAll.length; b++) {
          if (arr[a] !== undefined) {
            if (
              arr[a].klasa === this.keysAll[b].klasa &&
              arr[a].przedmiot === this.keysAll[b].przedmiot
            ) {
              if (counters[a] > this.keysAll[b].licznik) {
                showSnackbar(
                  `Za duzo wystąpień przedmiotu: ${arr[a].przedmiot} `
                );
                // this.clear();
                this.classSelect = this.currentClass;
                // await this.setupInitial().then(() => {
                //   this.visible = true;
                // });
                this.visible = true;
                return;
              }
            }
          }
        }
      }

      //check the teachers
      if (this.currDay === "mon") {
        for (let a = 0; a < 8; a++) {
          if (arr[a] !== "") {
            for (let b = 0; b < this.classes.length; b++) {
              if (this.classes[b].monday[a] !== null)
                if (
                  arr[a].nauczyciel === this.classes[b].monday[a].nauczyciel &&
                  arr[a].klasa !== this.classes[b].monday[a].klasa
                ) {
                  this.classSelect = this.currentClass;
                  showSnackbar(
                    `Nauczyciel: ${
                      arr[a].nauczyciel
                    } jest niedostepny na lekcji ${a + 1} `
                  );
                  this.visible = true;
                  return;
                }
            }
          }
        }
      }
      if (this.currDay === "tue") {
        for (let a = 0; a < 8; a++) {
          if (arr[a] !== "") {
            for (let b = 0; b < this.classes.length; b++) {
              if (this.classes[b].tuesday[a] !== null)
                if (
                  arr[a].nauczyciel === this.classes[b].tuesday[a].nauczyciel &&
                  arr[a].klasa !== this.classes[b].tuesday[a].klasa
                ) {
                  this.classSelect = this.currentClass;
                  showSnackbar(
                    `Nauczyciel: ${
                      arr[a].nauczyciel
                    } jest niedostepny na lekcji ${a + 1} `
                  );
                  this.visible = true;
                  return;
                }
            }
          }
        }
      }
      if (this.currDay === "wen") {
        for (let a = 0; a < 8; a++) {
          if (arr[a] !== "") {
            for (let b = 0; b < this.classes.length; b++) {
              if (this.classes[b].wen[a] !== null)
                if (
                  arr[a].nauczyciel === this.classes[b].wen[a].nauczyciel &&
                  arr[a].klasa !== this.classes[b].wen[a].klasa
                ) {
                  this.classSelect = this.currentClass;
                  showSnackbar(
                    `Nauczyciel: ${
                      arr[a].nauczyciel
                    } jest niedostepny na lekcji ${a + 1} `
                  );
                  this.visible = true;
                  return;
                }
            }
          }
        }
      }
      if (this.currDay === "thur") {
        for (let a = 0; a < 8; a++) {
          if (arr[a] !== "") {
            for (let b = 0; b < this.classes.length; b++) {
              if (this.classes[b].thur[a] !== null)
                if (
                  arr[a].nauczyciel === this.classes[b].thur[a].nauczyciel &&
                  arr[a].klasa !== this.classes[b].thur[a].klasa
                ) {
                  this.classSelect = this.currentClass;
                  showSnackbar(
                    `Nauczyciel: ${
                      arr[a].nauczyciel
                    } jest niedostepny na lekcji ${a + 1} `
                  );
                  this.visible = true;
                  return;
                }
            }
          }
        }
      }
      if (this.currDay === "fri") {
        for (let a = 0; a < 8; a++) {
          if (arr[a] !== "") {
            for (let b = 0; b < this.classes.length; b++) {
              if (this.classes[b].friday[a] !== null)
                if (
                  arr[a].nauczyciel === this.classes[b].friday[a].nauczyciel &&
                  arr[a].klasa !== this.classes[b].friday[a].klasa
                ) {
                  this.classSelect = this.currentClass;
                  showSnackbar(
                    `Nauczyciel: ${
                      arr[a].nauczyciel
                    } jest niedostepny na lekcji ${a + 1} `
                  );
                  this.visible = true;
                  return;
                }
            }
          }
        }
      }

      if (this.currDay === "mon") {
        this.classes[this.i] = {
          name: this.currentClass,
          monday: [
            this.lesson_1 === "" || this.lesson_1 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_1.licznik - counters[0],
                  nauczyciel: this.lesson_1.nauczyciel,
                  przedmiot: this.lesson_1.przedmiot,
                  lesson: 1,
                },

            this.lesson_2 === "" || this.lesson_2 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_2.licznik - counters[1],
                  nauczyciel: this.lesson_2.nauczyciel,
                  przedmiot: this.lesson_2.przedmiot,
                  lesson: 2,
                },

            this.lesson_3 === "" || this.lesson_3 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_3.licznik - counters[2],
                  nauczyciel: this.lesson_3.nauczyciel,
                  przedmiot: this.lesson_3.przedmiot,
                  lesson: 3,
                },

            this.lesson_4 === "" || this.lesson_4 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_4.licznik - counters[3],
                  nauczyciel: this.lesson_4.nauczyciel,
                  przedmiot: this.lesson_4.przedmiot,
                  lesson: 4,
                },

            this.lesson_5 === "" || this.lesson_5 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_5.licznik - counters[4],
                  nauczyciel: this.lesson_5.nauczyciel,
                  przedmiot: this.lesson_5.przedmiot,
                  lesson: 5,
                },

            this.lesson_6 === "" || this.lesson_6 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_6.licznik - counters[5],
                  nauczyciel: this.lesson_6.nauczyciel,
                  przedmiot: this.lesson_6.przedmiot,
                  lesson: 6,
                },

            this.lesson_7 === "" || this.lesson_7 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_7.licznik - counters[6],
                  nauczyciel: this.lesson_7.nauczyciel,
                  przedmiot: this.lesson_7.przedmiot,
                  lesson: 7,
                },

            this.lesson_8 === "" || this.lesson_8 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_8.licznik - counters[7],
                  nauczyciel: this.lesson_8.nauczyciel,
                  przedmiot: this.lesson_8.przedmiot,
                  lesson: 8,
                },
          ],
          tuesday: this.classes[this.i].tuesday,
          wen: this.classes[this.i].wen,
          thur: this.classes[this.i].thur,
          friday: this.classes[this.i].friday,
        };
      }
      if (this.currDay === "tue") {
        this.classes[this.i] = {
          name: this.currentClass,
          tuesday: [
            this.lesson_1 === "" || this.lesson_1 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_1.licznik - counters[0],
                  nauczyciel: this.lesson_1.nauczyciel,
                  przedmiot: this.lesson_1.przedmiot,
                  lesson: 1,
                },

            this.lesson_2 === "" || this.lesson_2 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_2.licznik - counters[1],
                  nauczyciel: this.lesson_2.nauczyciel,
                  przedmiot: this.lesson_2.przedmiot,
                  lesson: 2,
                },

            this.lesson_3 === "" || this.lesson_3 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_3.licznik - counters[2],
                  nauczyciel: this.lesson_3.nauczyciel,
                  przedmiot: this.lesson_3.przedmiot,
                  lesson: 3,
                },

            this.lesson_4 === "" || this.lesson_4 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_4.licznik - counters[3],
                  nauczyciel: this.lesson_4.nauczyciel,
                  przedmiot: this.lesson_4.przedmiot,
                  lesson: 4,
                },

            this.lesson_5 === "" || this.lesson_5 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_5.licznik - counters[4],
                  nauczyciel: this.lesson_5.nauczyciel,
                  przedmiot: this.lesson_5.przedmiot,
                  lesson: 5,
                },

            this.lesson_6 === "" || this.lesson_6 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_6.licznik - counters[5],
                  nauczyciel: this.lesson_6.nauczyciel,
                  przedmiot: this.lesson_6.przedmiot,
                  lesson: 6,
                },

            this.lesson_7 === "" || this.lesson_7 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_7.licznik - counters[6],
                  nauczyciel: this.lesson_7.nauczyciel,
                  przedmiot: this.lesson_7.przedmiot,
                  lesson: 7,
                },

            this.lesson_8 === "" || this.lesson_8 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_8.licznik - counters[7],
                  nauczyciel: this.lesson_8.nauczyciel,
                  przedmiot: this.lesson_8.przedmiot,
                  lesson: 8,
                },
          ],
          monday: this.classes[this.i].monday,
          wen: this.classes[this.i].wen,
          thur: this.classes[this.i].thur,
          friday: this.classes[this.i].friday,
        };
      }
      if (this.currDay === "wen") {
        this.classes[this.i] = {
          name: this.currentClass,
          wen: [
            this.lesson_1 === "" || this.lesson_1 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_1.licznik - counters[0],
                  nauczyciel: this.lesson_1.nauczyciel,
                  przedmiot: this.lesson_1.przedmiot,
                  lesson: 1,
                },

            this.lesson_2 === "" || this.lesson_2 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_2.licznik - counters[1],
                  nauczyciel: this.lesson_2.nauczyciel,
                  przedmiot: this.lesson_2.przedmiot,
                  lesson: 2,
                },

            this.lesson_3 === "" || this.lesson_3 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_3.licznik - counters[2],
                  nauczyciel: this.lesson_3.nauczyciel,
                  przedmiot: this.lesson_3.przedmiot,
                  lesson: 3,
                },

            this.lesson_4 === "" || this.lesson_4 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_4.licznik - counters[3],
                  nauczyciel: this.lesson_4.nauczyciel,
                  przedmiot: this.lesson_4.przedmiot,
                  lesson: 4,
                },

            this.lesson_5 === "" || this.lesson_5 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_5.licznik - counters[4],
                  nauczyciel: this.lesson_5.nauczyciel,
                  przedmiot: this.lesson_5.przedmiot,
                  lesson: 5,
                },

            this.lesson_6 === "" || this.lesson_6 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_6.licznik - counters[5],
                  nauczyciel: this.lesson_6.nauczyciel,
                  przedmiot: this.lesson_6.przedmiot,
                  lesson: 6,
                },

            this.lesson_7 === "" || this.lesson_7 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_7.licznik - counters[6],
                  nauczyciel: this.lesson_7.nauczyciel,
                  przedmiot: this.lesson_7.przedmiot,
                  lesson: 7,
                },

            this.lesson_8 === "" || this.lesson_8 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_8.licznik - counters[7],
                  nauczyciel: this.lesson_8.nauczyciel,
                  przedmiot: this.lesson_8.przedmiot,
                  lesson: 8,
                },
          ],
          tuesday: this.classes[this.i].tuesday,
          monday: this.classes[this.i].monday,
          thur: this.classes[this.i].thur,
          friday: this.classes[this.i].friday,
        };
      }
      if (this.currDay === "thur") {
        this.classes[this.i] = {
          name: this.currentClass,
          thur: [
            this.lesson_1 === "" || this.lesson_1 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_1.licznik - counters[0],
                  nauczyciel: this.lesson_1.nauczyciel,
                  przedmiot: this.lesson_1.przedmiot,
                  lesson: 1,
                },

            this.lesson_2 === "" || this.lesson_2 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_2.licznik - counters[1],
                  nauczyciel: this.lesson_2.nauczyciel,
                  przedmiot: this.lesson_2.przedmiot,
                  lesson: 2,
                },

            this.lesson_3 === "" || this.lesson_3 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_3.licznik - counters[2],
                  nauczyciel: this.lesson_3.nauczyciel,
                  przedmiot: this.lesson_3.przedmiot,
                  lesson: 3,
                },

            this.lesson_4 === "" || this.lesson_4 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_4.licznik - counters[3],
                  nauczyciel: this.lesson_4.nauczyciel,
                  przedmiot: this.lesson_4.przedmiot,
                  lesson: 4,
                },

            this.lesson_5 === "" || this.lesson_5 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_5.licznik - counters[4],
                  nauczyciel: this.lesson_5.nauczyciel,
                  przedmiot: this.lesson_5.przedmiot,
                  lesson: 5,
                },

            this.lesson_6 === "" || this.lesson_6 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_6.licznik - counters[5],
                  nauczyciel: this.lesson_6.nauczyciel,
                  przedmiot: this.lesson_6.przedmiot,
                  lesson: 6,
                },

            this.lesson_7 === "" || this.lesson_7 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_7.licznik - counters[6],
                  nauczyciel: this.lesson_7.nauczyciel,
                  przedmiot: this.lesson_7.przedmiot,
                  lesson: 7,
                },

            this.lesson_8 === "" || this.lesson_8 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_8.licznik - counters[7],
                  nauczyciel: this.lesson_8.nauczyciel,
                  przedmiot: this.lesson_8.przedmiot,
                  lesson: 8,
                },
          ],
          tuesday: this.classes[this.i].tuesday,
          wen: this.classes[this.i].wen,
          monday: this.classes[this.i].monday,
          friday: this.classes[this.i].friday,
        };
      }
      if (this.currDay === "fri") {
        this.classes[this.i] = {
          name: this.currentClass,
          friday: [
            this.lesson_1 === "" || this.lesson_1 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_1.licznik - counters[0],
                  nauczyciel: this.lesson_1.nauczyciel,
                  przedmiot: this.lesson_1.przedmiot,
                  lesson: 1,
                },

            this.lesson_2 === "" || this.lesson_2 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_2.licznik - counters[1],
                  nauczyciel: this.lesson_2.nauczyciel,
                  przedmiot: this.lesson_2.przedmiot,
                  lesson: 2,
                },

            this.lesson_3 === "" || this.lesson_3 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_3.licznik - counters[2],
                  nauczyciel: this.lesson_3.nauczyciel,
                  przedmiot: this.lesson_3.przedmiot,
                  lesson: 3,
                },

            this.lesson_4 === "" || this.lesson_4 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_4.licznik - counters[3],
                  nauczyciel: this.lesson_4.nauczyciel,
                  przedmiot: this.lesson_4.przedmiot,
                  lesson: 4,
                },

            this.lesson_5 === "" || this.lesson_5 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_5.licznik - counters[4],
                  nauczyciel: this.lesson_5.nauczyciel,
                  przedmiot: this.lesson_5.przedmiot,
                  lesson: 5,
                },

            this.lesson_6 === "" || this.lesson_6 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_6.licznik - counters[5],
                  nauczyciel: this.lesson_6.nauczyciel,
                  przedmiot: this.lesson_6.przedmiot,
                  lesson: 6,
                },

            this.lesson_7 === "" || this.lesson_7 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_7.licznik - counters[6],
                  nauczyciel: this.lesson_7.nauczyciel,
                  przedmiot: this.lesson_7.przedmiot,
                  lesson: 7,
                },

            this.lesson_8 === "" || this.lesson_8 === undefined
              ? null
              : {
                  klasa: this.currentClass,
                  licznik: this.lesson_8.licznik - counters[7],
                  nauczyciel: this.lesson_8.nauczyciel,
                  przedmiot: this.lesson_8.przedmiot,
                  lesson: 8,
                },
          ],
          tuesday: this.classes[this.i].tuesday,
          wen: this.classes[this.i].wen,
          thur: this.classes[this.i].thur,
          monday: this.classes[this.i].monday,
        };
      }

      await db
        .collection("data")
        .doc(auth.currentUser.uid)
        .set({
          klucze: this.keysAll,
          klasy: this.classes,
          nauczyciele: this.teachers,
          przedmioty: this.subjects,
          hours_s: this.hours_s,
          hours_e: this.hours_e,
        })
        .then(async () => {
          if (type === "class-change") {
            this.currentClass = this.classSelect;
            for (let a = 0; a < this.classes.length; a++) {
              if (this.classes[a].name === this.currentClass) {
                this.i = a;
              }
            }
            this.clear();
            await this.setupInitial().then(() => {
              this.visible = true;
            });
          }
          if (type === "decrease-day") {
            this.j--;
            this.currDay = this.days[this.j];
            this.clear();
            await this.setupInitial().then(() => {
              this.visible = true;
            });
          }
          if (type === "increase-day") {
            this.j++;
            this.currDay = this.days[this.j];
            this.clear();
            await this.setupInitial().then(() => {
              this.visible = true;
            });
          }
        })
        .catch((err) => console.log(err));
    },

    increaseDay() {
      if (this.checkCounters()) {
        this.j++;
        this.currDay = this.days[this.j];
      } else {
        this.clear();
      }
    },
    decreaseDay() {
      if (this.checkCounters()) {
        this.j--;
        this.currDay = this.days[this.j];
      } else {
        this.clear();
      }
    },
    clear() {
      this.lesson_1 = "";
      this.lesson_2 = "";
      this.lesson_3 = "";
      this.lesson_4 = "";
      this.lesson_5 = "";
      this.lesson_6 = "";
      this.lesson_7 = "";
      this.lesson_8 = "";
      this.clearMockups();
    },
  },

  async mounted() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "data", auth.currentUser.uid);
        this.docSnap = await getDoc(docRef);
        this.currentClass = this.classes[this.i].name;
        this.currentClassObj = this.classes[this.i];
        this.classSelect = this.currentClass;
        await this.setupInitial();
        for (let s = 0; s < this.classes[this.i].monday.length; s++) {
          if (this.classes[this.i].monday[s] !== null) {
            this.arr.push(this.classes[this.i].monday[s]);
          } else {
            this.arr.push(null);
          }
        }
        for (let a = 0; a < this.classes.length; a++) {
          if (this.classes[a].name === this.currentClass) {
            this.i = a;
          }
        }
      } else {
        this.$router.push({ name: "Auth" });
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
    keysAll() {
      return this.docSnap.data().klucze;
    },
    keys() {
      return this.docSnap.data().klucze.filter((key) => {
        if (key.klasa == this.currentClass) return key;
      });
    },
    hours_s() {
      return this.docSnap.data().hours_s;
    },
    hours_e() {
      return this.docSnap.data().hours_e;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  max-height: 700px;
  overflow: scroll;
}
.lesson {
  display: flex;
  position: relative;
}
.hours {
  margin-top: 18px;
}
select {
  min-width: 450px;
  padding: 0px 30px;
  font-size: 30px;
  margin: 3px 30px;
  background: #eae7c6;
  border: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  max-width: 600px;
  position: relative;
}
.class-title {
  position: absolute;
  top: 2%;
  left: 35%;
  background: rgba(195, 123, 137, 1);
  padding: 15px;
  color: #fff;
  border-radius: 100%;
}
.next {
  margin-left: 550px;
  margin-top: -50px;
}
.back {
  margin-left: 30px;
  margin-top: -30px;
}
.class-select {
  min-width: 0px;
  position: absolute;
}
.day {
  position: absolute;
  right: 10%;
}

.subj {
  position: absolute;
  font-size: 28px;
  color: #fff;
  text-transform: uppercase;
  left: 18%;
  top: 16.5%;
  z-index: 100;
  letter-spacing: 0.7px;
  opacity: 1;
}
.delete {
  position: absolute;
  cursor: pointer;
  left: 9%;
  top: 25%;
}
.del {
  left: 8%;
}
.delete i {
  color: #bccc9a;
  transition: all 0.5s;
}
.delete i:hover {
  color: red;
}
</style>
