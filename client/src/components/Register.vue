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
                    <form>
                        name="tab-tracker-form"
                        autocomplete="off" >
                    <v-row  align="center" justify="center">
                        <v-col cols="11" md="4">
                            <v-text-field type="email" name="email" v-model="email" id="email"
                                          label="Email :"></v-text-field>
                        </v-col>
                        <br>
                        <br>
                        <v-col cols="11" md="4">
                            <v-text-field type="password" name="password" v-model="password" id="password"
                                          placeholder="Password : " autocomplete="new-password">
                            </v-text-field>
                        </v-col>
                            <br>
                            <br>
                            <div class="error" v-html="error"/>
                      <v-col cols="12" md="4">

                      <v-btn class="cyan" name="register" @click="register">Register</v-btn>
                      </v-col>
                    </v-row>
                    </form>

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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
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
