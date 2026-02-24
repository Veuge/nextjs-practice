import { getAvailableNewsYears, getNewsForYear } from "@/app/lib/news";
// import NewsList from "@/components/news-list";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log({ newsYear: filter });
  const links = getAvailableNewsYears();
  // return (
  //   <NewsList news={news} />
  // );
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}