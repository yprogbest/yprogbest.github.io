const client = algoliasearch('3E2AM5CTOC', 'b31eb770cd20a4f942c268f43c3714cb')
const index = client.initIndex('yprog_search_index')



const articles = [

  // テンプレート
  // {
  //   title: '記事2のタイトル',
  //   url: '記事2のURL',
  //   content: '記事2の本文',
  // },

  {
    title: 'androidアプリ『まとめて四則演算』を開発しました！【無料】-YProg-',
    url: 'https://yprogbest.github.io/posts/1_matometesisoku.html',
    content: 'このアプリは，2つの数字を入力することで，足し算や引き算，掛け算，割り算といった四則演算を一括して行ってくれます．',
  },
  {
    title: 'androidアプリ『じゃんくじ』を開発しました！【無料】-YProg-',
    url: 'https://yprogbest.github.io/posts/3_jankuji.html',
    content: 'このアプリは，コンピュータとじゃんけんをして，その勝敗で獲得したポイント数によってあなたの運勢を占います．',
  },
  // 追加の記事データをここに追加



  
];

index.saveObjects(articles).then((response) => {
  console.log('Articles indexed:', response);
}).catch((error) => {
  console.error('Error indexing articles:', error);
});
