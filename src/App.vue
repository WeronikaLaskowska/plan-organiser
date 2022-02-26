<template>
  <div class="w">
    <router-view></router-view>
    <div class="snackbar" :class="type==='success' ? 'snackbar-green' : 'snackbar-red'" v-if="snackbar">
      <p>{{ snackbarMessage }}</p>
    </div>
  </div>
</template>

<script>
import EventBus, { ACTIONS } from "./EventBus/index";
export default {
  name: "App",
  data: () => ({
    snackbar: false,
    snackbarMessage: "",
    type:""
  }),
  mounted() {
    
    EventBus.$on(ACTIONS.SNACKBAR, (message,type) => {
      this.snackbarMessage = message;
      this.snackbar = true;
      this.type = type;
      setTimeout(() => {
        this.snackbar = false;
      }, 5000);
    });
  },
};
</script>

<style>
body {
  overflow: hidden;
  letter-spacing: 2px;
  background: rgb(188, 204, 154);
  background: linear-gradient(
    180deg,
    rgba(188, 204, 154, 1) 11%,
    rgba(195, 123, 137, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  font-family: "Lato", sans-serif;
}
input {
  padding: 15px 30px;
  border-radius: 30px;
  border: solid 1px #bccc9a;
  font-size: 20px;
  width: 240px;
}
input:focus {
  outline: none;
}
@media screen and (max-width:1100px) {
  input{
    padding: 10px 20px !important; 
  }
}

.btn {
  padding: 10px 40px;
  cursor: pointer;
  width: 180px;
  color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  border-radius: 30px;
  transition: all 0.6s ease;
  background: rgb(188, 204, 154);
  background: linear-gradient(
    90deg,
    rgba(188, 204, 154, 1) 0%,
    rgba(234, 231, 198, 1) 49%,
    rgba(195, 123, 137, 1) 100%
  );
}
.btn:hover {
  transform: translateY(10%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.next img {
  width: 9%;
  height: 9%;
  margin-left: 20px;
  padding-top: 4px;
}
.back img {
  width: 9%;
  height: 9%;
  margin-right: 20px;
  padding-top: 3px;
}
.logout img {
  width: 30px;
  height: 30px;
  padding: 0 5px;
  margin-top: 1px;
}
.container-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.content {
  width: 860px;
  height: 750px;
  display: block;
  background: #fff;
  border-radius: 30px;
}
.snackbar {
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 300px;
  color: #fff;
  padding: 30px;
  margin:10px;
  border-radius: 30px;
}
.snackbar p {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin:auto;
  text-align: center;
  font-weight: 300;
}
.snackbar-green{
  background: #9cbe51;
  border:3px solid #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.snackbar-red{
  background: rgb(131, 31, 31);
  border:3px solid #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>
