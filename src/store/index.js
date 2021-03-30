import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const state = {
    erro: undefined,
    mail: [],
  };
  
  import * as types from "./mutations_types";
  import {
    SET_EMAIL_FORM,
    SET_ERROR
  } from "./mutations_types";
  import Service from "./../services/service.js";
  
  const mutations = {
    [SET_EMAIL_FORM]: (state, { mail }) => {
      state.mail = mail;
    },
    
    [SET_ERROR]: (state, { error }) => {
      state.error = error;
    },
  };
  
  const actions = {
    postMail: ({ commit }, payload) => {
      console.log(payload);
      return Service.postMail(payload)
        .then((response) =>
          commit(types.SET_EMAIL_FORM, {
            response: response.data,
          })
        )
        .catch((error) => commit(types.SET_ERROR, { error }));
    },
  };
  
  const getters = {
    
  };
  
  export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  });
  