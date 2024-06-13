import { describe, expect, test, beforeAll } from 'bun:test'

beforeAll(() => {
  console.log('beforeAll')
})

describe('math', () => {
    test('add', () => {
        expect(1 + 1).toBe(2);
        expect(2 + 3).toBe(5);
    })
    
    test('subtract', () => {
        expect(1 - 1).toBe(0)
    })
})