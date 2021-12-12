<template>
  <Suspense>
    <template #default>
      <PostEditor />
    </template>
    <template #fallback> <Spinner /></template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostEditor from "@/components/PostEditor.vue";
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
  components: {
    PostEditor,
    Spinner,
  },
});
</script>
