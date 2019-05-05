<template>
  <div>
    <v-btn flat @click="getIp">{{ ip }}</v-btn>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: {},
      ip: "Get IP"
    }
  },
  methods: {
    getIp() {
      this.$axios.get("https://ipinfo.io").then(response => {
        this.ip = response.data.ip
      })
    }
  }
}
</script>
