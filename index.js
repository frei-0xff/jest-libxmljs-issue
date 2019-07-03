const libxmljs = require('libxmljs')

console.log(
    libxmljs.parseXml('<customer></customer>').get('/customer').type()
)
