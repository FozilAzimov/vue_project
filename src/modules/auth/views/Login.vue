<script setup>
  import {ref} from "vue";
  import axios from "axios";
  import router from "@/router";

  import {useAuthStore} from "../auth.store";

  const hideSkib = ref(true);
  const getSkibBtn = ()=>{
    hideSkib.value
        ?hideSkib.value=false
        :hideSkib.value=true;
  }

  const authStore = useAuthStore();
  const username = ref(null);
  const password = ref(null);

  const getResponse = async ()=>{
    if(!username||!password) return;
    const req = {
      username:username.value,
      password:password.value,
    }
    const {data:{token}} =  await authStore.LOGIN(req);
    localStorage.setItem('access_token', token);
    if(!token) return;
    const res = await axios.get('http://192.168.1.58:8080/home',{
      headers:{
        'Authorization': `Bearer ${token}`,
      }
    });
    if(res.status===200) router.push('/home');
  }
</script>

<template>
  <div class="wrapper">
    <div class="blur"></div>
    <div class="animation_wrapper" v-if="hideSkib">
      <div class="animation_video">
        <video class="video" autoplay controls muted>
          <source src="../../../assets/videos/animation_video.mp4" type="video/mp4">
        </video>
        <button class="skip" @click="getSkibBtn">Пропустить</button>
      </div>
    </div>
    <div class="box" v-else>
      <img class="logo" src="../../../assets/icons/logo.png" alt="Logo_img">
      <h1 class="title">Добро пожаловать в Uz-Erp</h1>
      <form class="forma">
        <div class="input_wrapper">
          <img class="icons" src="../../../assets/icons/user.png" alt="userIcon">
          <input class="input username" type="text" placeholder="Имя пользователя" v-model="username">
        </div>
        <div class="input_wrapper">
          <img class="icons" src="../../../assets/icons/password.png" alt="passiword">
          <input class="input password" type="password" placeholder="Password" v-model="password">
        </div>
        <div class="input_wrapper">
          <input type="button" class="form_btn" value="Войти" @click="getResponse"/>
        </div>
        <p class="version_text">Версия 221632.02.01</p>
      </form>
    </div>
    <div class="language">
      <div class="lg_btn_wrapper">
        <div class="btn_wrap">
          <img class="globus" src="../../../assets/icons/global.png" alt="globus_icon">
          <button class="lg_btn">Русский</button>
          <img class="arrow"  src="../../../assets/icons/arrow.png" alt="arrow_icon">
        </div>
      </div>
      <ul class="list">
        <li class="list_item"><img class="flag" src="../../../assets/icons/usa.png" alt="Английский">Английский</li>
        <li class="list_item"><img class="flag" src="../../../assets/icons/russia.png" alt="Русский">Русский</li>
        <li class="list_item"><img class="flag" src="../../../assets/icons/turkey.png" alt="Турецкий">Турецкий</li>
        <li class="list_item"><img class="flag" src="../../../assets/icons/uzbekistan.png" alt="Uzbek">Uzbek</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>