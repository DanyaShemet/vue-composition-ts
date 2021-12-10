import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import SignUp from "@/components/SignUp.vue";
import { Store } from "@/store";

describe("NavBar", () => {
  const store = new Store({
    posts: {
      ids: [],
      all: new Map(),
      loaded: false,
    },
  });

  it("created a posts and redirect to /", async () => {
    const el = document.createElement("div");
    el.id = "modal";
    document.body.appendChild(el);

    const wrapper = mount(NavBar, {
      attachTo: document.body,
      global: {
        components: {
          RouterLink: {
            template: "<div></div>",
          },
        },
        plugins: [store],
      },
    });

    const form = wrapper.getComponent(SignUp);
    console.log(form);

    expect(document.body.outerHTML).toContain(
      "The value must be between 10 and 40"
    );
    await form.get("#Username").setValue("Username");
    await form.get("#Password").setValue("12345678910");

    expect(document.body.outerHTML).not.toContain(
      "The value must be between 10 and 40"
    );

    await form.trigger("submit.prevent");
  });
});
