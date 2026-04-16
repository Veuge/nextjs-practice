'use client';
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newItem = DUMMY_NEWS.find((dummy) => dummy.slug === params.id);

  if (!newItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
        </div>
      </dialog>
    </>
  );
}