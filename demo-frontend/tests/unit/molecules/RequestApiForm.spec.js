import { createLocalVue, shallowMount } from '@vue/test-utils'

import RequestApiForm from '@/components/molecules/RequestApiForm'

describe('RequestApiForm.vue', () => {
  let wrapper
  const msg = 'test'

  beforeAll(() => {
    const localVue = createLocalVue()

    wrapper = shallowMount(RequestApiForm, {
      localVue,
      propsData: {
        message: msg
      }
    })
  })

  afterAll(() => {
    wrapper.destroy()
  })

  it('structed by Button.vue and Message.vue', () => {
    expect(wrapper.name()).toBe('RequestApiForm')
    expect(wrapper.find('button-stub').isVisible()).toBeTruthy()
    expect(wrapper.find('button-stub').text()).toBe('API TEST')
    expect(wrapper.find('message-stub').isVisible()).toBeTruthy()
  })

  it('when @handleEvent happens, emitted requestApi.', () => {
    wrapper.find('button-stub').vm.$emit('handleEvent')
    expect(wrapper.emitted('requestApi')).toBeTruthy()
  })

  it('correctly props message to Message', () => {
    expect(wrapper.find('message-stub').attributes('msg')).toBe(msg)
  })
})
