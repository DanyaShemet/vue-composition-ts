import { mount } from "@vue/test-utils";
import NewPost from "@/components/NewPost.vue";
import { Store } from "@/store";

let routes: string[] = [];

jest.mock("vue-router", () => ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useRouter: () => {
    return {
      push: (path: string) => {
        routes.push(path);
        console.log("Push");
      },
    };
  },
}));

jest.mock("axios", () => ({
  post: (url: string, payload: any) => {
    return {
      data: payload,
    };
  },
}));

describe("NewPost", () => {
  const store = new Store({
    posts: {
      ids: [],
      all: new Map(),
      loaded: false,
    },
    authors: {
      ids: ["100"],
      all: new Map([
        [
          "100",
          {
            username: "username",
            id: "100",
          },
        ],
      ]),
      loaded: true,
      currentUserId: "100",
    },
  });

  beforeEach(() => {
    routes = [];
  });

  it("created a posts and redirect to /", async () => {
    const wrapper = mount(NewPost, {
      global: {
        plugins: [store],
      },
    });

    expect(store.getState().posts.ids).toHaveLength(0);

    await wrapper.find('[data-test="submit"]').trigger("click");

    expect(store.getState().posts.ids).toHaveLength(1);
    expect(routes).toEqual(["/"]);
  });
});
