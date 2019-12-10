
import SampleComponent from "src/components/SampleComponent.vue"
import { shallowMount } from "@vue/test-utils"

describe("SampleComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Lorem ipsum dolor sit amet."
    const wrapper = shallowMount(SampleComponent, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
