test('1', () => {
  expect(2+2).toBe(4)
  expect(2+2).not.toBe(5)
})

test('truely', () => {
  expect(4 > 3).toBeTruthy()
})

test('number', () => {
  expect(4).toBeLessThan(6)
  expect(5).toBeGreaterThan(4)
})

test('object', () => {
  expect({a:1}).toEqual({a: 1})
})