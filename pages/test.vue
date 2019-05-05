<template>
  <v-layout row justify-center>
    <v-flex sm6>
      <v-form @submit.prevent="login({ username, password })">
        <v-card class="elevation-12">
          <v-toolbar card color="primary darken-2" dark dense>
            <v-toolbar-title>Please Sign in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="username"
              label="Username"
              prepend-icon="person"
              type="text"
              hint="Enter your e-number (i.e. e012345)"
            />
            <v-text-field
              v-model="password"
              label="Password"
              prepend-icon="lock"
              type="password"
              hint="Enter your network password"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              :disabled="loading"
              :loading="loading"
              color="primary"
              type="submit"
              >sign in</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      username: "",
      password: "",
      loading: false
    }
  },
  methods: {
    async login(credentials) {
      this.loading = true
      if (credentials.username === "" || credentials.password === "") return
      else
        try {
          await this.$axios
            .post("https://bsvcs.nisd.net:5001/api/auth/token", {
              data: credentials
            })
            .then(response => {
              this.loading = true
              console.log(response)
              alert("Success!")
            })
        } catch (e) {
          this.loading = true
          this.$toast.error("Invalid username or password.", { icon: "error" })
        }
    }
  }
}
</script>
