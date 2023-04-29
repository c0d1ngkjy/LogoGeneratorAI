<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black" elevated>
      <q-toolbar class="text-center">
        <q-toolbar-title class="text-weight-light"
          >Logo Generator AI</q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});
</script>
