import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto mt-12 px-4">
        <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>
        <p>以下のメールアドレスまでご連絡ください。</p>
        <p className="mt-4 text-blue-600 underline">your.email@example.com</p>
      </main>
      <Footer />
    </>
  );
}
