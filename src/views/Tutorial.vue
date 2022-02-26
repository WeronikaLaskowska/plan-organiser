<template>
  <div class="container-2">
    <SideMenu :tutActive="true" />
    <div class="content">
      <transition name="fade">
        <div v-if="page === 1" class="page-1">
          <div class="header">
            <h1 class="title">Jak działa aplikacja Plan Organiser?</h1>
            <h2 class="undertitle">
              Jeżeli nigdy nie korzystałeś z aplikacji, przeczytaj uważnie ten
              poradnik krok po kroku.
            </h2>
            <div class="underscore"></div>
          </div>
          <div class="app-use">
            <div class="text-area">
              <h1>Do czego służy ta aplikacja?</h1>
              <p>
                Aplikacja ta stworzona została z myślą o pracownikach szkół
                <b>podstawowych</b> oraz <b>ponadpodstawowych</b>, ma ona służyć
                jako narzędzie wspomagające proces tworzenia <b>planu zajęć</b>.
                <br />
                <br />
                Nie jest to aplikacja,która wygeneruje gotowy plan, zamiast
                tego, posługując się wprowadzonymi przez użytkownika danymi,
                jedynie wspomaga jego tworzenie, pozostawiając decyzje
                <b>pod kontrolą użytkownika</b>.
              </p>
            </div>
            <img class="pg1-img" src="./../assets/im1.png" alt="" />
          </div>
          <div @click="increasePage" class="btn next">
            DALEJ
            <img src="./../assets/next-icon.png" alt="" />
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="page === 2" class="page-2">
          <div class="header">
            <h1 class="title">Jak korzystać z aplikacji Plan Organiser?</h1>
          </div>
          <div class="step step-1">
            <img src="./../assets/im2.png" alt="" />
            <div class="text">
              <div class="step-title">KROK 1</div>
              <div class="underscore-short"></div>
              <p>
                Krok pierwszy zatytuowany
                <span class="colored">“Wpisz dane”</span> jest pierwszym etapem
                tworzenia planu zajęć. Użytkownik wpisuje kolejno
                <b>wszystkie</b>: klasy, przedmioty oraz nauczycieli, którzy
                mają być zawarci w planie zajęć. <b>Możesz usunąć wpisane dane, klikając na nie.</b> 
              </p>
            </div>
          </div>

          <div class="step-reversed step-2">
            <img src="./../assets/im3.png" alt="" />
            <div class="text">
              <div class="step-title">KROK 2</div>
              <div class="underscore-short"></div>
              <p>
                Krok drugi zatytuowany
                <span class="colored">“Ustal klucze”</span> - najistotniejszy etap tworzenia planu. Użytkownik
                powiązuje ze sobą cztery istotne elementy: klasę z przedmiotem
                oraz nauczycielem, który go prowadzi w tej konkretnej klasie
                oraz ilością godzin jego występowania w tygodniu.
              </p>
            </div>
          </div>

          <div @click="decreasePage" class="btn back">
            <img src="./../assets/back-icon.png" alt="" />
            COFNIJ
          </div>
          <div @click="increasePage" class="btn next next-2">
            DALEJ
            <img src="./../assets/next-icon.png" alt="" />
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="page === 3" class="page-3">
          <div class="header">
            <h1 class="title">Jak korzystać z aplikacji Plan Organiser?</h1>
          </div>
          <div class="step step-3">
            <img src="./../assets/im4.png" alt="" />
            <div class="text">
              <div class="step-title">KROK 3</div>
              <div class="underscore-short"></div>
              <p>
                W kroku trzeci zatytuowanym
                <span class="colored">“Ustal godziny”</span>, użytkownik ustala
                godziny zajęć, jakie obowiązują w danej placówce, podając dokładne przedziały godzinowe dla każdej lekcji. Maksymalna ilość lekcji na kady dzień jest ustalona z góry.
              </p>
            </div>
          </div>

          <div class="step-reversed step-4">
            <img src="./../assets/im5.png" alt="" />
            <div class="text">
              <div class="step-title">KROK 4</div>
              <div class="underscore-short"></div>
              <p>
                Ostatni krok, czyli <span class="colored">“Twórz plan”</span>,
                jak nazwa wskazuje, użytkownik tworzy plan zajęć w oparciu o
                wcześniejsze dane, przy użyciu intuicyjnego interfejsu
                graficznego. <br /><br />
                <span class="warning">
                  UWAGA: Po przejściu do kroku czwartego, nie będzie możliwości
                  zmiany wcześniej wprowadzonych danych!</span
                >
              </p>
            </div>
          </div>

          <div @click="decreasePage" class="btn back">
            <img src="./../assets/back-icon.png" alt="" />
            COFNIJ
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";

export default {
  name: "Tutorial",
  components: {
    SideMenu,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    increasePage() {
      if (this.page < 3) this.page++;
    },
    decreasePage() {
      if (this.page > 1) this.page--;
    },

  },
 
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.title {
  color: #c37b89;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 5px;
}
.undertitle {
  font-size: 18px;
  font-weight: 400;
}
.underscore {
  width: 750px;
  background: #eae7c6;
  height: 1px;
  margin-top: 10px;
}
.app-use {
  display: flex;
  margin-top: 20px;
  padding: 30px;
}
.pg1-img {
  width: 350px;
  height: 320px;
  margin-top: 50px;
}
.text-area p {
  font-size: 22px;
}
.text-area h1 {
  font-size: 28px;
  color: #c37b89;
  font-weight: 400;
}
.next {
  margin-left: 580px;
}

.step {
  display: flex;
  padding: 30px;
}
.step-reversed {
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
}
.step img,
.step-reversed img {
  width: 310px;
  height: 210px;
}
.step-reversed img {
  margin-top: 30px;
}
.underscore-short {
  width: 410px;
  background: #eae7c6;
  height: 1px;
  margin-top: 10px;
}
.text {
  padding-left: 40px;
}
.text p {
  font-size: 20px;
  font-weight: 400;
}
.colored {
  color: #bccc9a;
  font-weight: bold;
}
.step-title {
  font-weight: 700;
  font-size: 24px;
  color: #bccc9a;
}
.next-2 {
  margin-top: -52px;
}
.back {
  margin-left: 30px;
}
.warning {
  color: #c81639;
  font-weight: 700;
}
</style>
