import { useState, useEffect } from "react";

function App() {
  // 保存済みのタスクがあれば、それを初期値にする
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // tasks が変わるたびに localStorage へ保存する
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // タスクを追加する
  const addTask = (event) => {
    event.preventDefault();

    const text = input.trim();

    // 空文字は追加しない
    if (text === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        done: false,
      },
    ]);

    setInput("");
  };

  // 完了状態を切り替える
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  // タスクを削除する
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.done;
    }

    if (filter === "completed") {
      return task.done;
    }

    return true;
  });

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">

        {/* タイトル */}
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900">
            タスク管理
          </h1>

          <p className="text-lg text-gray-500">
            やることを整理して、毎日をもっとスッキリ！
          </p>
        </header>

        {/* 入力フォーム */}
        <form
          onSubmit={addTask}
          className="mb-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="タスクを入力してください"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-600"
          >
            追加
          </button>
        </form>

        <div className="mb-6 flex justify-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            すべて
          </button>

          <button
            type="button"
            onClick={() => setFilter("active")}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              filter === "active"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            未完了
          </button>

          <button
            type="button"
            onClick={() => setFilter("completed")}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              filter === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            完了
          </button>
        </div>

        {/* タスク一覧 */}
        <ul className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-4 border-b border-gray-200 px-5 py-4 last:border-b-0"
            >
              {/* 完了切り替え */}
              <button
                type="button"
                onClick={() => toggleTask(task.id)}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-2 transition ${
                  task.done
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {task.done && "✓"}
              </button>

              {/* タスク名 */}
              <span
                onClick={() => toggleTask(task.id)}
                className={`min-w-0 flex-1 cursor-pointer break-words text-lg ${
                  task.done
                    ? "text-gray-400 line-through"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>

              {/* 削除 */}
              <button
                type="button"
                onClick={() => deleteTask(task.id)}
                className="rounded-md bg-red-50 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100 hover:text-red-600"
              >
                削除
              </button>
            </li>
          ))}
        </ul>

        {/* タスクがない場合 */}
        {tasks.length === 0 && (
          <p className="mt-10 text-center text-gray-400">
            タスクがありません
          </p>
        )}

        {/* 機能説明 */}
        <section className="mt-12 rounded-xl bg-blue-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            このアプリの主な機能
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <h3 className="mb-2 font-bold text-blue-800">
                ① タスクの追加
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                テキストを入力して「追加」を押すか、
                Enterキーでタスクを追加できます。
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-blue-800">
                ② タスクの削除
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                「削除」ボタンを押すと、そのタスクが一覧から消えます。
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-blue-800">
                ③ タスクの完了切り替え
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                タスクをクリックすると、完了・未完了を切り替えられます。
                完了したタスクには打ち消し線が表示されます。
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-blue-800">
                ④ 空文字のタスクは追加しない
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                何も入力せずに追加しても、タスクは追加されません。
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="mb-2 font-bold text-blue-800">
                ⑤ 配列 state の更新
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                setTasks(...) を使って配列を更新しています。
                push や splice で元の配列を直接変更していません。
              </p>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

export default App;