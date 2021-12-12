import { today, Post } from "@/mocks";
import { State, Store } from "@/store";

const mockPost: Post = {
  ...today,
};
jest.mock("axios", () => ({
  get: () => {
    return {
      data: [mockPost],
    };
  },
}));

describe("store/fetchPosts", () => {
  it("fetches post and updated state", async () => {
    const store = new Store({
      posts: {
        ids: [],
        all: new Map(),
        loaded: false,
      },
      authors: {
        ids: [],
        all: new Map(),
        currentUserId: undefined,
        loaded: false,
      },
    });

    await store.fetchPost();

    const expected: State = {
      posts: {
        ids: ["1"],
        all: new Map([["1", mockPost]]),
        loaded: true,
      },
      authors: {
        ids: [],
        all: new Map(),
        currentUserId: undefined,
        loaded: false,
      },
    };

    expect(expected).toEqual(store.getState());
  });
});
