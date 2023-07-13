// hello_algolia.js
const algoliasearch = require('algoliasearch')

// Connect and authenticate with your Algolia app
const client = algoliasearch('3E2AM5CTOC', 'b31eb770cd20a4f942c268f43c3714cb')

// Create a new index and add a record
const index = client.initIndex('yprog_search_index')
const record = { objectID: 1, name: 'test_record' }
index.saveObject(record).wait()

// Search the index and print the results
index
  .search('test_record')
  .then(({ hits }) => console.log(hits[0]))
