import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('msg should render default', () => {
    const msg = 'default'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.text()).to.include(msg)
  })
})
