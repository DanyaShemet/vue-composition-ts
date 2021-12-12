import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { today, thisMonth, thisWeek, Post } from "@/mocks";
import { routerWithStore } from "@/router.ts";
import { random } from "lodash";
import "highlight.js/styles/github-dark.css";
import { Author, store, storeKey } from "@/store";

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
axios.post = async (url: string, payload: any) => {
  if (url === "/posts") {
    const id = random(100, 10000);
    await delay();
    const post: Post = {
      ...payload,
      title: payload.title,
      created: payload.created,
      id: id.toString(),
      authorId: payload.authorId,
    };
    return Promise.resolve<{ data: Post }>({
      data: post,
    });
  }

  if (url === "/users") {
    const id = random(100, 10000);
    await delay();
    const author: Author = {
      id: id.toString(),
      username: payload.username,
    };
    return Promise.resolve({
      data: author,
    });
  }
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axios.put = async (url: string, payload: any) => {
  if (url === "/posts") {
    await delay();
    const post: Post = {
      ...payload,
      title: payload.title,
      created: payload.created,
      authorId: payload.authorId,
    };
    return Promise.resolve<{ data: Post }>({
      data: post,
    });
  }
};

const router = routerWithStore(store);
createApp(App).use(router).use(store).mount("#app");
