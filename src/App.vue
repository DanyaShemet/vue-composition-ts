<template>
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div id="modal"></div>
    </div>
    <button class="modal-close is-large" @click="hide"></button>
  </div>

  <section class="section">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Navbar from "@/components/NavBar.vue";
import { useModal } from "@/useModal";

export default defineComponent({
  name: "App",
  components: { Navbar },

  setup() {
    const modal = useModal();
    const style = computed(() => {
      return {
        display: modal.show.value ? "block" : "none",
      };
    });
    const hide = () => {
      modal.hideModal();
    };
    return { style, hide };
  },
});
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
