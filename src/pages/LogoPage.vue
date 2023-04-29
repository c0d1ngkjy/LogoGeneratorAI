<template>
  <q-page class="q-pa-lg column justify-bertween">
    <div>
      <div>Generated Logo</div>
      <img :src="imageUrl" alt="logo" width="50vw" />
    </div>

    <div class="text-right">
      <q-btn round @click="back()">
        <q-icon name="arrow_back" />
      </q-btn>
    </div>

    <div class="text-caption text-grey fixed-bottom text-center q-mb-xs">
      All rights reserved codingkjy28
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { usePromptStore } from "stores/prompt";
import { useRouter } from "vue-router";
import { Configuration, OpenAIApi } from "openai";

export default defineComponent({
  name: "LogoPage",

  setup() {
    const promptStore = usePromptStore();
    const $router = useRouter();
    const imageUrl = ref("");

    const apiKey = "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";

    const generateImage = async () => {
      const configuration = new Configuration({
        apiKey: apiKey,
      });
      const openai = new OpenAIApi(configuration);

      try {
        const response = await openai.createImage({
          prompt: "A cute baby sea otter",
          n: 1,
          size: "256x256",
        });
        imageUrl.value = response.data[0].url;
      } catch (error) {
        console.error(error);
      }
    };

    function back() {
      $router.push("/");
    }

    onMounted(() => {
      generateImage();
    });

    return { back, imageUrl };
  },
});
</script>
