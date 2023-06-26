import { expect } from 'vitest'
import App from './App'
import { createContainer, nextTick } from './utils/test-utils'

describe('Simple working test', () => {
  it('the title is visible', async () => {
    await createContainer('root1', <App />)
    const p: HTMLParagraphElement | null = document.querySelector('#root1 header p:first-child')
    expect(p).toBeDefined()
    expect(p?.innerHTML).toMatch(/Hello Vite \+ React!/i)
  })

  it('should focus', async () => {
    await createContainer('root2', <App />)
    expect(document.activeElement).toBe(document.body)
    const button: HTMLButtonElement | null = document.querySelector('#root2 button')
    expect(button).toBeDefined()
    expect(typeof button?.focus).toBe('function')
    button?.focus()
    await nextTick()
    expect(document.activeElement).toBe(button)
  })

  it('should increment count on click', async () => {
    await createContainer('root3', <App />)
    const button: HTMLButtonElement | null = document.querySelector('#root3 button')
    expect(button).toBeDefined()
    expect(typeof button?.click).toBe('function')
    button?.click()
    await nextTick()
    expect(button?.innerHTML).toMatch(/count is: 1/i)
  })

  it('uses flexbox in app header', async () => {
    await createContainer('root4', <App />)
    await nextTick()
    const element = document.querySelector('#root4 header')
    expect(element).toBeDefined()
    expect(element?.className).toEqual('App-header')
    expect(getComputedStyle(element!).display).toEqual('flex')
  })
})
