const libxmljs = require('libxmljs')

test('Test libxmljs', () => {
  expect(
    libxmljs
      .parseXml('<customer></customer>')
      .get('/customer')
      .type()
  ).toBe('element')
})
