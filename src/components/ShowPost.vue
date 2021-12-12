<template>
  <Suspense>
    <template #default>
      <PostViewer />
    </template>
    <template #fallback> <Spinner /></template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostViewer from "@/components/PostViewer.vue";
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
  components: {
    PostViewer,
    Spinner,
  },
});
</script>
