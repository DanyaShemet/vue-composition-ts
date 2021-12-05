<template>
  <form @submit.prevent="submit">
    <FormInput
      name="Username"
      type="text"
      v-model="username"
      :error="usernameStatus.message"
    />

    <FormInput
      name="Password"
      type="password"
      v-model="password"
      :error="passwordStatus.message"
    />

    <button
      class="button is-primary"
      :disabled="!usernameStatus.valid || !passwordStatus.valid"
    >
      Button
    </button>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import FormInput from "@/components/FormInput.vue";
import { required, length, validate, Status } from "@/validations";
import { User, useStore } from "@/store";
import { useModal } from "@/useModal";

export default defineComponent({
  components: { FormInput },

  setup() {
    const store = useStore();
    const modal = useModal();
    const username = ref("username");
    const password = ref("password");
    const usernameStatus = computed<Status>(() => {
      return validate(username.value, [
        required(),
        length({ min: 5, max: 10 }),
      ]);
    });

    const passwordStatus = computed<Status>(() => {
      return validate(password.value, [
        required(),
        length({ min: 10, max: 40 }),
      ]);
    });

    const submit = async () => {
      if (!usernameStatus.value.valid || !passwordStatus.value.valid) {
        return;
      }
      const newUser: User = {
        id: "-1",
        username: username.value,
        password: password.value,
      };
      await store.createUser(newUser);
      modal.hideModal();
    };

    return { username, usernameStatus, password, passwordStatus, submit };
  },
});
</script>

<style>
form {
  padding: 15px;
  background-color: #fff;
}
</style>
