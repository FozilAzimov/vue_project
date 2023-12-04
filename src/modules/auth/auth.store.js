import {defineStore} from "pinia";
import getResponseLogin from "./auth.api";

export const useAuthStore = defineStore('auth',{
  state(){},
  getters:{},
  actions:{
    async LOGIN(data){
      return await getResponseLogin(data);
    },
  }
});