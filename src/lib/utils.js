import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const $ajax = {
  ajax: function (method, apiUrl, opts) {
    axios({
      method: method,
      url: apiUrl,
      data: opts
    }).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
  }
}

export default $ajax;
