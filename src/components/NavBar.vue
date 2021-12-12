<template>
  <div class="navbar">
    <div class="navbar-end">
      <div class="buttons" v-if="auth">
        <router-link class="button" to="/posts/new">New Post</router-link>
        <button class="button" @click="signOut">Sign Out</button>
      </div>
      <div class="buttons" v-else>
        <button class="button" @click="signUp" data-test="sign-up">
          Sign Up
        </button>
        <button class="button" @click="signIn">Sign In</button>
      </div>
    </div>
  </div>

  <teleport to="#modal">
    <component :is="component" />
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, h, markRaw } from "vue";
import SignUp from "@/components/SignUp.vue";
import { useStore } from "@/store";
import { useModal } from "@/useModal";

export default defineComponent({
  name: "NavBar",
  components: { SignUp },
  setup() {
    const modal = useModal();
    const store = useStore();
    const auth = computed(() => {
      return !!store.getState().authors.currentUserId;
    });
    const signUp = () => {
      modal.component.value = markRaw(SignUp);
      modal.showModal();
    };
    const signIn = () => {
      const Demo = defineComponent({
        setup() {
          return () => h("div", "Demo");
        },
      });
      modal.component.value = markRaw(Demo);
      modal.showModal();
    };
    const signOut = () => {
      const Demo2 = defineComponent({
        setup() {
          return () => h("div", "Demo2");
        },
      });
      modal.component.value = markRaw(Demo2);
      modal.showModal();
    };

    return { component: modal.component, auth, signIn, signUp, signOut };
  },
});
</script>
