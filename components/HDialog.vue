<template>
  <v-dialog
    :value="showDialog"
    :disabled="disabled"
    max-width="400"
    @input="$emit('update:showDialog', false)"
  >
    <!--
      <v-btn slot="activator" :disabled="editmode||linkedProfiles.length>0" icon >
         @input="$emit('update:showDialog', false)"
              <v-icon>fas fa-trash</v-icon>
      </v-btn>
    -->
    <v-card>
      <v-card-title class="headline amber">{{ dialog.title }}</v-card-title>
      <v-card-text
        ><slot>{{ dialog.question }}</slot></v-card-text
      >
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn @click="hideDialogWithAction()">Yes</v-btn>
        <v-btn
          autofocus
          class="white--text"
          color="deep-purple accent-4"
          @click="hideDialog()"
          >No</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="js">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { Mutation, State } from "vuex-class"

@Component({})
export default class HDialog extends Vue {
  @Prop({ type: Boolean, default: false })
  showDialog

  @Prop({ type: Boolean, default: false })
  disabled

  @Mutation hideDialog

  @Mutation hideDialogWithAction

  @State dialog
}
</script>

<style scoped></style>
