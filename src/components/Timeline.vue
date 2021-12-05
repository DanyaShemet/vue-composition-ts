<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period in periods"
        :key="period"
        :class="{ 'is-active': currentPeriod === period }"
        :data-test="period"
        @click="setPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
    <TimeLinePost
      v-for="post in posts"
      :key="post.id"
      class="panel-block"
      :post="post"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import moment from "moment";
import { Post } from "@/mocks";
import { useStore } from "@/store.ts";
import TimeLinePost from "@/components/TimeLinePost.vue";
type Period = "Today" | "This week" | "This month";

export default defineComponent({
  name: "Timeline",
  components: { TimeLinePost },
  async setup() {
    const periods: Period[] = ["Today", "This week", "This month"];
    const currentPeriod = ref<Period>("Today");
    const store = useStore();

    if (!store.getState().posts.loaded) {
      await store.fetchPost();
    }

    const allPosts = store.getState().posts.ids.reduce<Post[]>((acc, id) => {
      const thePost = store.getState().posts.all.get(id);
      if (!thePost) {
        throw Error("This post was not found");
      }
      return acc.concat(thePost);
    }, []);
    console.log(allPosts, store.getState().posts.all);
    const posts = computed(() => {
      return allPosts.filter((post) => {
        if (currentPeriod.value === "Today") {
          return post.created.isAfter(moment().subtract(1, "day"));
        }
        if (currentPeriod.value === "This week") {
          return post.created.isAfter(moment().subtract(1, "week"));
        }
        if (currentPeriod.value === "This month") {
          return post.created.isAfter(moment().subtract(1, "month"));
        }
        return false;
      });
    });
    const setPeriod = (period: Period) => {
      currentPeriod.value = period;
    };
    return {
      periods,
      currentPeriod,
      setPeriod,
      posts,
    };
  },
});
</script>

<style scoped></style>
