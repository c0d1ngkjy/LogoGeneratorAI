<template>
  <q-page class="q-pa-lg">
    <div
      class="column justify-between hide-scrollbar q-pa-sm"
      style="height: 90vh; overflow-y: scroll"
    >
      <div class="q-gutter-sm">
        <div class="text-h6 text-weight-thin">Enter Logo Name</div>
        <q-input
          color="black"
          maxlength="20"
          placeholder="logo name"
          outlined
          v-model="logoNameInput"
        />
      </div>

      <div class="q-gutter-sm">
        <div class="text-h6 text-weight-thin">Enter Logo Description</div>
        <div class="text-caption text-weight-thin">
          Ex. it is a logo for a web service that generates logos
        </div>
        <q-input
          autogrow
          color="black"
          maxlength="100"
          placeholder="logo description"
          outlined
          v-model="logoDesInput"
        />
      </div>

      <div class="q-gutter-sm">
        <div class="text-h6 text-weight-thin">Select Logo Type</div>
        <q-radio
          label="With Icon"
          v-model="type"
          val="Icon and Text under the Icon"
          color="black"
          size="xs"
        />
        <q-radio
          label="Only Text"
          v-model="type"
          val="Only Text"
          color="black"
          size="xs"
        />
        <q-radio
          label="Only Icon"
          v-model="type"
          val="Only Icon"
          color="black"
          size="xs"
        />
      </div>

      <div class="q-gutter-sm">
        <div class="text-h6 text-weight-thin">Select Primary Color</div>
        <q-select
          outlined
          color="black"
          v-model="primaryColor"
          :options="colors"
          options-cover
        >
          <template v-slot:append>
            <q-btn :color="primaryColor"></q-btn>
          </template>
        </q-select>
      </div>

      <div class="q-gutter-sm">
        <div class="text-h6 text-weight-thin">Select Secondary Color</div>
        <q-select
          color="black"
          v-model="secondaryColor"
          :options="colors"
          options-cover
          outlined
        >
          <template v-slot:append>
            <q-btn :color="secondaryColor"></q-btn>
          </template>
        </q-select>
      </div>

      <div class="text-right">
        <q-btn round @click="next()">
          <q-icon name="arrow_forward" />
        </q-btn>
      </div>
    </div>

    <div class="text-caption text-grey fixed-bottom text-center q-mb-xs">
      All rights reserved codingkjy28
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { usePromptStore } from "stores/prompt";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",

  setup() {
    const promptStore = usePromptStore();
    const $router = useRouter();

    const logoNameInput = ref();
    const logoDesInput = ref();
    const type = ref();
    const primaryColor = ref();
    const secondaryColor = ref();
    let prompt = null;
    const colors = [
      "white",
      "black",
      "red",
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "light-green",
      "lime",
      "yellow",
      "amber",
      "orange",
      "deep-orange",
      "brown",
      "grey",
      "blue-grey",
    ];

    function next() {
      promptStore.prompt = `generate a logo, logo name is "${logoNameInput.value}", logo description is "${logoDesInput.value}", type of logo is "${type.value}", use "${primaryColor.value}" as primary color and "${secondaryColor.value}" as secondary color for the logo.`;
      console.log(promptStore.prompt);
      $router.push("logo");
    }

    return {
      logoNameInput,
      logoDesInput,
      next,
      type,
      colors,
      primaryColor,
      secondaryColor,
    };
  },
});
</script>
