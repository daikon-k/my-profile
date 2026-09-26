import BookCard from "./components/BookCard";

const books = [
  {
    id: 1,
    title: "君と見た青い空",
    author: "山田 太郎",
    rating: 5,
    comment: "心があたたかくなる、素敵な物語でした。",
  },
  {
    id: 2,
    title: "ねこと暮らす日々",
    author: "佐藤 花子",
    rating: 4,
    comment: "読みやすくて、とても癒される一冊です。",
  },
  {
    id: 3,
    title: "未来をつくる思考法",
    author: "鈴木 健一",
    rating: 3,
    comment: "これからの生き方を考えるきっかけになりました。",
  },
  {
    id: 4,
    title: "人間になりたい",
    author: "紅葉 広大",
    rating: 5,
    comment: "人。人間について、深く考えるきっかけになりました。",
  },
  {
    id: 5,
    title: "HTMLやCSSについて",
    author: "磯野 出獲他",
    rating: 4,
    comment: "教科書みたいな役割と初心者には、とてもお勧めです。",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-gray-800 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-4xl font-bold text-white">
          書籍紹介ページ
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              comment={book.comment}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;