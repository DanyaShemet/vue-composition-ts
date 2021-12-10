<template>
  <PostWriter :post="newPost" @save="save" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostWriter from "@/components/PostWriter.vue";
import { Post } from "@/mocks";
import moment from "moment";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NewPost",
  components: { PostWriter },
  setup() {
    const newPost: Post = {
      id: "-1",
      title: "Enter your title",
      created: moment().subtract(1, "second"),
    };

    const store = useStore();
    const router = useRouter();
    const save = async (post: Post) => {
      console.log("1");
      await store.createPost(post);
      console.log(2);
      router.push("/");
      console.log(3);
    };

    return {
      save,
      newPost,
    };
  },
});
</script>
