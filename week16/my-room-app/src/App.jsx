import { useState } from "react";

import "./App.css";

import mainImage from "./assets/main.png";

import teaImage from "./assets/tea.jpg";
import flowerImage from "./assets/flower.jpg";

import springImage from "./assets/spring.webp";
import summerImage from "./assets/summer.jpg";
import autumnImage from "./assets/autumn.jpg";
import winterImage from "./assets/winter.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [today, setToday] = useState("tea");

    const todayItems = [
      {
        type: "tea",
        title: "🍵 今日のお茶",
        text: "抹茶をゆっくり味わって、心を落ち着かせてみましょう。",
      },
      {
        type: "flower",
        title: "🌸 今日の一輪",
        text: "季節の花を一輪飾って、身近に春の訪れを感じてみましょう。",
      },
      {
        type: "season",
        title: "🍁 今日の季節",
        text: "季節の移り変わりを感じながら、ゆっくり過ごしてみましょう。",
      },
      {
        type: "knowledge",
        title: "🏯 今日の和の豆知識",
        text: "茶道や華道では、季節を感じることが大切にされています。",
      },
    ];

    const currentItem = todayItems.find((item) => item.type === today);

  return (
    <div>
      {/*ヘッダー*/}
      <header>
        <h2>🌸 和ごころ</h2>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <a href="#home">ホーム</a>
          <a href="#culture">茶道・華道</a>
          <a href="#seasons">四季の和</a>
          <a href="#today">今日の和</a>
        </nav>
      </header>

      {/*メイン*/}
      <div id="home" className="main-visual">
        <img src={mainImage} alt="茶道と華道" />

        <div className="main-text">
            <h1>和ごころ</h1>
            <p>四季を感じる茶道と華道</p>
        </div>
      </div>

      {/*茶道、華道について*/}
      <section id="culture" className="culture">
        <h2>あなたはどちらの「和」を楽しみたい？</h2>

        <div className="culture-cards">

          <div className="culture-card">
            <img src={teaImage} alt="茶道" />
            <h3>🍵 茶道</h3>
            <p>お茶を通して、季節やおもてなしの心を楽しみます。</p>
            <a href="#">茶道を知る</a>
          </div>

          <div className="culture-card">
            <img src={flowerImage} alt="華道" />
            <h3>🌸 華道</h3>
            <p>花や植物を通して、季節や様々な美しさを楽しみます。</p>
            <a href="#">華道を知る</a>
          </div>

        </div>
      </section>

      {/*四季の和*/}
      <section id="seasons" className="seasons">
        <h2>四季の和</h2>

        <div className="season-cards">
          <div className="season-card">
            <img src={springImage} alt="春の風景" />
            <h3>🌸 春</h3>
            <p>桜や新しい季節の訪れを楽しむ</p>
          </div>

          <div className="season-card">
            <img src={summerImage} alt="夏の風景" />
            <h3>🌿 夏</h3>
            <p>涼しさや緑の美しさを楽しむ</p>
          </div>

          <div className="season-card">
            <img src={autumnImage} alt="秋の風景" />
            <h3>🍁 秋</h3>
            <p>紅葉や秋の風情を楽しむ</p>
          </div>

          <div className="season-card">
            <img src={winterImage} alt="冬の風景" />
            <h3>❄️ 冬</h3>
            <p>静かな冬の美しさを楽しむ</p>
          </div>
        </div>
      </section>

      {/*今日の和*/}
      <section id="today" className="today">
        <h2>今日の？？</h2>

        <div className="today-card">
          <h3>{currentItem.title}</h3>
          <p>{currentItem.text}</p>

          {/*ボタン*/}
          <button
            onClick={() => {
              const randomIndex = Math.floor(Math.random() * todayItems.length);
              setToday(todayItems[randomIndex].type);
            }}
          >
            今日の和を見てみる
          </button>
        </div>
      </section>

      {/*フッター*/}
      <footer>
        <h2>🌸 和ごころ</h2>
        <p>四季を感じる茶道と華道</p>
        <p>© 2026 和ごころ</p>
      </footer>

    </div>
  );
}

export default App;