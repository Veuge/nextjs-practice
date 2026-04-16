import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const newItem = DUMMY_NEWS.find((dummy) => dummy.slug === params.id);

  if (!newItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
    </div>
  );
}