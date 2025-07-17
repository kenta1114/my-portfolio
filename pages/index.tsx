import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto mt-12 px-4">
        <h1 className="text-3xl font-bold mb-4">こんにちは、◯◯です。</h1>
        <p className="text-lg mb-8">
          フロントエンドエンジニアとして、React / Next.js
          を中心にWebアプリケーションを開発しています。
        </p>
        <p>
          使用技術: TypeScript, React, Next.js, Tailwind CSS, Firebase, etc.
        </p>
      </main>
      <Footer />
    </>
  );
}
