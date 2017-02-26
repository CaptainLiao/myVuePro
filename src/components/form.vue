<template>
  <div class="list-block">
    <ul>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">用户名</div>
            <div class="item-input">
              <input type="text" @blur=saveName(username) v-model="username" placeholder="Your name">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-password"></i></div>
          <div class="item-inner">
            <div class="item-title label">密码</div>
            <div class="item-input">
              <input type="password" v-model="password" @blur=savePwd(password) placeholder="Password" class="">
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import {startInput} from '../vuex/actions.js'
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        username:'',
        password: ''
      }
    },
    methods: {
      // saveName(name) {
      //   this.info.username = name;
      // },
      // savePwd(pwd) {
      //   this.info.pwd = pwd;
      // },
      ...mapActions({
        saveName: 'saveName' ,
        savePwd: 'savePwd' 
      })
    }
  }
</script>