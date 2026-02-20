import Link from "next/link";

const news = [
  { id: 'first-news', title: 'First new item' },
  { id: 'second-news', title: 'Second new item' },
  { id: 'third-news', title: 'Third new item' },
];

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <main className="news-list">
        {news.map((newDetails) => (
          <Link key={newDetails.id} href={`/news/${newDetails.id}`}>
            <p>{newDetails.title}</p>
          </Link>
        ))}
      </main>
    </>
  );
}