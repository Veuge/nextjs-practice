import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newDetails) => (
          <li>
            <Link key={newDetails.id} href={`/news/${newDetails.slug}`}>
              <img src={`/images/news/${newDetails.image}`} alt={newDetails.title} />
              <span>{newDetails.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}