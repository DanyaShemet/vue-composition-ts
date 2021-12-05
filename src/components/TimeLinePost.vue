<template>
  <a class="is-align-items-flex-start is-flex is-flex-direction-column">
    <span>
      {{ post.title }}
    </span>
    <div>
      {{ post.created.format("Do MMM") }}
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Post } from "@/mocks.ts";
export default defineComponent({
  name: "TimeLinePost",
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
});
</script>

<style scoped></style>
