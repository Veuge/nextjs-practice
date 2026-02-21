import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newDetails) => (
        <li>
          <Link key={newDetails.id} href={`/news/${newDetails.slug}`}>
            <img src={`/images/news/${newDetails.image}`} alt={newDetails.title} />
            <span>{newDetails.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}