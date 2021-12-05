<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">New Post</div>
        <input v-model="title" type="text" class="input" data-test="title" />
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <div
        contenteditable
        ref="contentEditable"
        @input="handleInput"
        data-test="content"
      ></div>
    </div>
    <div class="column">
      <div v-html="html"></div>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <button
        @click="save"
        data-test="submit"
        class="button is-primary is-pulled-right"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { Post } from "@/mocks";
import { parse } from "marked";
import highlight from "highlight.js";
import debounce from "lodash/debounce";

export default defineComponent({
  name: "PostWriter",
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  emits: {
    save: (post: Post) => {
      return true;
    },
  },

  setup(props, ctx) {
    const title = ref(props.post.title);
    const content = ref("## Title\nEnter");
    const html = ref("");

    const parseHtml = (str: string) => {
      html.value = parse(str, {
        gfm: true,
        breaks: true,
        highlight: (code: string) => {
          return highlight.highlightAuto(code).value;
        },
      });
    };

    watch(content, debounce(parseHtml, 250), { immediate: true });

    const contentEditable = ref<HTMLDivElement | null>(null);
    const handleInput = () => {
      content.value = contentEditable.value?.innerText || "";
    };
    onMounted(() => {
      if (!contentEditable.value) {
        throw Error("This should never happen");
      }
      contentEditable.value.innerText = content.value;
    });

    const save = () => {
      const newPost: Post = {
        ...props.post,
        html: html.value,
        title: title.value,
        markdown: content.value,
      };
      ctx.emit("save", newPost);
    };

    return {
      html,
      title,
      content,
      contentEditable,
      handleInput,
      save,
    };
  },
});
</script>

<style>
.column {
  overflow-x: auto;
}
</style>
