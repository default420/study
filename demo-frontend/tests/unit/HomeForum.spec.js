// import { expect } from 'chai'
// import sinon from 'sinon'
// import { mount } from '@vue/test-utils'

// import HomeForum from '@/components/organisms/HomeForum.vue'
// import axios from 'axios'

// describe('HomeForum.vue', () => {
//   it('requestApi() can get response data', () => {
//     const msg = 'OK'

//     sinon.stub(axios, 'get').returns(Promise.resolve({ 'username': msg }))
//     const wrapper = mount(HomeForum)

//     wrapper.find('button').trigger('click')

//     wrapper.vm.$watch('msg', () => {
//       const result = wrapper.find('p').text()
//       expect(result).to.be.equal(msg)
//     })
//   })
// })
