<template>
  <router-link
    :to="to"
    class="is-align-items-flex-start is-flex is-flex-direction-column"
  >
    <span>
      {{ post.title }}
    </span>
    <div>
      {{ post.created.format("Do MMM") }}
    </div>
  </router-link>
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

  setup(props) {
    return {
      to: `/posts/${props.post.id}`,
    };
  },
});
</script>

<style scoped></style>
