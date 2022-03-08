<template>
  <div class="container-2" v-if="docSnap !== null">
    <SideMenu :myPlansActive="true" />
    <div class="content">
      <div class="wrap">
        <div class="plans" v-for="(plan, index) in saved_plans" :key="index">
        <div class="buttons">
          <div class="name">{{plan.name}}</div>
          <div @click="generateReport(plan.klasy)" class="download btn">POBIERZ</div>
        
        </div>
      </div>
      </div>
      

        <div>
            <vue-html2pdf
              :show-layout="false"
              :float-layout="true"
              :enable-download="true"
              :preview-modal="true"
              :paginate-elements-by-height="1400"
              filename="plan"
              :pdf-quality="2"
              :manual-pagination="false"
              pdf-format="a4"
              pdf-orientation="landscape"
              pdf-content-width="800px"
              ref="html2Pdf"
            >
              <section slot="pdf-content">
                <div class="table" v-for="clas in currentClasses" :key="clas.name">
                  <h1>{{ clas.name }}</h1>
                  <div class="weekdays">
                    <div class="weekday">
                      <h2>PONIEDZIAŁEK</h2>
                      <p>
                        LEKCJA 1:{{
                          clas.monday[0] === null
                            ? "  -----------"
                            : clas.monday[0].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 2:{{
                          clas.monday[1] === null
                            ? "  -----------"
                            : clas.monday[1].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 3:{{
                          clas.monday[2] === null
                            ? "  -----------"
                            : clas.monday[2].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 4:{{
                          clas.monday[3] === null
                            ? "  -----------"
                            : clas.monday[3].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 5:{{
                          clas.monday[4] === null
                            ? "  -----------"
                            : clas.monday[4].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 6:{{
                          clas.monday[5] === null
                            ? "  -----------"
                            : clas.monday[5].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 7:{{
                          clas.monday[6] === null
                            ? "  -----------"
                            : clas.monday[6].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 8:{{
                          clas.monday[7] === null
                            ? "  -----------"
                            : clas.monday[7].przedmiot
                        }}
                      </p>
                    </div>
                    <div class="weekday">
                      <h2>WTOREK</h2>
                      <p>
                        LEKCJA 1:{{
                          clas.tuesday[0] === null
                            ? "  -----------"
                            : clas.tuesday[0].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 2:{{
                          clas.tuesday[1] === null
                            ? "  -----------"
                            : clas.tuesday[1].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 3:{{
                          clas.tuesday[2] === null
                            ? "  -----------"
                            : clas.tuesday[2].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 4:{{
                          clas.tuesday[3] === null
                            ? "  -----------"
                            : clas.tuesday[3].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 5:{{
                          clas.tuesday[4] === null
                            ? "  -----------"
                            : clas.tuesday[4].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 6:{{
                          clas.tuesday[5] === null
                            ? "  -----------"
                            : clas.tuesday[5].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 7:{{
                          clas.tuesday[6] === null
                            ? "  -----------"
                            : clas.tuesday[6].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 8:{{
                          clas.tuesday[7] === null
                            ? "  -----------"
                            : clas.tuesday[7].przedmiot
                        }}
                      </p>
                    </div>
                    <div class="weekday">
                      <h2>ŚRODA</h2>
                      <p>
                        LEKCJA 1:{{
                          clas.wen[0] === null
                            ? "  -----------"
                            : clas.wen[0].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 2:{{
                          clas.wen[1] === null
                            ? "  -----------"
                            : clas.wen[1].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 3:{{
                          clas.wen[2] === null
                            ? "  -----------"
                            : clas.wen[2].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 4:{{
                          clas.wen[3] === null
                            ? "  -----------"
                            : clas.wen[3].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 5:{{
                          clas.wen[4] === null
                            ? "  -----------"
                            : clas.wen[4].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 6:{{
                          clas.wen[5] === null
                            ? "  -----------"
                            : clas.wen[5].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 7:{{
                          clas.wen[6] === null
                            ? "  -----------"
                            : clas.wen[6].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 8:{{
                          clas.wen[7] === null
                            ? "  -----------"
                            : clas.wen[7].przedmiot
                        }}
                      </p>
                    </div>
                    <div class="weekday">
                      <h2>CZWARTEK</h2>
                      <p>
                        LEKCJA 1:{{
                          clas.thur[0] === null
                            ? "  -----------"
                            : clas.thur[0].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 2:{{
                          clas.thur[1] === null
                            ? "  -----------"
                            : clas.thur[1].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 3:{{
                          clas.thur[2] === null
                            ? "  -----------"
                            : clas.thur[2].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 4:{{
                          clas.thur[3] === null
                            ? "  -----------"
                            : clas.thur[3].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 5:{{
                          clas.thur[4] === null
                            ? "  -----------"
                            : clas.thur[4].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 6:{{
                          clas.thur[5] === null
                            ? "  -----------"
                            : clas.thur[5].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 7:{{
                          clas.thur[6] === null
                            ? "  -----------"
                            : clas.thur[6].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 8:{{
                          clas.thur[7] === null
                            ? "  -----------"
                            : clas.thur[7].przedmiot
                        }}
                      </p>
                    </div>
                    <div class="weekday">
                      <h2>PIĄTEK</h2>
                      <p>
                        LEKCJA 1:{{
                          clas.friday[0] === null
                            ? "  -----------"
                            : clas.friday[0].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 2:{{
                          clas.friday[1] === null
                            ? "  -----------"
                            : clas.friday[1].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 3:{{
                          clas.friday[2] === null
                            ? "  -----------"
                            : clas.friday[2].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 4:{{
                          clas.friday[3] === null
                            ? "  -----------"
                            : clas.friday[3].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 5:{{
                          clas.friday[4] === null
                            ? "  -----------"
                            : clas.friday[4].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 6:{{
                          clas.friday[5] === null
                            ? "  -----------"
                            : clas.friday[5].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 7:{{
                          clas.friday[6] === null
                            ? "  -----------"
                            : clas.friday[6].przedmiot
                        }}
                      </p>
                      <p>
                        LEKCJA 8:{{
                          clas.friday[7] === null
                            ? "  -----------"
                            : clas.friday[7].przedmiot
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </vue-html2pdf>
          </div>

    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import VueHtml2pdf from "vue-html2pdf";
import { auth, db } from "./../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";

export default {
  name: "MyPlans",
  components: {
    SideMenu,
    VueHtml2pdf,
  },
  data() {
    return {
      docSnap: null,
      currentClasses:[],
    };
  },
   methods: {
    generateReport(classes) {
      this.currentClasses = classes;
      this.$refs.html2Pdf.generatePdf();
    },
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
.wrap{
  padding: 30px;
 max-height: 700px;
 overflow: scroll;
}
.plans {
  padding: 10px;
}
.buttons {
  display: flex;
  padding: 10px;
}
.download {
  margin-left: 10px;
}
.name {
  font-size: 40px;
  color: #c37b89;
}
.weekdays {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.weekday {
  display: flex;
  min-width: 300px;
  padding: 10px 30px;
  flex-direction: column;
  font-size: 20px;
}
.weekday h2 {
  color: #bccc9a;
}
.weekday p {
  border: 2px solid #bccc9a;
  border-radius: 10px;
  padding: 10px 4px;
}
h1{
  font-size: 2.5rem;
  background: #bccc9a;
  padding: 10px;
  border-radius: 30px;
  color:white
}
</style>
