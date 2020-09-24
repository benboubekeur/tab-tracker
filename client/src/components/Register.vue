<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
      class="grey lighten-5"
    >
      <v-col cols="10" md="6">
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div>
            <v-text-field type="email" name="email" v-model="email" id="email" label="Email :"></v-text-field>

            <br>
            <br>
            <v-text-field type="password" name="password" v-model="password" id="password" placeholder="Password : ">
            </v-text-field>
            <br>
            <br>
            <div class="error" v-html="error"/>
            <v-btn class="cyan" name="register" @click="register">Register</v-btn>
          </div>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
  .error {
    color: red;
  }
</style>
