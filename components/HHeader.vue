<template>
  <!-- <v-container fluid>
    <v-layout justify-start align-start row>
      <v-flex v-if="icon">
        <v-icon>{{ icon }}</v-icon>
      </v-flex>

      <v-flex>
        <v-breadcrumbs v-if="items" divider="/">
          <v-breadcrumbs-item :key="home" :disabled="true">
            Home
          </v-breadcrumbs-item>
          <v-breadcrumbs-item v-for="item in items" :key="item.title" :disabled="item.disabled">
            {{ item.title }}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-flex>
      <v-flex flex-grow>
        <h1 class="primary--text">
          <slot> Title </slot>
        </h1>
      </v-flex>
      <v-spacer/>
    </v-layout>
    <hr>
  </v-container> -->

  <v-toolbar dense flat color="blue lighten-5">
    <v-icon color="primary">{{ icon }}</v-icon>

    <v-breadcrumbs v-if="items" divider="/">
      <!-- <v-breadcrumbs-item key="home" :disabled="true"> Home
      </v-breadcrumbs-item> -->
      <!-- <v-breadcrumbs-item v-for="item in items" :key="item.title" exact nuxt ripple :to="item.path">
        {{ item.title }}
      </v-breadcrumbs-item> -->
      <v-breadcrumbs-item key="title" class="title">
        <strong class="black--text">
          <slot> Title</slot>
        </strong>
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-toolbar-title v-else class="body-3">
      <strong>
        <slot> Title </slot>
      </strong>
    </v-toolbar-title>

  </v-toolbar>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    }
  }
}
</script>
