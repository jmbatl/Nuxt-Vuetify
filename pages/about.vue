<template>
  <div class="container">
    <div>
      <h1>Hello from <span class="name">{{ name }}</span>.</h1>
      <p><nuxt-link to="/" class="button--grey">Back home</nuxt-link></p>
      <p><v-btn @click="showMessage('I got a message for you')">Message Box</v-btn></p>
      <p><v-btn @click="showError('There is error')">Show Error Box</v-btn></p>
      <p><v-btn @click="showDialog({title: 'Are you sure',question: 'This operation will delete whole grid!!!',action: ()=>showMessage('ACtioned')})">Show Dialog</v-btn></p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex"
export default {
  layout: "vuetify",
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    }
  },
  methods: {
    ...mapMutations(["showDialog", "showError", "showMessage"])
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #3b8070;
}
p {
  margin-top: 20px;
}
</style>
