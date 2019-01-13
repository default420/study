import { mount, createLocalVue } from '@vue/test-utils'

import Message from '@/components/atoms/Message'

describe('Message.vue', () => {
  let wrapper
  const msg = 'test'

  beforeAll(() => {
    const localVue = createLocalVue()

    wrapper = mount(Message, {
      localVue,
      propsData: {
        msg: msg
      }
    })
  })

  afterAll(() => {
    wrapper.destroy()
  })

  it('mount correctly.', () => {
    expect(wrapper.name()).toBe('Message')
    expect(wrapper.text()).toBe(msg)
  })
})
