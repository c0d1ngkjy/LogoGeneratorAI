import { defineStore } from "pinia";

export const usePromptStore = defineStore("prompt", {
  state: () => ({
    prompt: null,
  }),
});
