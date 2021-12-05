<template>
  <Suspense>
    <template #default>
      <Timeline />
    </template>
    <template #fallback> <Spinner /></template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timeline from "@/components/Timeline.vue";
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
  name: "App",
  components: {
    Spinner,
    Timeline,
  },
});
</script>
