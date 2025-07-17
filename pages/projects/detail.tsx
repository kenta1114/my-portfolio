import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto mt-12 px-4">
        <h1 className="text-2xl font-bold">{slug} のプロジェクト詳細</h1>
        <p className="mt-4">
          このページには、{slug} の概要、使用技術、工夫点などを掲載します。
        </p>
      </main>
      <Footer />
    </>
  );
}
