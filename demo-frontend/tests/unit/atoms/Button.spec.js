import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import Button from '@/components/atoms/Button'

describe('Button.vue', () => {
  let wrapper
  const slot = 'Button Test'

  beforeAll(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify, {})

    wrapper = mount(Button, {
      localVue,
      slots: {
        default: slot
      }
    })
  })

  it('default slot message is excepted', () => {
    expect(wrapper.find('button').text()).toBe(slot)
  })

  it('when button clicked, emitted correct event.', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted('handleEvent')).toBeTruthy()
  })
})
