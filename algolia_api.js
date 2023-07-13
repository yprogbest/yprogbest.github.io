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


// 検索結果の表示
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');


searchForm.addEventListener('submit', function (e) {
  e.preventDefault(); // フォームのデフォルトの送信動作をキャンセル

  const query = searchInput.value;

  index.search({
    query: query,
    // 追加のオプションを指定することもできます
  }).then((response) => {
    displayResults(response.hits);
  }).catch((error) => {
    console.error(error);
  });
});

function displayResults(results) {
  searchResults.innerHTML = '';

  if (results.length === 0) {
    searchResults.innerHTML = '<p>該当する記事は見つかりませんでした。</p>';
    return;
  }

  results.forEach((result) => {
    const articleLink = document.createElement('a');
    articleLink.href = result.url; // 記事の実際のURLに置き換える
    articleLink.textContent = result.title; // 記事のタイトルに置き換える

    const articleItem = document.createElement('div');
    articleItem.appendChild(articleLink);

    searchResults.appendChild(articleItem);
  });
}
