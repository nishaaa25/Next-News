import { DUMMY_NEWS } from "@/dummy";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsItemSlug({ params }) {
  const { newsSlug } = await params;
  const news = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!news) {
    notFound();
  }

  return (
    <div className="w-screen min-h-screen relative">
      <div className="w-9/12 mx-auto py-20 flex flex-col place-items-center gap-2 text-center">
        <p className="text-3xl font-semibold mb-3">{news.title}</p>
        <Image
          src={`/images/news/${news.image}`}
          alt={news.title}
          width={300}
          height={300}
        />
        <p className="font-semibold opacity-60 italic mt-2">
          Posted on {news.date}
        </p>
        <p className="w-2/3">{news.content}</p>
      </div>
    </div>
  );
}
