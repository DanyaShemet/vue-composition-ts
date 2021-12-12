import { reactive, readonly, provide, inject, App } from "vue";
import axios from "axios";
import { Post } from "@/mocks.ts";

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface State {
  posts: PostState;
  authors: AuthorsState;
}

export type Author = Omit<User, "password">;

interface BaseState<T> {
  ids: string[];
  all: Map<string, T>;
  loaded: boolean;
}

type PostState = BaseState<Post>;
interface AuthorsState extends BaseState<Author> {
  currentUserId: string | undefined;
}

export const storeKey = Symbol("store");
export class Store {
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
    this.state.posts.all.set(response.data.id, response.data);
    this.state.posts.ids.push(response.data.id);
  }
  async updatePost(post: Post) {
    const response = await axios.put<Post>("/posts", post);
    this.state.posts.all.set(response.data.id, response.data);
  }

  async createUser(user: User) {
    const response = await axios.post<User>("/users", user);
    this.state.authors.all.set(response.data.id, response.data);
    this.state.authors.ids.push(response.data.id);
    this.state.authors.currentUserId = response.data.id;
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
  authors: {
    all: new Map<string, Author>(),
    ids: [],
    loaded: false,
    currentUserId: undefined,
  },
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
