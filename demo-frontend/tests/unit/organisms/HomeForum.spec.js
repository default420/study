import { createLocalVue, shallowMount } from '@vue/test-utils'
import MockAxios from 'axios-mock-adapter'
import flushPromises from 'flush-promises'

import HomeForum from '@/components/organisms/HomeForum'
import api from '@/api/api'

describe('HomeForum.vue', () => {
  let wrapper
  const stub = jest.fn()

  beforeEach(() => {
    const localVue = createLocalVue()

    wrapper = shallowMount(HomeForum, {
      localVue
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  describe('test for html and default state', () => {
    it('structed by RequestApiForm.vue', () => {
      expect(wrapper.name()).toBe('HomeForum')
      expect(wrapper.find('requestapiform-stub').isVisible()).toBeTruthy()
    })

    it('correctly props message to RequestApiForm', () => {
      expect(wrapper.find('requestapiform-stub').attributes('message')).toBe('can i see me?')
    })

    it('when @handleEvent happens, emitted requestApi.', () => {
      wrapper.setMethods({ requestData: stub })
      wrapper.find('requestapiform-stub').vm.$emit('requestApi')

      expect(stub).toBeCalled()
    })
  })

  describe('test for api request', () => {
    const mockAxios = new MockAxios(api)
    const username = 'test'

    afterEach(() => {
      mockAxios.reset()
    })

    it('when requestData method called, received response data', async () => {
      mockAxios.onGet('/account').reply(200, {
        username: username
      })

      wrapper.vm.requestData()

      await flushPromises()

      expect(wrapper.vm.text).toBe(username)
    })

    it('when requestData method errored, catch error correctly', async () => {
      mockAxios.onGet('/account').reply(500)

      wrapper.vm.requestData()

      await flushPromises()

      expect(wrapper.vm.text).toBe('500')
    })
  })
})
