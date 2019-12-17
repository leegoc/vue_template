<template>
  <div>
    <input type="text" v-model="userName">
    <input type="password" v-model="password">
    <button @click="loginBtn">login</button>
  </div>
</template>
<script>
import { handleLogin } from '@/api/login'
import { encryption } from '@/utils/crypto'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    loginBtn () {
      const obj = {
        code: '2000',
        data: {
          username: this.userName,
          password: encryption(this.password)
        }
      }
      handleLogin(obj).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less">

</style>
