import { mount, flushPromises } from "@vue/test-utils";
import Timeline from "@/components/Timeline.vue";
import { today, thisWeek, thisMonth } from "@/mocks.ts";

jest.mock("axios", () => ({
  get: (url: string) => {
    return Promise.resolve({
      data: [today, thisWeek, thisMonth],
    });
  },
}));

function mountTimeLine() {
  return mount({
    components: { Timeline },
    template: `<suspense>
 <template #default>
          <Timeline />
        </template>
 <template #fallback>  Loading ...</template>
</suspense>
`,
  });
}
describe("Timeline", () => {
  it("renders today by default", async () => {
    const wrapper = mountTimeLine();

    await flushPromises();
    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
  });

  it("update when periods is click", async () => {
    const wrapper = mountTimeLine();
    await flushPromises();
    await wrapper.get('[data-test="This week"]').trigger("click");
    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"));
  });

  it("update when periods is click", async () => {
    const wrapper = mountTimeLine();
    await flushPromises();
    await wrapper.get('[data-test="This month"]').trigger("click");
    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"));
    expect(wrapper.html()).toContain(thisMonth.created.format("Do MMM"));
  });
});
