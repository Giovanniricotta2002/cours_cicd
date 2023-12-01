import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { useCounter } from '../test.vue'


describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitestd' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('counter', () => {
  it('useCounter', () => {
    const {count, increment} = useCounter()
    expect(count.value).toBe(0)

    increment()
    expect(count.value).toBe(1)
  });
})

