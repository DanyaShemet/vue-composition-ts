import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { today, thisMonth, thisWeek, Post } from "@/mocks";
import { router } from "@/router.ts";
import { random } from "lodash";
import "highlight.js/styles/github-dark.css";
import { store, storeKey } from "@/store";

function delay() {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axios.get = async (url: string) => {
  if (url === "/posts") {
    await delay();
    return Promise.resolve({
      data: [today, thisWeek, thisMonth],
    });
  }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axios.post = async (url: string, post: Post) => {
  if (url === "/posts") {
    const id = random(100, 10000);
    await delay();
    return Promise.resolve({
      data: {
        ...post,
        id,
      },
    });
  }
};

createApp(App).use(router).use(store).mount("#app");
