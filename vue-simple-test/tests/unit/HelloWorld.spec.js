import { expect } from 'chai'
import sinon from 'sinon'
import { shallowMount, mount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld'
import api from '@/api/api'

describe('HelloWorld.vue', () => {
  it('msg should render default', () => {
    const msg = 'default'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.text()).to.include(msg)
  })

  it('requestApi() can get response data', () => {
    const msg = 'OK'

    sinon.stub(api.prototype).resolves()
    const wrapper = mount(HelloWorld)

    wrapper.find('button').trigger('click')
    
    wrapper.vm.$watch('msg', () => {
      const result = wrapper.find('p').text()
      expect(result).to.be.equal(msg)
    })
  })
})
