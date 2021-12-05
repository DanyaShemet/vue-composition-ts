import { reactive, readonly, provide, inject, App } from "vue";
import axios from "axios";
import { Post } from "@/mocks.ts";

interface State {
  posts: PostState;
}

export interface User {
  id: string;
  username: string;
  password: string;
}

interface PostState {
  ids: string[];
  all: Map<string, Post>;
  loaded: boolean;
}

export const storeKey = Symbol("store");
class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  install(app: App) {
    app.provide(storeKey, this);
  }
  getState() {
    return readonly(this.state);
  }

  async createPost(post: Post) {
    const response = await axios.post<Post>("/posts", post);
    this.state.posts.all.set(post.id, response.data);
    this.state.posts.ids.push(post.id);
  }

  async createUser(user: User) {
    console.log(user);
  }

  async fetchPost() {
    const response = await axios.get<Post[]>("/posts");
    const postsState: PostState = {
      all: new Map(),
      ids: [],
      loaded: true,
    };
    for (const post of response.data) {
      postsState.ids.push(post.id);
      postsState.all.set(post.id, post);
    }
    this.state.posts = postsState;
  }
}

const all = new Map<string, Post>();

export const store = new Store({
  posts: {
    all,
    ids: [],
    loaded: false,
  },
});

export function useStore(): Store {
  const _store = inject<Store>(storeKey);
  if (!_store) {
    throw Error("Did you forgot to call provide");
  }
  return _store;
}
