import { expect } from 'chai'
import sinon from 'sinon'
import { shallowMount } from '@vue/test-utils'

import HelloWorld from '@/components/organisms/HelloWorld.vue'
import axios from 'axios'

describe('HelloWorld.vue', () => {
  it('requestApi() can get response data', () => {
    const msg = 'OK'

    sinon.stub(axios, 'get').returns(Promise.resolve({ 'statusText': 'OK' }))
    const wrapper = shallowMount(HelloWorld)

    wrapper.find('button').trigger('click')

    wrapper.vm.$watch('msg', () => {
      const result = wrapper.find('p').text()
      expect(result).to.be.equal(msg)
    })
  })
})
