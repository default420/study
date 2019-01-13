import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'

import Button from '@/components/atoms/Button'

// avoid warning message by Vuetify
Vue.use(Vuetify, {
  iconfont: 'md'
})

describe('Button.vue', () => {
  let wrapper
  const slot = 'Button Test'

  beforeAll(() => {
    wrapper = mount(Button, {
      slots: {
        default: slot
      }
    })
  })

  afterAll(() => {
    wrapper.destroy()
  })

  it('mount correctly.', () => {
    expect(wrapper.name()).toBe('Button')
    expect(wrapper.find('button').text()).toBe(slot)
  })

  it('when button clicked, emitted correct event.', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted('handleEvent')).toBeTruthy()
  })
})
