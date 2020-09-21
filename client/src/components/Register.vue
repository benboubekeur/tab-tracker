<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" id="email" placeholder="Email :">
    <br>
    <br>
    <input type="password" name="password" v-model="password" id="password" placeholder="Password : ">
    <br>
    <br>
    <button name="register" @click="register">Register</button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService';

  export default {
  name: 'Register',
  data (){
    return{
      email:'',
      password:''
    }
  },
  methods : {
  async  register() {
      const  response = await AuthenticationService.register({
        email : this.email,
        password : this.password
      })
      console.warn(response.data)
    }
  }
}
</script>

<style scoped>

</style>
