<template>
  <div class="navbar">
    <div class="navbar-end">
      <div class="buttons">
        <button class="button" @click="show">Sign Up</button>
        <router-link class="button" to="/posts/new">New Post</router-link>
      </div>
    </div>
  </div>

  <teleport to="#modal">
    <div><SignUp /></div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModal } from "@/useModal";
import SignUp from "@/components/SignUp.vue";

export default defineComponent({
  name: "NavBar",
  components: { SignUp },
  setup() {
    const modal = useModal();
    const show = () => {
      modal.showModal();
    };
    return { show };
  },
});
</script>
